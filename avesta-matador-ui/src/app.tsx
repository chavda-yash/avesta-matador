import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './modules/home/home';
import Login from './modules/login/login';
import {
	redirectToDefaultRoute,
	redirectToMainRoute,
} from './shared/services/routes';
import './styles/app.css';

const router = createBrowserRouter([
	{ path: '/', element: <Home />, loader: redirectToDefaultRoute },
	{ path: '/login', element: <Login />, loader: redirectToMainRoute },
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
