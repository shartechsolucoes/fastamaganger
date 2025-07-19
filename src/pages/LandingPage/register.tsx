import './landing.css';
function Landing() {
	return (
		<>
			<section className="section contact__v2" id="contact">
				<div className="container">
					<div className="row mb-5">
						<div className="col-md-6 col-lg-7 mx-auto text-center">
							<span
								className="subtitle text-uppercase mb-3 aos-init aos-animate"
								data-aos="fade-up"
								data-aos-delay="0"
							>
								Cadastro
							</span>
							<h2
								className="h2 fw-bold mb-3 aos-init aos-animate"
								data-aos="fade-up"
								data-aos-delay="0"
							>
								Faça seu cadastro
							</h2>
							<p
								data-aos="fade-up"
								data-aos-delay="100"
								className="aos-init aos-animate"
							></p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="d-flex gap-5 flex-column"></div>
						</div>
						<div className="col-md-8">
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
										Cadastrar
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
