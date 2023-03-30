import { object, string } from 'yup';

export const loginValidation = () => {
	return object({
		username: string()
			.trim()
			.min(2, 'Username must be at least 2 characters')
			.required('Please enter your username'),
		password: string()
			.trim()
			.min(6, 'Password must be at least 6 characters')
			.required('Please enter your password'),
	});
};
