import React from 'react';
import { Outlet } from 'react-router';

export default function LandingPageLayout() {
	return (
		<>
			<div className="container landingPage">
				<nav className="navbar navbar-expand-lg">
					<a className="navbar-brand" href="#">
						<div className="app-brand d-block">
							<a href="#" className="d-block">
								<p>Fast</p>
								<p className="induca">Mananger</p>
							</a>
						</div>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse d-flex justify-content-end gap-3"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Sobre
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Planos
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Modulos
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Clientes
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Protocolos
								</a>
							</li>
							<li className="nav-item">
								<a className="btn  my-2 my-sm-0" href="register">
									Cadastrar
								</a>
							</li>
							<li className="nav-item">
								<a className="btn btn-info my-2 my-sm-0" href="login">
									Login
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<section className="section contact__v2" id="contact">
					<div className="container">
						<div className="row">
							<Outlet />
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
