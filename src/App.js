import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Error from './components/Error.js';
import Contact from './components/Contact.js';
// import RestrauntMenu from './components/RestrauntMenu.js';
const RestrauntMenu = lazy(() => import('./components/RestrauntMenu.js'));
import Profile from './components/Profile.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Shimmer from './components/Shimmer.js';
// import Instamart from './components/Instamart.js';
const Instamart = lazy(() => import('./components/Instamart.js'));
import UserContext from './utils/UserContext.js';
// redux
import { Provider } from 'react-redux';
import store from './utils/store.js';
import Cart from './components/Cart.js';

const AppLayout = () => {
	const [user, setUser] = useState({
		name: 'Manish Mandal',
		email: 'manish.kumar.mandal411@gmail.com',
	});
	return (
		// <>
		// 	<Header />
		// 	<Outlet />
		// 	<Footer />
		// </>
		<Provider store={store}>
			<UserContext.Provider value={{ user: user, setUser: setUser }}>
				<Header />
				<Outlet />
				<Footer />
			</UserContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Body />,
			},
			{
				path: '/about',
				element: <About />,
				children: [
					{
						path: 'profile',
						element: <Profile />,
					},
				],
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/restraunt/:id',
				element: (
					<Suspense>
						<RestrauntMenu />
					</Suspense>
				),
			},
			{
				path: '/instamart',
				element: (
					<Suspense fallback={<Shimmer />}>
						<Instamart />
					</Suspense>
				),
			},
			{
				path: '/cart',
				element: <Cart />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
