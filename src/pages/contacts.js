import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from 'react-bootstrap/Card'
import Facebook from "../images/facebook.png"
import Insta from "../images/insta.png"
import youTube from "../images/youTube.png"
import gmail from "../images/gmail.png"

const contactsPage = () => (
  <Layout>
    <SEO title="Contacts" />
   
    <Card className="container-icons">
  <Card.Body >Контакты</Card.Body>
  <Card.Body><a className="icons" href="mailto:example@gmail.com"><img src={gmail} width="30" 
  height="30" alt="logo"/> Gmail</a></Card.Body>
  <Card.Body><a className="icons" href="https://youtube.com"><img src={youTube} width="30" 
  height="30" alt="logo"/> youTube</a></Card.Body>
  <Card.Body><a className="icons" href="https://facebook.com"><img src={Facebook} width="30" 
  height="30" alt="logo"/> Facebook</a></Card.Body>
  <Card.Body><a className="icons" href="https://instagram.com"><img src={Insta} width="30" 
  height="30" alt="logo"/> Instagram</a></Card.Body>
  
</Card>
  </Layout>
)

export default contactsPage