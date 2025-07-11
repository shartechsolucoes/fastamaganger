import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Form from '../pages/Form';

import Company from '../pages/Company';
import CompanyView from '../pages/Company/View';

import Stock from '../pages/Stock';
// import StockView from '../pages/Stock/View';

import Protocols from '../pages/Protocols';
import ProtocolsView from '../pages/Protocols/View';
import ProtocolsReport from '../pages/Protocols/Report';
import ProtocolBlackList from '../pages/Protocols/BlackList';

import Services from '../pages/Services';


export type RouteItem = {
	name: string;
	path: string;
	icon: string;
	component: React.ComponentType;
	access: number[];
	visible?: boolean;
	children?: RouteItem[];
}

export const privateRoutes: RouteItem[] = [
	{
		name: 'Dashboard',
		path: '/',
		icon: 'dashboard',
		component: Dashboard,
		access: [0, 1, 2, 3, 4, 5, 6],
	},
	{
		name: 'Protocolos',
		path: '/protocols',
		icon: 'dashboard',
		component: Protocols,
		access: [0, 1, 2, 3, 4, 5, 6],
		children: [
			{
				name: 'view',
				path: '/protocols/:number',
				icon: '',
				component: ProtocolsView,
				access: [0, 1],
				visible: false,
			},
			{
				name: 'Relatorio',
				path: '/protocols/report',
				icon: '',
				component: ProtocolsReport,
				access: [0, 1],
				visible: true,
			},
			{
				name: 'Black List',
				path: '/protocols/BlackList',
				icon: '',
				component: ProtocolBlackList,
				access: [0, 1],
				visible: true,
			},
		],
	},
	{
		name: 'Serviços',
		path: '/services',
		icon: 'dashboard',
		component: Services,
		access: [0, 1, 2, 3, 4, 5, 6],
		children: [
			{
				name: 'Intens',
				path: '/stock/intens',
				icon: '',
				component: Form,
				access: [0, 1],
				visible: true,
			},
		],
	},
	{
		name: 'Estoque',
		path: '/stock',
		icon: 'dashboard',
		component: Stock,
		access: [0, 1, 2, 3, 4, 5, 6],
		children: [
			{
				name: 'Intens',
				path: '/stock/intens',
				icon: '',
				component: Form,
				access: [0, 1],
				visible: true,
			},
			{
				name: 'Kits',
				path: '/stock/kits',
				icon: '',
				component: Form,
				access: [0, 1],
				visible: true,
			},
			{
				name: 'Relatorios',
				path: '/stock/report',
				icon: '',
				component: Form,
				access: [0, 1],
				visible: true,
			},
		],
	},
	{
		name: 'Usuarios',
		path: '/users',
		icon: 'users',
		component: Users,
		access: [0, 1, 2],
		children: [
			{
				name: 'Novo usuário',
				path: '/users/form',
				icon: '',
				component: Form,
				access: [0, 1],
				visible: true,
			},
		],
	},

	{
		name: 'Empresas',
		path: '/company',
		icon: 'company',
		component: Company,
		access: [0, 1],
		children: [
			{
				name: 'Empresa',
				path: '/company/:number',
				icon: '',
				component: CompanyView,
				access: [0, 1],
				visible: true,
			},
		],
	},



];
