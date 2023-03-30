import { ILoginDetails } from '../../modules/login/login.interface';

export const isUserValid = async (aLoginUserDetails: ILoginDetails) => {
	try {
		const url = `http://localhost:3000/api/login`;
		const serverResponse = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(aLoginUserDetails),
			headers: {
				'Content-type': 'application/json',
			},
		});

		if (!serverResponse.ok) {
			throw new Error('Something went wrong!');
		}

		const data = await serverResponse.json();
		return data.success;
	} catch (error) {
		alert('Error: ' + error);
	}
};
