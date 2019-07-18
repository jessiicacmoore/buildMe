import React, {useEffect, useState} from "react";
// import "./styles/application-form.scss";
import axios from "axios";
// import qs from 'qs';
import { Form, Input, TextArea, Button, Segment, Select } from 'semantic-ui-react'
import ProjectDetail from "./ProjectDetail";

import InnerNav from "./InnerNav"

const ApplicationForm = props => {

  const projId = props.match.params.projectId
  const userId = props.match.params.usertId





    // console.log(project.owner)


    // const handleFormSubmit = (event, requestType, projectID) => {
    //   event.preventDefault();
    // //   const applicant = event.target.elements.applicant.value;
    // //   const project = event.target.elements.project.value;
    //      const cover_letter = event.target.elements.namedItem('form-textarea-control-opinion').value;
    // //   const is_hired = event.target.elements.is_hired.value;


    //       // return axios.post('http://localhost:8000/api/application/', {
    //       //   "applicant": 1,
    //       //   "project": 1,
    //       //   "cover_letter": cover_letter,
    //       //   "is_hired": false,
    //       // }) 
    //       //   .then(res => console.log("Post Success", res))
    //       //   .catch(error => console.log(error));
    //     };

    const handleFormSubmit = async (event) => { 

      event.preventDefault();

      const url = `http://localhost:8000/api/application/`
      const cover_letter = event.target.elements.namedItem('form-textarea-control-opinion').value;
      const data = {
        "cover_letter": cover_letter,
        "project": projId,
        "user": userId
      }

      axios.post(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

      }).then(resp => {
        console.log(resp)
        return resp
      })
    }



    return(
        <main>
          <InnerNav />
          <Segment inverted>
          <Form inverted onSubmit={ (event) => handleFormSubmit(event) }>
            <Form.Group widths='equal'>
              {/* <Form.Input fluid label='Applicant' placeholder='Applicant' /> */}
              {/* <Form.Input fluid label='Project' placeholder='Project' /> */}
              
            </Form.Group>
            <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Cover Letter'
            placeholder='Tell us about yourself'
          />
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button type='submit'>Submit</Button>
          </Form>
        </Segment>
        </main>
    )
};

export default ApplicationForm;