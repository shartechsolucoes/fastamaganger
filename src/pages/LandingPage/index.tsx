import './landing.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Landing() {
	useEffect(() => {
		AOS.init({});
	});
	return (
		<>
			<section className="hero__v6 section" id="home">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 mb-4 mb-lg-0">
							<div className="row">
								<div className="col-lg-11">
									<span
										className="hero-subtitle text-uppercase aos-init aos-animate"
										data-aos="fade-up"
										data-aos-delay="0"
									>
										Gestão Inteligente
									</span>
									<h1
										className="hero-title mb-3 aos-init aos-animate"
										data-aos="fade-up"
										data-aos-delay="100"
									>
										Gestão Inteligente para Serviços Urbanos
									</h1>
									<p
										className="hero-description mb-4 mb-lg-5 aos-init aos-animate"
										data-aos="fade-up"
										data-aos-delay="200"
									>
										Experience the future of finance with our secure, efficient,
										and user-friendly financial services.
									</p>
									<div
										className="cta d-flex gap-2 mb-4 mb-lg-5 aos-init aos-animate"
										data-aos="fade-up"
										data-aos-delay="300"
									>
										<a className="btn" href="#">
											Faça seu cadastro Agora
										</a>
										<a className="btn btn-white-outline" href="#">
											Saiba Mais
											<svg
												className="lucide lucide-arrow-up-right"
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height="18"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path d="M7 7h10v10"></path>
												<path d="M7 17 17 7"></path>
											</svg>
										</a>
									</div>
									<div
										className="logos mb-4 aos-init aos-animate"
										data-aos="fade-up"
										data-aos-delay="400"
									>
										<span className="logos-title text-uppercase mb-4 d-block">
											Trusted by major companies worldwide
										</span>
										<div className="logos-images d-flex gap-4 align-items-center"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="hero-img"></div>
						</div>
					</div>
				</div>
			</section>

			<section id="pricing" className="pricing section d-none">
				<div
					className="container section-title aos-init aos-animate"
					data-aos="fade-up"
				>
					<h2>Planos</h2>
					<p>Adequado as suas Necessidades... </p>
				</div>

				<div className="container">
					<div className="row g-4 g-lg-0">
						<div
							className="col-lg-4 aos-init aos-animate"
							data-aos="zoom-in"
							data-aos-delay="100"
						>
							<div className="pricing-item luciano">
								<h3>📦Plano I – Essencial</h3>
								<h4>
									<sup>R$</sup>399<span> / Mês</span>
								</h4>
								<ul>
									<li>
										<i className="bi bi-check"></i>{' '}
										<span>
											{' '}
											Público-alvo: Prefeituras de pequeno porte ou distritos.
										</span>
									</li>
									<li>
										<i className="bi bi-check"></i>{' '}
										<span>🔹App com logo (marca própria)</span>
									</li>
									<li>
										<i className="bi bi-check"></i>
										<span>🔹Acesso ao app mobile para equipes</span>
									</li>
									<li>
										<i className="bi bi-check"></i>{' '}
										<span>🔹Controle de estoque com alertas de reposição</span>
									</li>
									<li>
										<i className="bi bi-check"></i>
										<span>🔹Relatórios automáticos por módulo</span>
									</li>
									<li>
										<i className="bi bi-check"></i>{' '}
										<span>🔹Suporte por e-mail e chat</span>
									</li>
								</ul>
								<div className="text-center">
									<a href="#" className="buy-btn">
										Click Aqui
									</a>
								</div>
							</div>
						</div>

						<div
							className="col-lg-4 featured aos-init aos-animate"
							data-aos="zoom-in"
							data-aos-delay="100"
						>
							<div className="pricing-item">
								<h3>📦 Plano II – Premium</h3>
								<h4>
									<sup>R$</sup>1.499<span> / mês</span>
								</h4>
								<ul>
									<li>
										<i className="bi bi-check"></i>{' '}
										<span>
											{' '}
											Público-alvo: Grandes prefeituras, consórcios regionais ou
											empresas terceirizadas.
										</span>
									</li>
									<li>
										<i className="bi bi-check"></i>{' '}
										<span>🔹App com logo (marca própria)</span>
									</li>
									<li>
										<i className="bi bi-check"></i>{' '}
										<span>🔹Integração com sistemas externos via API</span>
									</li>
									<li>
										<i className="bi bi-check"></i>
										<span>🔹SLA de atendimento prioritário (24h)</span>
									</li>
									<li>
										<i className="bi bi-check"></i>
										<span>🔹Relatórios personalizados sob demanda</span>
									</li>
									<li>
										<i className="bi bi-check"></i>
										<span>🔹Módulo de auditoria e histórico completo</span>
									</li>
								</ul>
								<div className="text-center">
									<a href="#" className="buy-btn">
										Click Aqui
									</a>
								</div>
							</div>
						</div>

						<div
							className="col-lg-4 aos-init aos-animate"
							data-aos="zoom-in"
							data-aos-delay="100"
						>
							<div className="pricing-item">
								<h3>Developer Plan</h3>
								<h4>
									<sup>$</sup>49<span> / month</span>
								</h4>
								<ul>
									<li>
										<i className="bi bi-check"></i>{' '}
										<span>Quam adipiscing vitae proin</span>
									</li>
									<li>
										<i className="bi bi-check"></i>{' '}
										<span>Nec feugiat nisl pretium</span>
									</li>
									<li>
										<i className="bi bi-check"></i>{' '}
										<span>Nulla at volutpat diam uteera</span>
									</li>
									<li>
										<i className="bi bi-check"></i>{' '}
										<span>Pharetra massa massa ultricies</span>
									</li>
									<li>
										<i className="bi bi-check"></i>
										<span>Massa ultricies mi quis hendrerit</span>
									</li>
								</ul>
								<div className="text-center">
									<a href="#" className="buy-btn">
										Buy Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section features" id="features">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div
								className="d-lg-flex aos-init aos-animate"
								data-aos="fade-in"
								data-aos-delay="0"
							>
								<div className="row">
									<div
										className="col-lg-5 mb-5 mb-lg-0 aos-init aos-animate"
										data-aos="fade-up"
										data-aos-delay="0"
									>
										<div className="row">
											<div className="col-lg-11">
												<div className="h-100 flex-column justify-content-between d-flex">
													<div>
														<h2 className="mb-4">Fast Mananger</h2>

														<p className="mb-5">
															O Sistema de Gerenciamento de Ordens de Serviço
															tem como objetivo principal modernizar e otimizar
															a gestão de serviços públicos como poda de
															árvores, iluminação pública, esgoto e limpeza
															urbana. A proposta é garantir agilidade,
															rastreabilidade, organização e transparência em
															todo o processo — desde o recebimento da
															solicitação até a conclusão do serviço.
														</p>
													</div>
													<div className="align-self-start">
														<a
															className="glightbox btn btn-play d-inline-flex align-items-center gap-2"
															href="https://www.youtube.com/watch?v=DQx96G4yHd8"
															data-gallery="video"
														>
															<i className="bi bi-play-fill"></i> Watch the
															Video
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-7">
										<div className="row justify-content-end">
											<div className="col-lg-11">
												<div className="row">
													<div
														className="col-sm-6 aos-init aos-animate"
														data-aos="fade-up"
														data-aos-delay="0"
													>
														<div className="icon text-center mb-4">
															<i className="bi bi-person-check fs-4"></i>
														</div>
														<h3 className="fs-6 fw-bold mb-3">
															Interface de facil interação
														</h3>
														<p>
															Easy navigation with responsive design for various
															devices.
														</p>
													</div>
													<div
														className="col-sm-6 aos-init aos-animate"
														data-aos="fade-up"
														data-aos-delay="100"
													>
														<div className="icon text-center mb-4">
															<i className="bi bi-graph-up fs-4"></i>
														</div>
														<h3 className="fs-6 fw-bold mb-3">Suporte 24H</h3>
														<p>
															24/7 service via chat, email, phone, and a
															detailed help center.
														</p>
													</div>
													<div
														className="col-sm-6 aos-init aos-animate"
														data-aos="fade-up"
														data-aos-delay="200"
													>
														<div className="icon text-center mb-4">
															<i className="bi bi-headset fs-4"></i>
														</div>
														<h3 className="fs-6 fw-bold mb-3">
															Customização do Dashboard
														</h3>
														<p>
															24/7 service via chat, email, phone, and a
															detailed help center.
														</p>
													</div>
													<div
														className="col-sm-6 aos-init aos-animate"
														data-aos="fade-up"
														data-aos-delay="300"
													>
														<div className="icon text-center mb-4">
															<i className="bi bi-shield-lock fs-4"></i>
														</div>
														<h3 className="fs-6 fw-bold mb-3">Segurança</h3>
														<p>
															Data encryption, fraud detection, and prevention
															mechanisms.
														</p>
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
			<section className="stats section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div
								className="d-flex flex-wrap content rounded-4 aos-init aos-animate"
								data-aos="fade-up"
								data-aos-delay="0"
							>
								<div className="rounded-borders">
									<div className="rounded-border-1"></div>
									<div className="rounded-border-2"></div>
									<div className="rounded-border-3"></div>
								</div>
								<div
									className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 text-center aos-init aos-animate"
									data-aos="fade-up"
									data-aos-delay="100"
								>
									<div className="stat-item">
										<h3 className="fs-1 fw-bold">
											<span
												className="purecounter"
												data-purecounter-start="0"
												data-purecounter-end="10"
												data-purecounter-duration="0"
											>
												10
											</span>
											<span>K+</span>
										</h3>
										<p className="mb-0">Protocolos abertos</p>
									</div>
								</div>
								<div
									className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 text-center aos-init aos-animate"
									data-aos="fade-up"
									data-aos-delay="200"
								>
									<div className="stat-item">
										<h3 className="fs-1 fw-bold">
											<span
												className="purecounter"
												data-purecounter-start="0"
												data-purecounter-end="99"
												data-purecounter-duration="0"
											>
												99
											</span>
											<span>%+</span>
										</h3>
										<p className="mb-0">Protocolos Resolvidos</p>
									</div>
								</div>
								<div
									className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 text-center aos-init aos-animate"
									data-aos="fade-up"
									data-aos-delay="300"
								>
									<div className="stat-item">
										<h3 className="fs-1 fw-bold">
											<span
												className="purecounter"
												data-purecounter-start="0"
												data-purecounter-end="20"
												data-purecounter-duration="0"
											>
												20
											</span>
											<span>+</span>
										</h3>
										<p className="mb-0">Empresas</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section pricing-v2" id="pricing">
				<div className="container">
					<div className="row mb-5">
						<div className="col-md-5 mx-auto text-center">
							<span
								className="subtitle text-uppercase mb-3 aos-init aos-animate"
								data-aos="fade-up"
								data-aos-delay="0"
							>
								Preços
							</span>
							<h2
								className="mb-3 aos-init aos-animate"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								Nossas soluções
							</h2>
							<p
								data-aos="fade-up"
								data-aos-delay="200"
								className="aos-init aos-animate"
							>
								Experience the future of finance with our secure, efficient, and
								user-friendly financial services
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-4 mb-4 mb-md-0 aos-init aos-animate"
							data-aos="fade-up"
							data-aos-delay="300"
						>
							<div className="p-5 rounded-4 price-table h-100">
								<h3>Pequenas empresas</h3>
								<p>
									Choose a plan that fits your personal financial needs and
									start managing your finances more effectively.
								</p>
								<div className="price mb-4">
									<strong>Free</strong>
									<span></span>
								</div>
								<div>
									<a className="btn" href="#">
										Cadastrar
									</a>
								</div>
							</div>
						</div>
						<div
							className="col-md-8 aos-init aos-animate"
							data-aos="fade-up"
							data-aos-delay="400"
						>
							<div className="p-5 rounded-4 price-table company h-100">
								<div className="row">
									<div className="col-md-6 text-white">
										<h3 className="mb-3 text-white">Personalizado</h3>
										<p className="text-white">
											Optimize your business financial operations with our
											tailored business plans.
										</p>
										<div className="price mb-4">
											<strong className="me-1 text-white">$29</strong>
											<span>/ month</span>
										</div>
										<div>
											<a
												className="btn btn-white hover-outline bg-white"
												href="#"
											>
												Entre em contato
											</a>
										</div>
									</div>
									<div className="col-md-6 pricing-features text-white">
										<h4 className="text-uppercase fw-bold mb-3 text-white">
											Módulos
										</h4>
										<ul className="list-unstyled d-flex flex-column gap-3">
											<li className="d-flex gap-2 align-items-start mb-0">
												<span className="icon rounded-circle position-relative mt-1">
													<i className="bi bi-check"></i>
												</span>
												<span>App com logo (marca própria)</span>
											</li>
											<li className="d-flex gap-2 align-items-start mb-0">
												<span className="icon rounded-circle position-relative mt-1">
													<i className="bi bi-check"></i>
												</span>
												<span>Integração com sistemas externos via API</span>
											</li>
											<li className="d-flex gap-2 align-items-start mb-0">
												<span className="icon rounded-circle position-relative mt-1">
													<i className="bi bi-check"></i>
												</span>
												<span>Relatórios personalizados sob demanda</span>
											</li>
											<li className="d-flex gap-2 align-items-start mb-0">
												<span className="icon rounded-circle position-relative mt-1">
													<i className="bi bi-check"></i>
												</span>
												<span>Módulo de auditoria e histórico completo</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section features" id="features">
				<div className="container">
					<div className="row">
						<div className="row mb-5">
							<div className="col-md-5 mx-auto text-center">
								<span
									className="subtitle text-uppercase mb-3 aos-init aos-animate"
									data-aos="fade-up"
									data-aos-delay="0"
								>
									Clientes
								</span>
								<h2
									className="mb-3 aos-init aos-animate"
									data-aos="fade-up"
									data-aos-delay="100"
								>
									Nossos Clientes
								</h2>
								<p
									data-aos="fade-up"
									data-aos-delay="200"
									className="aos-init aos-animate"
								>
									Experience the future of finance with our secure, efficient,
									and user-friendly financial services
								</p>
							</div>
						</div>
						<div
							className="col-2 text-center aos-init aos-animate"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<div className="box-client">
								<img
									src="https://vectorseek.com/wp-content/uploads/2023/09/Prefeitura-De-Curitiba-Logo-Vector.svg--300x98.png"
									className="img-fluid"
								/>
							</div>
						</div>
						<div
							className="col-2 text-center aos-init aos-animate"
							data-aos="fade-up"
							data-aos-delay="300"
						>
							<div className="box-client">
								<img
									src="https://vectorseek.com/wp-content/uploads/2023/09/Prefeitura-De-Curitiba-Logo-Vector.svg--300x98.png"
									className="img-fluid"
								/>
							</div>
						</div>
						<div
							className="col-2 text-center aos-init aos-animate"
							data-aos="fade-up"
							data-aos-delay="400"
						>
							<div className="box-client">
								<img
									src="https://vectorseek.com/wp-content/uploads/2023/09/Prefeitura-De-Curitiba-Logo-Vector.svg--300x98.png"
									className="img-fluid"
								/>
							</div>
						</div>
						<div
							className="col-2 text-center aos-init aos-animate"
							data-aos="fade-up"
							data-aos-delay="500"
						>
							<div className="box-client">
								<img
									src="https://vectorseek.com/wp-content/uploads/2023/09/Prefeitura-De-Curitiba-Logo-Vector.svg--300x98.png"
									className="img-fluid"
								/>
							</div>
						</div>
						<div
							className="col-2 text-center aos-init aos-animate"
							data-aos="fade-up"
							data-aos-delay="600"
						>
							<div className="box-client">
								<img
									src="https://vectorseek.com/wp-content/uploads/2023/09/Prefeitura-De-Curitiba-Logo-Vector.svg--300x98.png"
									className="img-fluid"
								/>
							</div>
						</div>
						<div
							className="col-2 text-center aos-init aos-animate"
							data-aos="fade-up"
							data-aos-delay="700"
						>
							<div className="box-client">
								<img
									src="https://vectorseek.com/wp-content/uploads/2023/09/Prefeitura-De-Curitiba-Logo-Vector.svg--300x98.png"
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section faq" id="faq">
				<div className="container">
					<div className="row mb-4">
						<div className="col-md-6 col-lg-7 mx-auto text-center">
							<span
								className="subtitle text-uppercase mb-3 aos-init aos-animate"
								data-aos="fade-up"
								data-aos-delay="0"
							>
								FAQ
							</span>
							<h2
								className="h2 fw-bold mb-3 aos-init aos-animate"
								data-aos="fade-up"
								data-aos-delay="0"
							>
								Perguntas Frequentes
							</h2>
							<p
								data-aos="fade-up"
								data-aos-delay="100"
								className="aos-init aos-animate"
							>
								Utilize our tools to develop your concepts and bring your vision
								to life. Once complete, effortlessly share your creations.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-8 mx-auto aos-init aos-animate"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<div className="faq-content">
								<div
									className="accordion custom-accordion"
									id="accordionPanelsStayOpenExample"
								>
									<div className="accordion-item">
										<h2 className="accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#panelsStayOpen-collapseOne"
												aria-expanded="false"
												aria-controls="panelsStayOpen-collapseOne"
											>
												{' '}
												Podemos inserir nossa logo e cores na dashboard?
											</button>
										</h2>
										<div
											className="accordion-collapse collapse"
											id="panelsStayOpen-collapseOne"
										>
											<div className="accordion-body">
												Our web agency offers a comprehensive range of services
												including web design and development, e-commerce
												solutions, SEO optimization, content creation, website
												maintenance, and digital marketing strategies. We tailor
												our services to meet the unique needs of each client,
												ensuring a customized approach to every project.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#panelsStayOpen-collapseTwo"
												aria-expanded="false"
												aria-controls="panelsStayOpen-collapseTwo"
											>
												{' '}
												É possivel fazer integração com nosso site?
											</button>
										</h2>
										<div
											className="accordion-collapse collapse"
											id="panelsStayOpen-collapseTwo"
										>
											<div className="accordion-body">
												The cost of building a website can vary widely depending
												on the complexity, features, and specific requirements
												of your project. We offer several pricing packages to
												accommodate different budgets and needs. After an
												initial consultation, we can provide a detailed quote
												based on your specific goals and objectives.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#panelsStayOpen-collapseThree"
												aria-expanded="false"
												aria-controls="panelsStayOpen-collapseThree"
											>
												{' '}
												Vocês possuem aplicativo?
											</button>
										</h2>
										<div
											className="accordion-collapse collapse"
											id="panelsStayOpen-collapseThree"
										>
											<div className="accordion-body">
												The timeline for designing and developing a website
												depends on the project's complexity and scope.
												Typically, a standard business website takes about 4-6
												weeks to complete, while more complex projects like
												e-commerce sites or custom applications may take longer.
												We work closely with our clients to establish a
												realistic timeline and keep you informed throughout the
												process.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#panelsStayOpen-collapseFour"
												aria-expanded="false"
												aria-controls="panelsStayOpen-collapseFour"
											>
												{' '}
												Quantos protocolos podem ser abertos por mês?
											</button>
										</h2>
										<div
											className="accordion-collapse collapse"
											id="panelsStayOpen-collapseFour"
										>
											<div className="accordion-body">
												Absolutely! All the websites we design and develop are
												fully responsive, meaning they are optimized to work
												seamlessly across all devices, including desktops,
												tablets, and smartphones. Ensuring a great user
												experience on mobile devices is a top priority in our
												development process.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section contact" id="contact">
				<div className="container">
					<div className="row mb-5">
						<div className="col-md-6 col-lg-7 mx-auto text-center">
							<span
								className="subtitle text-uppercase mb-3 aos-init aos-animate"
								data-aos="fade-up"
								data-aos-delay="0"
							>
								Contato
							</span>
							<h2
								className="h2 fw-bold mb-3 aos-init aos-animate"
								data-aos="fade-up"
								data-aos-delay="0"
							>
								Ficou com duvida?
							</h2>
							<p
								data-aos="fade-up"
								data-aos-delay="100"
								className="aos-init aos-animate"
							>
								Entre em contato e ...
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="d-flex gap-5 flex-column">
								<div
									className="d-flex align-items-start gap-3 aos-init aos-animate"
									data-aos="fade-up"
									data-aos-delay="0"
								>
									<div className="icon d-block">
										<i className="bi bi-telephone"></i>
									</div>
									<span>
										{' '}
										<span className="d-block">Phone</span>
										<strong>(41) 99541-9995</strong>
									</span>
								</div>
								<div
									className="d-flex align-items-start gap-3 aos-init aos-animate"
									data-aos="fade-up"
									data-aos-delay="100"
								>
									<div className="icon d-block">
										<i className="bi bi-send"></i>
									</div>
									<span>
										{' '}
										<span className="d-block">Email</span>
										<strong>info@shartech.com.br</strong>
									</span>
								</div>
								<div
									className="d-flex align-items-start gap-3 aos-init aos-animate"
									data-aos="fade-up"
									data-aos-delay="200"
								>
									<div className="icon d-block">
										<i className="bi bi-geo-alt"></i>
									</div>
									<span>
										{' '}
										<span className="d-block">Address</span>
										<address className="fw-bold">
											Rua Arnaldo Gusi 44, <br /> Xaxim Curitib/PR
										</address>
									</span>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div
								className="form-wrapper aos-init aos-animate"
								data-aos="fade-up"
								data-aos-delay="300"
							>
								<form id="contactForm">
									<div className="row gap-3 mb-3">
										<div className="col-md-12">
											<label className="mb-2" htmlFor="name">
												Name
											</label>
											<input
												className="form-control"
												id="name"
												type="text"
												name="name"
												required=""
											/>
										</div>
										<div className="col-md-12">
											<label className="mb-2" htmlFor="email">
												Email
											</label>
											<input
												className="form-control"
												id="email"
												type="email"
												name="email"
												required=""
											/>
										</div>
									</div>
									<div className="row gap-3 mb-3">
										<div className="col-md-12">
											<label className="mb-2" htmlFor="subject">
												Subject
											</label>
											<input
												className="form-control"
												id="subject"
												type="text"
												name="subject"
											/>
										</div>
									</div>
									<div className="row gap-3 gap-md-0 mb-3">
										<div className="col-md-12">
											<label className="mb-2" htmlFor="message">
												Message
											</label>
											<textarea
												className="form-control"
												id="message"
												name="message"
												rows="5"
												required=""
											></textarea>
										</div>
									</div>
									<button className="btn btn-primary fw-semibold" type="submit">
										Send Message
									</button>
								</form>
								<div
									className="mt-3 d-none alert alert-success"
									id="successMessage"
								>
									Message sent successfully!
								</div>
								<div
									className="mt-3 d-none alert alert-danger"
									id="errorMessage"
								>
									Message sending failed. Please try again later.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Landing;
