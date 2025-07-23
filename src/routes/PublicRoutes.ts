import LandingPageLayout from '../layout/LandingPage';
import LandingPage from '../pages/LandingPage';
import LandingPrices from '../pages/LandingPage/pricing';
import Register from '../pages/LandingPage/register';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import Traking from '../frames/Tracking';
import PublicProtocol from '../pages/PublicProtocol';

export const publicRoutes = [
	{
		name: 'FastMananger',
		path: '/',
		component: LandingPage,
		layout: LandingPageLayout,
	},
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
	{
		name: 'Protocolos',
		path: '/public-protocols',
		component: PublicProtocol,
		layout: LandingPageLayout,
	},
	{ name: 'Acompanhamento', path: 'frame/tracking', component: Traking },
	{ name: 'login', path: '/login', component: Login },
	{ name: 'signIn', path: '/sign-in', component: SignIn },
];
