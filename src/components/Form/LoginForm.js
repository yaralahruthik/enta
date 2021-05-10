import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const LoginForm = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const emailInputHandler = (event) => {
		setEmail(event.target.value);
	};

	const passwordInputHandler = (event) => {
		setPassword(event.target.value);
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setEmail('');
			setPassword('');
			history.push('/');
		} catch (error) {}
	};

	return (
		<div className='form'>
			<h2 className='form__title'>Have an account?</h2>
			<form onSubmit={submitHandler} className='form__form'>
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

				<input className='form__submit' type='submit' value='Sign In' />
				<button onClick={signInWithGoogle} className='form__google'>
					Sign In With Google
				</button>
			</form>
		</div>
	);
};

export default LoginForm;