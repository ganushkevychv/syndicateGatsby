import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
const contactsPage = () => (
  
  <Layout>
    <SEO title="Contacts" />
    <h1>Руководство</h1>
    <div>
    <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Правило 1
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Описание правила</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Правило 2
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Описание правила</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
  </Layout>
 
)

export default contactsPage