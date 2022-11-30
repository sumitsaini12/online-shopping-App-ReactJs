import React from 'react';
import { withFormik } from 'formik';
import * as Yup from "yup";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import Button from "./Components/Button";
import { Link, Navigate } from 'react-router-dom';
import NameInput from './Components/NameInput';
import EmailInput from './Components/EmailInput';
import PasswordInput from './Components/PasswordInput';
import axios from 'axios';
import { withAlert, withUser } from '../withProvider';
import { useEffect } from 'react';


const schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8).max(12),
  confirmPassword: Yup.string().required().min(8).max(12),
});

const callLoginApi = (values, bag) => {
  axios.post('https://myeasykart.codeyogi.io/signup', {
    fullName: values.name,
    email: values.email,
    password: values.password
  }).then((response) => {
    const { user, token } = response.data;
    localStorage.setItem('token', token);
    bag.props.setUser(user);
    bag.props.setAlert({ type: "Success", message: "SignUp User successfully!" });
  }).catch(() => {
    bag.props.setAlert({ type: "Error", message: "Invalid Credentials" });
  });
  console.log("sending data ", values);

};

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export function SignUp({ handleSubmit, values, errors, touched, handleChange, handleBlur }) {

  return (
    <div className="h-full w-full p-4 py-28 items-center bg-gray-200">

      <form
        onSubmit={handleSubmit}
        className="bg-white items-center mx-auto pt-8 pb-4 px-6 max-w-xl rounded-md">
        <div className="flex justify-between items-center">
          <h3 className="text-4xl">Get On Board</h3>
          <Link to="/">
            <HiOutlineArrowCircleLeft className="w-7 h-7 flex justify-center items-center hover:text-red-400" />
          </Link>
        </div>


        <div className="space-y-5 my-5">

          <NameInput value={values.name} onChange={handleChange} onBlur={handleBlur}
            error={errors.name} touched={touched.name} autoComplete="email" id="name" name="name" labal="Name" type="text" placeholder="name" />


          <EmailInput value={values.email} onChange={handleChange} onBlur={handleBlur}
            error={errors.email} touched={touched.email} autoComplete="email" id="email" name="email" labal="Email" type="email" placeholder="email" />



          <PasswordInput value={values.password} onChange={handleChange} onBlur={handleBlur}
            error={errors.password} touched={touched.password} autoComplete="current-password" id="password" name="password" labal="Password" placeholder="password" icon="true" />


          <PasswordInput value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} error={errors.confirmPassword} touched={touched.confirmPassword} autoComplete="confirm-password" id="confirm-password" name="confirmPassword" labal="Confirm-Password" placeholder="Confirm Password" />


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
      </form>

    </div >
  );
}

const FormikSignUp = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
})(SignUp);


export default withAlert(withUser(FormikSignUp));