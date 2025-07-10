import { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import './index.css';
import './default.css';
import './form.css';

import { Outlet, useNavigate } from 'react-router';

import useAccessLevelStore from '../stores/accessLevelStore';

export default function Layout() {
	const navigate = useNavigate();
	const { handleAccessLevel, handleUserName, handleUserId } =
		useAccessLevelStore();
	const [token, setToken] = useState(localStorage.getItem('token') || '');

	const initializer = async () => {
		await setToken(localStorage.getItem('token') || '');
	};
	useEffect(() => {
		initializer();
		if (!token) {
			navigate('/login');
		}

		handleAccessLevel(parseInt(localStorage.getItem('accessLevel') || ''));
		handleUserName(localStorage.getItem('userName') || '');
		handleUserId(localStorage.getItem('userId') || '');
	}, []);

	return (
		<>
			{token && (
				<>
					<div className="layout-wrapper layout-content-navbar">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.568106013685!2d-46.65067468438826!3d-23.58309976877796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c99e7e5751%3A0xc540b7dd445aa79e!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1623343242580!5m2!1spt-BR!2sbr"
							allowFullScreen
							loading="lazy"
						></iframe>
						<div className="layout-container">
							<Sidebar />
							<div className="layout-page">
								<Navbar />
								<div className="container-full">
									<div className="row">
										<Outlet />
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}
