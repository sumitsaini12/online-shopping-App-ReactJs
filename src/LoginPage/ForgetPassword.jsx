import React from 'react';
import { withFormik } from 'formik';
import * as Yup from "yup";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import Button from "./Components/Button";
import { Link } from 'react-router-dom';
import EmailInput from './Components/EmailInput';

const schema = Yup.object({
  email: Yup.string().required().email(),
});

const callLoginApi = (values) => {
  console.log("this is Login Data", values.email);
};

const initialValues = {
  email: '',
};


function ForgetPassword({ handleSubmit, values, errors, touched, handleChange, handleBlue}) {

  

  return (
    <div className="h-full w-full p-4 py-28 items-center bg-gray-200">
        <form
        onSubmit={handleSubmit}
         className="bg-white items-center mx-auto py-8 px-6 max-w-xl rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-4xl">Password Help</h3>
            <Link to="/">
              <HiOutlineArrowCircleLeft className="w-7 h-7 flex justify-center items-center hover:text-red-400" />
            </Link>
          </div>

          <div className="text-xs font-poppins tracking-tighter my-4">
            <p>Enter your email address. You will receive an email with a link to reset your password.</p>
          </div>

          <div className="space-y-5 my-5">

          <EmailInput value={values.email} onChange={handleChange} onBlur={handleBlue}
						error={errors.email} touched={touched.email} autoComplete="email" id="email" name="email" labal="Email" type="email" placeholder="email" />


            <div className="flex justify-end">
              <Link to="/login"> <span className="text-sm font-medium text-gray-500 hover:text-red-400 text">Back To LogIn</span></Link>
            </div>

            <div className="flex flex-col">
              <Button>Get Password</Button>
            </div>

          </div>
        </form>
    </div>
  );
}

export default withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  onSubmit:callLoginApi
})(ForgetPassword);
