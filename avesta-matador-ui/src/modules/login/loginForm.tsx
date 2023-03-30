import { Divider } from '@blueprintjs/core';
import { Form, Formik, FormikHelpers } from 'formik';
import { isUserValid } from '../../shared/services/httpServices';
import { localStorageService } from '../../shared/services/localStorage.service';
import Button from '../../shared/ui/button/button';
import Checkbox from '../../shared/ui/formik/checkbox';
import FormContainer from '../../shared/ui/formik/formContainer';
import Field from '../../shared/ui/formik/inputField';
import Label from '../../shared/ui/label/label';
import { IFormValues, ILoginDetails } from './login.interface';
import { loginValidation } from './loginValidation';

const LoginForm = (): JSX.Element => {
	const initialValues: IFormValues = {
		username: '',
		password: '',
		isRememberedUser: false,
	};

	const userDetails = localStorageService.get('loginUserDetails');

	if (userDetails) {
		initialValues.username = userDetails.username;
		initialValues.password = userDetails.password;
		initialValues.isRememberedUser = true;
	}

	const checkRememberMe = (
		aValues: IFormValues,
		aLoginDetails: ILoginDetails
	) => {
		if (aValues.isRememberedUser) {
			storeLoginUserDetails(aLoginDetails);
		} else {
			removeLoginUserDetails();
		}
	};

	const storeLoginUserDetails = (aLoginDetails: ILoginDetails): void => {
		localStorageService.set(
			'loginUserDetails',
			JSON.stringify(aLoginDetails)
		);
	};

	const removeLoginUserDetails = () => {
		localStorageService.remove('loginUserDetails');
	};

	const onSubmit = async (
		values: IFormValues,
		actions: FormikHelpers<IFormValues>
	) => {
		const loginDetails: ILoginDetails = {
			username: values.username,
			password: values.password,
		};

		if (await isUserValid(loginDetails)) {
			// After validate user details check user clicked remember me or not ?
			checkRememberMe(values, loginDetails);

			// Add below this step for once when not required remember me button
			localStorageService.set('isLoggedIn', '"yes"');
			window.location.assign('/');
			return;
		}

		actions.resetForm();
	};

	// ===== For Dev =====
	// username: admin
	// password: Lionking@9

	return (
		<FormContainer>
			<Formik
				initialValues={initialValues}
				validationSchema={loginValidation}
				validateOnChange={false}
				enableReinitialize={true}
				onSubmit={(values, actions) => {
					onSubmit(values, actions);
				}}
			>
				<Form className="login-form">
					<Label title="Logger for Rev" />
					<Divider className="divider" />

					<Field type="text" name="username" placeholder="Username" />

					<Field
						type="password"
						name="password"
						placeholder="Password"
					/>

					<Checkbox name="isRememberedUser">Remember Me</Checkbox>

					<Button type="submit" title="Login" />
				</Form>
			</Formik>
		</FormContainer>
	);
};

export default LoginForm;
