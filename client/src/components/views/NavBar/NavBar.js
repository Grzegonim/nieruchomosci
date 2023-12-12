import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
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
            <Nav.Link as={NavLink} to="/about">O nas</Nav.Link>
            <NavDropdown title="Usługi" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/offer">
                Kompleksowa obsługa inwestycji
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/offer">
                Sesja fotograficzna dronem
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/offer">
                Wirtualny spacer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Marketing w social media
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Zarządzanie nieruchomościami
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sprzedaj" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/offer">
                Kompleksowa obsługa sprzedaży
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Kup" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/offer">
                Kompleksowa obsługa transakcji zakupu
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/sell">Oferty na wynajem</Nav.Link>
            <Nav.Link as={NavLink} to="/sell">Oferty na sprzedaż</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Kontakt</Nav.Link>
          </Nav>
          </Navbar.Collapse>
    </Navbar>
  </Container>
  );
}

export default NavBar;