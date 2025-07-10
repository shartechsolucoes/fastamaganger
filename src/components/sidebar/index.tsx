import { NavLink } from 'react-router';
import { privateRoutes, RouteItem } from '../../routes/PrivateRoutes';
import './styles.css';
import useAccessLevelStore from '../../stores/accessLevelStore';
import Navbar from 'react-bootstrap/Navbar';
import {
	MdDashboard,
	MdSubject,
	MdClass,
} from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import {PiChalkboardTeacher, PiStudentFill} from "react-icons/pi";
import {CiCalendarDate} from "react-icons/ci";
import {LuSchool, LuUsers} from "react-icons/lu";
import {FaGears} from "react-icons/fa6";


export default function Sidebar() {
	const { accessLevel } = useAccessLevelStore();

	const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

	const toggleMenu = () => {
		const r = document.documentElement;
		r.style.cssText = '--menu-position: -100vw;';
	};

	const toggleSubmenu = (name: string) => {
		setOpenSubmenus((prev) => ({ ...prev, [name]: !prev[name] }));
	};

	function icons(icon: string): JSX.Element {
		switch (icon) {
			case 'dashboard':
				return <MdDashboard className="menu-icon tf-icons" />;
			case 'class':
				return <MdClass className="menu-icon tf-icons" />;
			case 'students':
				return <PiStudentFill className="menu-icon tf-icons" />;
			case 'teachers':
				return <PiChalkboardTeacher	className="menu-icon tf-icons" />;
			case 'agenda':
				return <CiCalendarDate className="menu-icon tf-icons" />;
			case 'config':
				return <FaGears className="menu-icon tf-icons" />;
			case 'school':
				return <LuSchool className="menu-icon tf-icons" />;
			case 'users':
				return <LuUsers className="menu-icon tf-icons" />;
			default:
				return <MdSubject className="menu-icon tf-icons" />;
		}
	}

	return (
		<>
			{['md'].map((expand) => (
				<Navbar
					key={expand}
					expand={expand}
					className="layout-menu menu-vertical menu bg-menu-theme navbar-toggle"
				>
					<div className="app-brand d-block">
						<a href="#" className="d-block">
							<p>Fast</p>
							<p className='induca'>Mananger</p>
						</a>
						<a className="close-toggle d-xl-none" onClick={toggleMenu}>
							<IoIosArrowBack />
						</a>
					</div>

					<div className="menu-inner-shadow"></div>

					<ul className="menu-inner py-1 pt-5 bg-color">

						{privateRoutes.map((route: RouteItem, index: number) =>
							route.access.includes(accessLevel) ? (

								<li key={index} className="menu-item">
									{route.children ? (

										<>
											<NavLink
												className="menu-link menu-toggle"
												aria-current="page"
												to={route.path}
												onClick={() => toggleSubmenu(route.name)}
											>
												{icons(route.icon)}
												<div data-i18n="User interface">{route.name}</div>
											</NavLink>

											{openSubmenus[route.name] && (

												<ul className={`menu-sub ${openSubmenus[route.name] ? 'open' : ''}`}>
													{route.children?.map((sub: RouteItem, idx: number) => (
														sub.access.includes(accessLevel) ? (
															sub.visible ? (
																<li key={idx} className="menu-item">
																	<NavLink to={sub.path} className="menu-link" onClick={toggleMenu}>
																		{icons(sub.icon)}
																		{sub.name}
																	</NavLink>
																</li>
															) : null
														) : null
													))}
												</ul>
											)}
										</>

									) : (
										<NavLink
											className="menu-link menu-toggle"
											aria-current="page"
											to={route.path}
											onClick={toggleMenu}
										>
											{icons(route.icon)}
											<div data-i18n="User interface">{route.name}</div>
										</NavLink>
									)}
								</li>
							) : null
						)}
					</ul>
				</Navbar>
			))}
		</>
	);
}