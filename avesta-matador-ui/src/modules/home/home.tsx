import { localStorageService } from '../../shared/services/localStorage.service';

const Home = (): JSX.Element => {
	const userLogout = (): void => {
		localStorageService.remove('isLoggedIn');
		window.location.assign('/login');
	};

	return (
		<div>
			<h1>Home Page</h1>
			<button onClick={userLogout}>Logout</button>
		</div>
	);
};

export default Home;
