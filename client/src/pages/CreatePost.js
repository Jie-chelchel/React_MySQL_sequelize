import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

import * as Yup from "yup";

const CreatePost = () => {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a title"),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8888/posts", data)
      .then((res) => {
        console.log("worked");
      })
      .catch((err) => {});
  };

  return (
    <div className="createPostPage">
      {/* initialValues={} onSubmit={} validationSchema={} */}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title:</label>
          <ErrorMessage name="title" component="span" />
          <Field id="inputCreatePost" name="title" placeholder="title" />
          <label>Post:</label>
          <ErrorMessage name="postText" component="span" />
          <Field id="inputCreatePost" name="postText" placeholder="post" />
          <label>Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field id="inputCreatePost" name="username" placeholder="username" />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePost;
