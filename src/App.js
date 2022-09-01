import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './App.css';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
       
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<header className='logo' >
  <h1>development web </h1>
  <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://goadfuel.com/wp-content/uploads/2022/03/website-design-development.jpg "
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://academy.iobotech.com/wp-content/uploads/2021/03/Web-development-designing-Anvar-Freelancer-1.png"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ares.decipherzone.com/blog-manager/uploads/banner_webp_bea99db8-7dba-41e7-941c-de4b61cc1650.webp"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
<h1 > What Does Web Development Mean? </h1>
<p>Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet.
 The web development process includes web design, web content development, 
 client-side/server-side scripting and network security configuration, among other tasks.</p>
</header>
<main>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    
</main>
<footer className='footer'>
  


<img  src={logo}></img>
<img src={logo}></img>
<img  src={logo}></img>
</footer>
    </div>
  );
}

export default App;
