import { redirect } from 'react-router-dom';
import { localStorageService } from './localStorage.service';

const isLoggedIn = localStorageService.get('isLoggedIn');

export const redirectToDefaultRoute = (): Response | null => {
	if (!isLoggedIn) {
		return redirect('/login');
	}
	return null;
};

export const redirectToMainRoute = (): Response | null => {
	if (isLoggedIn) {
		return redirect('/');
	}
	return null;
};
