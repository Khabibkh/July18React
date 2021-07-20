import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
         <NavBar />
        <Container fluid>
          <h1 className="display-3">My Contact Details</h1>
          <p className="lead">Here are my contact details </p>
          <p className="lead">Email : khabibullosf@gmail.com my email </p>
          <p className="lead">Phone : 415 323 8313 </p>
          <p className="lead">I will available morning 9AM to 9PM Pacific Time via slack or whatsapp</p>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Contact;
