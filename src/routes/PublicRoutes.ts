import LandingPageLayout from '../layout/LandingPage';
import LandingPage from '../pages/LandingPage';
import LandingPrices from '../pages/LandingPage/pricing';
import Register from '../pages/LandingPage/register';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import Traking from '../pages/Tracking';

export const publicRoutes = [
	{
		name: 'FastMananger',
		path: '/landing',
		component: LandingPage,
		layout: LandingPageLayout,
	},
	{ name: 'Acompanhamento', path: '/tracking', component: Traking },
	{
		name: 'prices',
		path: '/prices',
		component: LandingPrices,
		layout: LandingPageLayout,
	},
	{
		name: 'register',
		path: '/register',
		component: Register,
		layout: LandingPageLayout,
	},
	{ name: 'login', path: '/login', component: Login },
	{ name: 'signIn', path: '/sign-in', component: SignIn },
];
