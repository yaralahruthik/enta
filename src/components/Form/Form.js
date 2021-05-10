import { useFormik } from 'formik';

const validate = values => {
	const errors = {};
	
	if (!values.email) {
		errors.email = 'Required!';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	
	if (!values.password) {
		errors.password = 'Required!';
	} else if (values.password.length < 6) {
		errors.password = 'Must be greater than 6 characters';
	}

	return errors;
}

const Form = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<form className='form' onSubmit={formik.handleSubmit}>
			<label htmlFor='email'>Email</label>
			<input
				id='email'
				name='email'
				type='email'
				placeholder='Email'
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.email}
			/>
			{formik.touched.email && formik.errors.email && (
				<div>{formik.errors.email}</div>
			)}
			<label htmlFor='password'>Password</label>
			<input
				id='password'
				name='password'
				type='password'
				placeholder='Password'
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.password}
			/>
			{formik.touched.password && formik.errors.password && (
				<div>{formik.errors.password}</div>
			)}

			<button type='submit'>Login / Register</button>
		</form>
	);
};

export default Form;
