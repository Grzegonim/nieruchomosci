import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Container>
      <Navbar expand="md" className={ styles.navbarContainer } >
          <NavLink as={ NavLink } to="/">
            <Navbar.Brand>
              <img src={process.env.PUBLIC_URL + '/logo_company.svg'} />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/offer">Kup</Nav.Link>
            <Nav.Link>Sprzedaj</Nav.Link>
            <Nav.Link>Oferty na wynajem</Nav.Link>
            <Nav.Link>Oferty na sprzedaż</Nav.Link>
            <Nav.Link as={NavLink} to="/about">O nas</Nav.Link>
            <Nav.Link>Kontakt</Nav.Link>
          </Nav>
          </Navbar.Collapse>
    </Navbar>
  </Container>
  );
}

export default NavBar;