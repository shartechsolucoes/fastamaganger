import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import { MENU } from './data';

export default function LandingPageLayout() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<div className="container landingPage">
			<nav className="navbar navbar-expand-lg">
				<a className="navbar-brand" href="#">
					<div className="app-brand d-block">
						<p>Fast</p>
						<p className="induca">Mananger</p>
					</div>
				</a>

				<button
					className="navbar-toggler"
					type="button"
					onClick={toggleMenu}
					aria-controls="navbarSupportedContent"
					aria-expanded={isOpen}
					aria-label="Alternar navegação"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className={`collapse navbar-collapse justify-content-end gap-3 ${
						isOpen ? 'show' : ''
					}`}
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ms-auto">
						{MENU.map((menu) => (
							<li className="nav-item">
								<NavLink className="nav-link" to={menu.router}>
									{menu.title}
								</NavLink>
							</li>
						))}
						<li className="nav-item">
							<a className="btn btn-outline-primary mx-1" href="register">
								Cadastrar
							</a>
						</li>
						<li className="nav-item">
							<a className="btn btn-info text-white mx-1" href="login">
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
	);
}
