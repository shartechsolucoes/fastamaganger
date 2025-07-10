import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Form from '../pages/Form';
import Protocols from '../pages/Protocols';
import ProtocolsView from '../pages/Protocols/View';

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
				name: 'Novo usuário',
				path: '/protocols/:number',
				icon: '',
				component: ProtocolsView,
				access: [0, 1],
				visible: false,
			},
		],
	},
	{
		name: 'Serviços',
		path: '/services',
		icon: 'dashboard',
		component: Dashboard,
		access: [0, 1, 2, 3, 4, 5, 6],
	},
	{
		name: 'Estoque',
		path: '/stock',
		icon: 'dashboard',
		component: Dashboard,
		access: [0, 1, 2, 3, 4, 5, 6],
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



];
