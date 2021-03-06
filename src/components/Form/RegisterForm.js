import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Loading from '../UI/Loading';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const RegisterForm = () => {
	const history = useHistory();
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const displayNameInputHandler = (event) => {
		setDisplayName(event.target.value);
	};

	const emailInputHandler = (event) => {
		setEmail(event.target.value);
	};

	const passwordInputHandler = (event) => {
		setError('');
		setPassword(event.target.value);
	};

	const confirmPasswordInputHandler = (event) => {
		setConfirmPassword(event.target.value);
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		setIsLoading(true);

		if (password !== confirmPassword) {
			setError('Passwords do not match!');
			setPassword('');
			setConfirmPassword('');
			return;
		}

		if (password.length < 6) {
			setError('Password should be atleast 6 characters');
			setPassword('');
			setConfirmPassword('');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });

			setDisplayName('');
			setEmail('');
			setPassword('');
			setConfirmPassword('');
			history.push('/')
		} catch (error) {}
		setIsLoading(false);
	};

	return (
		<div className='form'>
			{isLoading && <Loading />}
			<h2 className='form__title'>Do not have an account?</h2>
			<form onSubmit={submitHandler} className='form__form'>
				<input
					className='form__inputFields'
					name='displayName'
					type='text'
					placeholder='Display Name'
					onChange={displayNameInputHandler}
					value={displayName}
					required
				/>

				<input
					className='form__inputFields'
					name='email'
					type='email'
					placeholder='Email'
					onChange={emailInputHandler}
					value={email}
					required
				/>

				<input
					className='form__inputFields'
					name='password'
					type='password'
					placeholder='Password'
					onChange={passwordInputHandler}
					value={password}
					required
				/>

				<input
					className='form__inputFields'
					name='password'
					type='password'
					placeholder='Confirm Password'
					onChange={confirmPasswordInputHandler}
					value={confirmPassword}
					required
				/>
				{error && <p className='form__error'>{error}!</p>}
				<input className='form__submit' type='submit' value='Sign Up' />
			</form>
		</div>
	);
};

export default RegisterForm;
