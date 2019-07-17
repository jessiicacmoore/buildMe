import React, {useState, useEffect} from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { authSignup } from "../store/actions/auth";

import { Formik } from "formik";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import "./styles/sign-up.scss";


const RegistrationForm = (props) => {

  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password1, setPassword1] = useState("")
  const[password2, setPassword2] = useState("")

    useEffect(()=> {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  })

  const handleSubmit = e => {
    e.preventDefault();
    props.signup(username, email, password1, password2);
  };

  const handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  const onChange= (value)=> {
    console.log('Captcha value:', value);   
  }

  
    const { error, loading, token } = props;
    if (token) {
      return <Redirect to="/" />;
    }

    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            Signup to your account
          </Header>
          {error && <p>{props.error.message}</p>}

          <React.Fragment>
            <Form size="large" onSubmit={handleSubmit}>
              <Segment stacked>
                <Form.Input
                  onChange={e => setUsername(e.target.value)}
                  value={username}
                  name="username"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                />
                <Form.Input
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  onChange={e => setPassword1(e.target.value)}
                  fluid
                  value={password1}
                  name="password1"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Form.Input
                  onChange={e => setPassword2(e.target.value)}
                  fluid
                  value={password2}
                  name="password2"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm password"
                  type="password"
                />

                <label>Are You Human?</label>
    

                <ReCAPTCHA className="recaptcha_position"
                  sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
                  theme= "light"
                  onChange={onChange}
                />
     
               
                


                <Button
                  color="blue"
                  fluid
                  size="large"
                  loading={loading}
                  disabled={loading}
                >
                  Signup
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have an account? <NavLink to="/login">Login</NavLink>
            </Message>
          </React.Fragment>
        </Grid.Column>
      </Grid>
    ); 
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, email, password1, password2) =>
      dispatch(authSignup(username, email, password1, password2))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);































//   Button,
//   Form,
//   Grid,
//   Header,
//   Message,
//   Segment
// } from "semantic-ui-react";
// import { connect } from "react-redux";
// import { NavLink, Redirect } from "react-router-dom";
// import { authSignup } from "../store/actions/auth";
// import { Formik } from "formik";
// import * as yup from "yup";
// import Recaptcha from "react-recaptcha";


// const RegistrationForm = (props) => {

//   const[username, setUsername] = useState("")
//   const[email, setEmail] = useState("")
//   const[password1, setPassword1] = useState("")
//   const[password2, setPassword2] = useState("")
//   const[recaptcha, setRecaptcha] = useState({})
//   const[submitEnabled, setSubmitEnabled] = useState(false)

//   useEffect(()=> {
//     const script = document.createElement("script");
//     script.src =
//       "https://www.google.com/recaptcha/api.js";
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
//   })


//   const handleSubmit = e => {
//     e.preventDefault();

//     // Shim in our validation 
//     // Verifying that the field have values before posting to server 

//     // props.signup(username, email, password1, password2);
//   };

//   // handleChange = e => {
//   //   this.setState({ [e.target.name]: e.target.value });
//   // };

//   const verifyCaptcha = (response) => {
//     console.log("verifyCaptcha", response)
//     setRecaptcha(response);

//     // yup.object().shape({
//     //   recaptcha: yup.string().required(),
//     // })

//     // Basically an extra validation?
//     // Prevent form from submitting until this is satisfied
//     //
//   }

//   // const { username, email, password1, password2 } = this.state;
//   const { error, loading, token } = props;
//   if (token) {
//     return <Redirect to="/" />;
//   }

//   return(

//     <Grid
//       textAlign="center"
//       style={{ height: "100vh" }}
//       verticalAlign="middle"
//     >
//       <Grid.Column style={{ maxWidth: 450 }}>
//         <Header as="h2" color="blue" textAlign="center">
//           Signup to your account
//         </Header>
//         {error && <p>{props.error.message}</p>}

//         <React.Fragment>
//           <Form size="large" onSubmit={handleSubmit}>
//             <Segment stacked>
//               <Form.Input
//                 onChange={e => setUsername(e.target.value)}
//                 value={username}
//                 name="username"
//                 fluid
//                 icon="user"
//                 iconPosition="left"
//                 placeholder="Username"
//               />
//               <Form.Input
//                 onChange={e => setEmail(e.target.value)}
//                 value={email}
//                 name="email"
//                 fluid
//                 icon="mail"
//                 iconPosition="left"
//                 placeholder="E-mail address"
//               />
//               <Form.Input
//                 onChange={e => setPassword1(e.target.value)}
//                 fluid
//                 value={password1}
//                 name="password1"
//                 icon="lock"
//                 iconPosition="left"
//                 placeholder="Password"
//                 type="password"
//               />
//               <Form.Input
//                 onChange={e => setPassword2(e.target.value)}
//                 fluid
//                 value={password2}
//                 name="password2"
//                 icon="lock"
//                 iconPosition="left"
//                 placeholder="Confirm password"
//                 type="password"
//               />

//               <Recaptcha
//                 sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
//                 render="explicit"
//                 theme="light"
//                 verifyCallback={verifyCaptcha}
//                 onloadCallback={() => { console.log("done loading!"); }}
//               />

//               <Button
//                 color="blue"
//                 fluid
//                 size="large"
//                 loading={loading}
//                 disabled={loading}
//               >
//                 Signup
//               </Button>

//             </Segment>

//           </Form>
//           <Message>
//             Already have an account? <NavLink to="/login">Login</NavLink>
//           </Message>
//         </React.Fragment>
//       </Grid.Column>
//     </Grid>

//   );
// }


// const mapStateToProps = state => {
//   return {
//     loading: state.auth.loading,
//     error: state.auth.error,
//     token: state.auth.token
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     signup: (username, email, password1, password2) =>
//       dispatch(authSignup(username, email, password1, password2))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(RegistrationForm);


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
//           validationSchema={
//             yup.object().shape({
//             recaptcha: yup.string().required(),
//           })
//           }
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
