import Form from '../components/Form/Form';

import { signInWithGoogle } from '../firebase/firebase.utils';

const Login = (props) => {
	return (
		<div className='login'>
			<Form />
			<button onClick={signInWithGoogle} className='login__google'>Sign In With Google</button>
		</div>
	);
};

export default Login;
