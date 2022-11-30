import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';
import Button from './Components/Button';
import { Link } from 'react-router-dom';
import EmailInput from './Components/EmailInput';
import PasswordInput from './Components/PasswordInput';
import axios from 'axios';
import { withUser } from '../withProvider';
import { withAlert } from '../withProvider';



const callLoginApi = (values, bag) => {
	axios.post('https://myeasykart.codeyogi.io/login', {
		email: values.email,
		password: values.password
	}).then((response) => {
		const { user, token } = response.data;
		localStorage.setItem('token', token);
		bag.props.setUser(user);
		bag.props.setAlert({ type: "Success", message: "Login User successfully!" });
	}).catch(() => {
		bag.props.setAlert({ type: "Error", message: "Invalid Credentials" });
	});
};



const schema = Yup.object({
	email: Yup.string().required().email(),
	password: Yup.string().required().min(8).max(12)
});


const initialValues = {
	email: '',
	password: ''
};


export function LogIn({ handleSubmit, values, errors, touched, handleChange, handleBlur }) {

	return (
		<div className="h-full w-full p-4 py-28 items-center bg-gray-200">
			<form
				onSubmit={handleSubmit}
				className="bg-white items-center mx-auto pt-8 pb-4 px-6 max-w-xl rounded-md"
			>
				<div className="flex justify-between items-center">
					<h3 className="text-4xl sm:text-3xl">Hello there, welcome back</h3>
					<Link to="/">
						<HiOutlineArrowCircleLeft className="w-7 h-7 flex justify-center items-center hover:text-red-400" />
					</Link>
				</div>

				<div className="space-y-5 my-5">


					<EmailInput
						value={values.email}
						error={errors.email}
						touched={touched.email}
						onChange={handleChange}
						onBlur={handleBlur}
						autoComplete="email"
						id="email"
						name="email"
						labal="Email"
						type="email"
						placeholder="email" />


					<PasswordInput
						value={values.password}
						error={errors.password}
						touched={touched.password}
						onChange={handleChange}
						onBlur={handleBlur}
						autoComplete="current-password"
						id="password"
						name="password"
						labal="Password"
						placeholder="password"
						icon="true" />

					<div className="flex justify-end">
						<Link to="/forget">
							<span className="text-sm font-medium text-gray-500 hover:text-red-400 text">
								Forgot your password?
							</span>
						</Link>
					</div>

					<div className="flex flex-col">
						<Button type="submit">
							LogIn
						</Button>
					</div>

					<div className="text-xs md:text-sm flex lg:w-full justify-center ">
						<h4 className="text-gray-400">
							New Here ?<Link to="/signUp">
								<span className="font-medium text-gray-500 underline hover:text-primary mx-1 hover:text-red-400">
									SignUp
								</span>
							</Link>instead
						</h4>
					</div>
				</div>
			</form>
		</div>
	);
}

const FormikLogin = withFormik({
	validationSchema: schema,
	initialValues: initialValues,
	handleSubmit: callLoginApi,
})(LogIn);


export default withAlert(withUser(FormikLogin));
