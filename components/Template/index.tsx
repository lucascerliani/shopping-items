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
                <Nav.Link className="fs-5" href="/">
                  Items
                </Nav.Link>
                <Nav.Link className="fs-5" href="/favourites">
                  Favourites
                </Nav.Link>
                <Nav.Link className="fs-5" href="/create">
                  Create item or category
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button>Search</Button>
              </Form>
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
