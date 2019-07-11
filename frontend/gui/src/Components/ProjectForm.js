import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormCheck from "react-bootstrap/FormCheck";
import axios from "axios";

const ProjectForm = ({requestType, projectID}) => {

  const handleFormSubmit = (event, requestType, projectID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const projectType = event.target.elements.projectType.value;

    switch (requestType) {
      case "post":
        return axios.post('localhost:8000/api/project/create', {
          "owner": 1,
          "title": title,
          "description": description,
          "project_type": projectType,
        }) 
          .then(res => console.log(res))
          .catch(error => console.log(error));
      case "put":
          return axios.put(`localhost:8000/api/project/${projectID}/update`, {
            "owner": 1,
            "title": title,
            "description": description,
            "project_type": projectType,
          }) 
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }

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
