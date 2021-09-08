import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Registration = () => {
  const initialValues = {
    password: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().min(6).max(15).required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8888/auth", data)
      .then(console.log(data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field id="inputCreatePost" name="username" placeholder="username" />
          <label>Password:</label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="password"
            placeholder="password"
            type="password"
          />
          <button type="submit">Registration</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
