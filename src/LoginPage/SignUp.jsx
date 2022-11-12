import React, { memo } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import Button from "./Components/Button";
import { Link } from 'react-router-dom';
import { FormikNameInput } from './Components/NameInput';
import { FormikEmailInput } from './Components/EmailInput';
import { FormikPasswordInput } from './Components/PasswordInput';
import axios from 'axios';

function SignUp({ setUser, user }) {

  const schema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(12),
    confirmPassword: Yup.string().required().min(8).max(12),
  });
  // const callLoginApi = (values) => {
  //   console.log("this is Login Data", values.name, values.email, values.password, values.confirmPassword);
  // };

  const callLoginApi = (values) => {
    axios.post('https://myeasykart.codeyogi.io/signup', {
      fullName: values.name,
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






  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };


  return (
    <div className="h-full w-full p-4 py-28 items-center bg-gray-200">
      <Formik initialValues={initialValues}
        onSubmit={callLoginApi}
        validationSchema={schema}
        validateOnMount
      >
        <Form className="bg-white items-center mx-auto pt-8 pb-4 px-6 max-w-xl rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-4xl">Get On Board</h3>
            <Link to="/">
              <HiOutlineArrowCircleLeft className="w-7 h-7 flex justify-center items-center hover:text-red-400" />
            </Link>
          </div>


          <div className="space-y-5 my-5">

            <FormikNameInput autoComplete="email" id="name" name="name" labal="Name" type="text" placeholder="name" />

            <FormikEmailInput autoComplete="email" id="email" name="email" labal="Email" type="email" placeholder="email" />

            <FormikPasswordInput autoComplete="current-password" id="password" name="password" labal="Password" placeholder="password" icon="true" />


            <FormikPasswordInput autoComplete="confirm-password" id="confirm-password" name="confirmPassword" labal="Confirm-Password" placeholder="Confirm Password" />


            <div className="text-center">
              <p className="text-xs font-thin">By creating an account, you agree to the<span className="underline cursor-pointer hover:text-red-400">T&C</span>and<span className="underline cursor-pointer hover:text-red-400">Privacy Policy</span></p>
            </div>
            <div className="flex flex-col">
              <Button type="submit">Sign Up</Button>
            </div>

            <div className="text-xs md:text-sm flex lg:w-full justify-center "><h4 className="text-gray-400">Already a member?
              <Link to="/login"><span className="font-medium text-gray-500 underline hover:text-primary mx-1 text-md hover:text-red-400">Login</span></Link></h4>
            </div>
          </div>
        </Form>
      </Formik>
    </div >
  );
}

export default memo(SignUp)
