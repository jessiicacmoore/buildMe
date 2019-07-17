import React from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import Recaptcha from "react-recaptcha";
import axios from "axios";


class RecaptchaForm extends React.Component { 

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="container">
        <Formik
          initialValues={{
            applicant: "",
            project: "",
            cover_letter: "",
            resume: null,
            attachments: [],
            recaptcha: "",
          }}

          onSubmit={async (values) => {
            let formData = new FormData();

            formData.append("applicant", values.applicant);
            formData.append("project", values.project);
            formData.append("cover_letter", values.cover_letter);
            formData.append("resume", values.resume);
            
            for (let i = 0; i <= values.attachments.length; i++) {
              formData.append(`attachments[${i}]`, values.attachments[i]);
            }

            formData.append("recaptcha", values.recaptcha);

            // you would submit with fetch for example
            // const res = await fetch("posturl", { method: "POST", body: formData });
            // Do whatever on the sever

            const res = await fetch('http://localhost:8000/api/application/', {
              method: 'POST',
              headers: {
              'Accept': 'application/json, application/xml, text/play, text/html, *.*',
              'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
              },
              body: formData
          }).then(res=>res.json())
            .then(res => console.log(res));

            // axios({
            //   method: 'POST',
            //   url: 'http://localhost:8000/api/application/',
            //   data: formData,
            //   config: { headers: {'Content-Type': 'multipart/form-data' }}
            //   })
            //   .then(response => {
            //       //handle success
            //       console.log(response);
            //   })
            //   .catch(response => {
            //       //handle error
            //       console.log(response);
            //   });
             
            alert("Form submitted!");
            console.log(formData.get("applicant"));
            console.log(formData.get("project"));
            console.log(formData.get("cover_letter"));
            console.log(formData.get("resume"));
            console.log(formData.get("recaptcha"));
          }}

          validationSchema={yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            recaptcha: yup.string().required(),
          })}

          render={({ values, errors, touched, handleSubmit, handleChange, setFieldValue }) => (
             
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="applicant">APPLICANT</label>
                <input id="applicant" placeholder="Applicant" name="applicant" type="text" className="form-control"
                  value={values.title} onChange={handleChange} />
                {errors.title && touched.title && (
                  <p>{errors.title}</p>
                )}
              </div>

              <div className="form-group">
                <label for="project">PROJECT </label>
                <input id="project" placeholder="Name of Project" name="project" type="text" className="form-control"
                  value={values.project_type} onChange={handleChange} />
                {errors.project_type && touched.project_type && (
                  <p>{errors.project_type}</p>
                )}
              </div>

              <div className="form-group">
                <label for="cover_letter">COVER LETTER</label>
                <textarea rows="5" id="cover_letter" placeholder="Description of the project" name="cover_letter" type="text" className="form-control"
                  value={values.description} onChange={handleChange} />
                {errors.description && touched.description && (
                  <p>{errors.description}</p>
                )}
              </div>

              <div className="form-group">
                <label for="resume">RESUME </label>
                <input id="resume" name="resume" type="file" className="form-control"
                  onChange={(event) => {
                    setFieldValue("resume", event.currentTarget.files[0]);
                  }} />
              </div>

              <div className="form-group">
                <label>Are You Human?</label>
                <Recaptcha
                  sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
                  render="explicit"
                  theme="light"
                  verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                  onloadCallback={() => { console.log("done loading!"); }}
                />
                {errors.recaptcha
                  && touched.recaptcha && (
                    <p>{errors.recaptcha}</p>
                  )}
              </div>

              <button type="submit" className="btn btn-primary">SUBMIT</button>
            </form>
          )} />
      </div>
    );
  }
};

export default RecaptchaForm;


// <div className="form-group">
// <label for="email">E-mail</label>
// <input id="email" name="email" type="email" className="form-control"
//   value={values.email} onChange={handleChange} />
// {errors.email && touched.email && (
//   <p>{errors.email}</p>
// )}
// </div>





















// class RecaptchaForm extends React.Component {
//   componentDidMount() {
//     const script = document.createElement("script");
//     script.src =
//       "https://www.google.com/recaptcha/api.js";
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
//   }

//   render() {
//     return (
//       <div className="container">
//         <Formik
//           initialValues={{
//             recaptcha: "",
//           }}
//           onSubmit={(values) => {
//             alert(
//               JSON.stringify(
//                 {
//                   recaptcha: values.recaptcha,
//                 },
//                 null,
//                 2
//               )
//             );
//           }}
//           validationSchema={yup.object().shape({
//             recaptcha: yup.string().required(),
//           })}
//           render={({ values, errors, touched, handleSubmit, setFieldValue }) => (
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Are You Human?</label>
//                 <Recaptcha
//                   sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
//                   render="explicit"
//                   theme="light"
//                   verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
//                   onloadCallback={() => { console.log("done loading!"); }}
//                 />
//                 {errors.recaptcha 
//                   && touched.recaptcha && (
//                   <p>{errors.recaptcha}</p>
//                 )}
//               </div>

//               <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//           )} />
//       </div>
//     );
//   }
// };

// export default RecaptchaForm;

