import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import InputField from "./InputField";
import { Alert } from "react-bootstrap";

const UserForm = ({ issigninForm, handleSubmit, errorMessage }) => {
  
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Enter password'),
    email: Yup.string()
      .email()
      .required("Enter your Email")
  });
  
  return ( <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        {
          ({
             values,
             handleChange,
             handleSubmit,
             errors
           }) => {
            const { email, password } = values;
            
            return (
              <form onSubmit={handleSubmit} className="user-form">
                
                {errorMessage && (
                  <Alert className={"user-form-alert-message"} variant="danger">
                    {errorMessage}
                  </Alert> )}
                
                <p className="form-wrapper--title">
                  {issigninForm ? "Sign In" : "Sign Up"}
                </p>
                
                <div className="input-wrapper">
                  <InputField
                    label="Email"
                    id="email"
                    value={email}
                    name="email"
                    placeholder="Email"
                    handleChange={handleChange}
                    helperText={errors.email}
                    error={Boolean(errors.email)}
                    type="text"
                  />
                </div>
                
                <div className="input-wrapper">
                  <InputField
                    label="Password"
                    id="password"
                    value={password}
                    name="password"
                    placeholder="Enter password"
                    handleChange={handleChange}
                    helperText={errors.password}
                    error={Boolean(errors.password)}
                    type={"password"}
                  />
                </div>
                <div className="form-wrapper--btn">
                  <button className="user-form-button" type="submit">
                    {issigninForm ? "Sign In" : "Sign Up"}
                  </button>
                </div>
              </form>
            );
          }
        }
      </Formik>
    </>
  );
};

UserForm.propTypes = {};

export default UserForm;
