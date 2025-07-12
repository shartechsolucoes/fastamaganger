import LandingPage from '../pages/LandingPage';
import LandingPrices from '../pages/LandingPage/pricing';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';

export const publicRoutes = [
	{ name: 'FastMananger', path: '/landing', component: LandingPage },
	{ name: 'prices', path: '/prices', component: LandingPrices },
	{ name: 'login', path: '/login', component: Login },
	{ name: 'signIn', path: '/sign-in', component: SignIn },
];
