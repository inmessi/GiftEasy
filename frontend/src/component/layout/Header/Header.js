import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../images/logo.png";
import {BsFillCartDashFill} from "react-icons/bs";
import {BsPersonCircle} from "react-icons/bs";
import {BsSearch} from "react-icons/bs";
import {useSelector } from 'react-redux'


function Header() {
  const { isAuthenticated} = useSelector((state) => state.user);
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#e66470"}} variant="dark">
      <Container>
            <Navbar.Brand href="/">
            <img
              src={logo}
              width="180"
              height="90"
              className="d-inline-block align-top"
              alt="GifteEasy"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="products">Products</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="Search">Search <BsSearch/> </Nav.Link>
            <Nav.Link href="cart">Cart <BsFillCartDashFill/>  </Nav.Link>
            <Nav.Link href="login">Account {!isAuthenticated && <BsPersonCircle/>} </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
