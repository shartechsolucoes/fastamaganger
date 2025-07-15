import { NavLink } from 'react-router';
import { privateRoutes, RouteItem } from '../../routes/PrivateRoutes';
import './styles.css';
import useAccessLevelStore from '../../stores/accessLevelStore';
import Navbar from 'react-bootstrap/Navbar';
import {
	MdDashboard,
	MdSubject,
	MdFeaturedPlayList,
	MdHomeRepairService,
	MdFormatPaint,
	MdHomeWork,
} from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';

export default function Sidebar() {
	const { accessLevel } = useAccessLevelStore();

	const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

	const toggleMenu = () => {
		const r = document.documentElement;
		r.style.cssText = '--menu-position: -100vw;';
	};

	const toggleSubmenu = (name: string, route: string) => {
		setOpenSubmenus((prev) => ({ ...prev, [name]: !prev[name] }));
	};

	function icons(icon: string): JSX.Element {
		switch (icon) {
			case 'dashboard':
				return <MdDashboard className="menu-icon tf-icons" />;
			case 'protocol':
				return <MdFeaturedPlayList className="menu-icon tf-icons" />;
			case 'services':
				return <MdHomeRepairService className="menu-icon tf-icons" />;
			case 'stock':
				return <MdFormatPaint className="menu-icon tf-icons" />;
			case 'company':
				return <MdHomeWork className="menu-icon tf-icons" />;
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
							<p className="induca">Mananger</p>
						</a>
						<a className="close-toggle d-xl-none" onClick={toggleMenu}>
							<IoIosArrowBack />
						</a>
					</div>

					<div className="menu-inner-shadow"></div>

					<ul className="menu-inner py-1 pt-5 bg-color">
						{privateRoutes.map((route: RouteItem, index: number) =>
							route.access.includes(accessLevel) ? (
								<li key={index} className="menu-item menu-item-w">
									{route.children ? (
										<>
											<a
												className="menu-link menu-toggle"
												aria-current="page"
												onClick={() =>
													toggleSubmenu(
														route.name,
														route?.children?.find(
															(child) => child.visible === true
														)?.path ?? ''
													)
												}
											>
												{icons(route.icon)}
												<div data-i18n="User interface">{route.name}</div>
											</a>

											{openSubmenus[route.name] && (
												<ul
													className={`menu-sub ${
														openSubmenus[route.name] ? 'open' : ''
													}`}
												>
													{route.children?.map((sub: RouteItem, idx: number) =>
														sub.access.includes(accessLevel) ? (
															sub.visible ? (
																<li key={idx} className="menu-item">
																	<NavLink
																		to={sub.path}
																		className="menu-link"
																		onClick={toggleMenu}
																	>
																		{icons(sub.icon)}
																		{sub.name}
																	</NavLink>
																</li>
															) : null
														) : null
													)}
												</ul>
											)}
										</>
									) : (
										<NavLink
											className={'menu-link'}
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
