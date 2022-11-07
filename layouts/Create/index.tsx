import { useState } from 'react';
import { BooleanToggle, Template } from '@components';
import { ItemOrCategory } from './types';
import { Button, Col, Form, Row, Toast } from 'react-bootstrap';

const CreateLayout = () => {
  const [thingToCreate, setThingToCreate] = useState<ItemOrCategory>('Item');
  const [itemName, setItemName] = useState<string>('');
  const [itemCategory, setItemCategory] = useState<string>('');
  const [itemImage, setItemImage] = useState<File>();
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleToggleChange = (
    event: React.MouseEvent<HTMLElement>,
    newThingToCreate: ItemOrCategory
  ) => {
    if (newThingToCreate !== null) {
      setThingToCreate(newThingToCreate);
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file !== null) {
      setItemImage(file);
    }
  };

  const categories = ['Cleaning', 'Sports', 'Health care', 'Personal care'];

  return (
    <Template>
      <div className="fs-4 mb-2">Choose an option to create:</div>
      <BooleanToggle
        firstOption="Item"
        secondOption="Caregory"
        handleChange={handleToggleChange}
        value={thingToCreate}
      />
      <h1 className="text-decoration-underline text-center mt-3 mb-5">
        {`Create ${thingToCreate.toLowerCase()}`}
      </h1>
      <Row>
        <Col xs={12} md={{ span: 4, offset: 4 }} className="align-self-center">
          <Form>
            <Form.Group className="mb-3" controlId="item-name">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                onChange={(e) => setItemName(e.target.value)}
                value={itemName}
                type="text"
                placeholder="Item name"
                isInvalid={!itemName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="item-category">
              <Form.Label>Item category</Form.Label>
              <Form.Select
                onChange={(e) => setItemCategory(e.target.value)}
                isInvalid={!itemCategory}
              >
                <option key="0" value="">
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="item-image">
              <Form.Label>Item image</Form.Label>
              <Form.Control
                onChange={(e) => handleFileChange(e)}
                type="file"
                accept="image/*"
                isInvalid={!itemImage}
              />
            </Form.Group>
            <div className="w-100 text-center mt-5">
              <Button
                onClick={() => setShowToast(true)}
                variant="primary"
                disabled={!itemName || !itemCategory || !itemImage}
              >
                Create item
              </Button>
            </div>
            <Toast
              bg="success"
              onClose={() => setShowToast(false)}
              show={showToast}
              className="m-auto mt-3"
              delay={3000}
              autohide
            >
              <Toast.Header>
                <strong className="me-auto">Create item</strong>
              </Toast.Header>
              <Toast.Body>
                <strong>Your item was successfully created.</strong>
              </Toast.Body>
            </Toast>
          </Form>
        </Col>
      </Row>
    </Template>
  );
};

export default CreateLayout;
