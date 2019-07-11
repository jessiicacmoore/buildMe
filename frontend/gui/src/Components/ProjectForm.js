import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormCheck from "react-bootstrap/FormCheck";
import axios from "axios";
import qs from 'qs';

const ProjectForm = ({requestType, projectID, btnText}) => {

  const handleFormSubmit = (event, requestType, projectID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const projectType = event.target.elements.projectType.value;

    // let axiosConfig = {
    //   headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       "Access-Control-Allow-Origin": "*"
    //   }
    // };



        // const data = {
        //   "owner": 1,
        //   "title": title,
        //   "description": description,
        //   "project_type": projectType,
          // "is_draft": false,
          // "published_date": "null",
        //   "tasks": []
        // }

        // const url = 'http://localhost:8000/api/project/';

        // return axios({
        //         method: 'POST',
        //         headers: { 'content-type': 'application/x-www-form-urlencoded' },
        //         data: qs.stringify(data),
        //         url,
        //       }).then(res => console.log(res))
        //         .catch(error => console.log(error))

    // if (requestType === "post") {
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


    console.log(title, description, projectType)
  };
  return (
    <Form className="wrapper" onSubmit={ (event) => handleFormSubmit(event, requestType, projectID) }>
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

      <Button variant="primary" type="submit" htmlType="submit">
        Create
      </Button>
    </Form>
  );
};

export default ProjectForm;
