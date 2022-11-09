import Link from 'next/link';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from 'react-bootstrap';
import { TemplatePropTypes, TemplateTypes } from './types';

const Template = ({ children, pageTitle }: TemplateTypes): JSX.Element => {
  const expand = 'lg';

  return (
    <>
      <Navbar bg="dark" variant="dark" expand={expand} className="mb-3">
        <Container>
          <Navbar.Brand href="/">
            <h1>Shopping Items</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Shopping Items
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="fs-4 px-3 nav-link" href="/">
                  Items
                </Link>
                <Link className="fs-4 px-3 nav-link" href="/favourites">
                  Favourites
                </Link>
                <Link className="fs-4 ps-3 pe-0 nav-link" href="/create">
                  Create item or category
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Container>
        <h1 className="text-decoration-underline text-center my-5">
          {pageTitle}
        </h1>
        {children}
      </Container>
    </>
  );
};

Template.propTypes = TemplatePropTypes;

export default Template;
