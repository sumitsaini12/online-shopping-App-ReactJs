import React, { memo } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';
import Button from './Components/Button';
import { Link, Navigate } from 'react-router-dom';
import { FormikEmailInput } from './Components/EmailInput';
import { FormikPasswordInput } from './Components/PasswordInput';
import axios from 'axios';




function LogIn({ setUser, user }) {


	const callLoginApi = (values) => {
		axios.post('https://myeasykart.codeyogi.io/login', {
			email: values.email,
			password: values.password
		}).then((response) => {
			const { user, token } = response.data;
			localStorage.setItem('token', token);
			setUser(user);

		}).catch(() => {
			console.log('Invalid Credentials');
		});
		console.log("sending data ", values);

	};



	const schema = Yup.object({
		email: Yup.string().required().email(),
		password: Yup.string().required().min(8).max(12)
	});


	const initialValues = {
		email: '',
		password: ''
	};


	// if (user) {
	// 	return <Navigate to="/" />;
	// }

	return (
		<div className="h-full w-full p-4 py-28 items-center bg-gray-200">
			<Formik initialValues={initialValues}
				onSubmit={callLoginApi}
				validationSchema={schema}
				validateOnMount
			>
				<Form
					className="bg-white items-center mx-auto pt-8 pb-4 px-6 max-w-xl rounded-md"
				>
					<div className="flex justify-between items-center">
						<h3 className="text-4xl sm:text-3xl">Hello there, welcome back</h3>
						<Link to="/">
							<HiOutlineArrowCircleLeft className="w-7 h-7 flex justify-center items-center hover:text-red-400" />
						</Link>
					</div>

					<div className="space-y-5 my-5">


						<FormikEmailInput autoComplete="email" id="email" name="email" labal="Email" type="email" placeholder="email" />


						<FormikPasswordInput autoComplete="current-password" id="password" name="password" labal="Password" placeholder="password" icon="true" />

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
				</Form>
			</Formik>
		</div>
	);
}

export default memo(LogIn);

