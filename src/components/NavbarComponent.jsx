import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  const [scroll, setScroll] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }

  };

  useEffect(() => {
    changeNav();
    window.addEventListener(scroll, changeNav);
  }, []);

  return (
    <div>
      <Navbar expand="lg" bg="light" className={changeNav ? "color-active" : ""}>
        <Container>
          <Nav.Link href="http://localhost:5173/">FZ</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="./About">About</Nav.Link>
              <Nav.Link href="./Experience">Experience</Nav.Link>
              <Nav.Link href="./Education">Education</Nav.Link>
              <Nav.Link href="./Skill">Skill</Nav.Link>
              <Nav.Link href="./Interests">Interests</Nav.Link>
              <Nav.Link href="./Awards">Awards</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent