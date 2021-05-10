import LoginForm from '../components/Form/LoginForm';
import RegisterForm from '../components/Form/RegisterForm';

const Login = (props) => {
	return (
		<div className='login'>
			<div className='login__signIn'>
				<LoginForm />
			</div>
			<div className='login__signUp'>
				<RegisterForm />
			</div>
		</div>
	);
};

export default Login;
