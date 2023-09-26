import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().min(3).max(25).required("This is a required field"),
  text: Yup.string().required("This is a required field"),
});

function CreatePost() {
  const initialValues = {
    username: "",
    text: "",
  };

  function onSubmit(data) {
    console.log(data);
    useEffect({}, []);
    axios
      .post("http://localhost:3001/posts", data)
      .then(console.log("it worked"))
      .catch((error) => console.log(error));
  }

  return (
    <div className="create-post-container">
      <Link to="/">Home</Link>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="create-post-upper-container">
            <div>
              <label>Username:</label>
              <Field
                autoComplete="off"
                id="username-create-post"
                name="username"
                placeholder="Ex. John6969"
              ></Field>
              <ErrorMessage
                name="username"
                component="span"
                className="post--error-message"
              />
            </div>
            <button type="submit">Post</button>
          </div>

          <Field
            autoComplete="off"
            id="input-create-post"
            name="text"
            placeholder="What are you thinking about?"
          ></Field>
          <ErrorMessage
            name="text"
            component="span"
            className="post--error-message"
          />
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
