import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./styles/project-form.scss";
import axios from "axios";
import qs from 'qs';
// import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

import InnerNav from "./InnerNav"



const ProjectForm = ({requestType, projectID, btnText}) => {

  const handleFormSubmit = (event, requestType, projectID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const projectType = event.target.elements.projectType.value;

        return axios.post('http://localhost:8000/api/project/', {
          "owner": 1,
          "title": title,
          "description": description,
          // "project_type": projectType,
          "applications": [],
          "tasks": []      
        }) 
          .then(res => console.log("Post Success", res))
          .catch(error => console.log(error));
    //   } else if (requestType === "put") {
    //     return axios.put(`http://localhost:8000/api/project/${projectID}/`, {
    //       "owner": 1,
    //       "title": title,
    //       "description": description,
    //       "project_type": projectType,
    //     }) 
    //       .then(res => console.log("Put Success", res))
    //       .catch(error => console.log(error));
    //  }

    // console.log(title, description, projectType)
  };

  return (
      <main>
        <InnerNav/>
        <Form className="wrapper" onSubmit={ (event) => handleFormSubmit(event, requestType, projectID) }>
          <h1>Create Project</h1>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" type="text" placeholder="Enter Title" />
          </Form.Group>
    
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" as="textarea" rows="3" />
          </Form.Group>
    
          <Form.Group controlId="project-type">
            <Form.Label>Select Project Type</Form.Label>
            <Form.Control name="projectType" as="select">
              <option>Maintenance</option>
              <option>Full Project</option>
            </Form.Control>
          </Form.Group>
    
          <Button variant="primary" type="submit">
            CREATE
          </Button>
        </Form>
      </main>
  );
};

export default ProjectForm;


// import React from 'react'
// import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

// const projectOptions = [
//   { key: 'm', text: 'Maintenance', value: 'maintenance' },
//   { key: 'f', text: 'Full Project', value: 'fullproject' },
// ]

// const FormExampleFieldControlId = () => (
//   <Form>
//     <Form.Group widths='equal' onSubmit={ (event) => handleFormSubmit(event, requestType, projectID) }>
//       <Form.Field
//         id='form-input-control-first-name'
//         control={Input}
//         label='First name'
//         placeholder='First name'
//       />
//       <Form.Field
//         id='form-input-control-last-name'
//         control={Input}
//         label='Last name'
//         placeholder='Last name'
//       />
//       <Form.Field
//         control={Select}
//         options={projectOptions}
//         label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
//         placeholder='Project Type'
//         search
//         searchInput={{ id: 'form-select-control-gender' }}
//       />
//     </Form.Group>
//     <Form.Field
//       id='form-textarea-control-opinion'
//       control={TextArea}
//       label='Opinion'
//       placeholder='Opinion'
//     />
//     <Form.Field
//       id='form-button-control-public'
//       control={Button}
//       content='Confirm'
//       label='Label with htmlFor'
//     />
//   </Form>
// )

// export default FormExampleFieldControlId



