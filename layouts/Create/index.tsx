import { useState } from 'react';
import { BooleanToggle, Template, CustomToast } from '@components';
import { ItemOrCategory } from './types';
import { Button, Col, Form, Row, Toast } from 'react-bootstrap';
import { SketchPicker } from 'react-color';
import { createItem } from '@services';
import { CreateItem } from 'services/types';
import { useGetCategories } from '@hooks';

const CreateLayout = () => {
  const [thingToCreate, setThingToCreate] = useState<ItemOrCategory>('Item');
  const [itemName, setItemName] = useState<string>('');
  const [itemCategory, setItemCategory] = useState<string>('');
  const [itemImage, setItemImage] = useState<File>();
  const [categoryName, setCategoryName] = useState<string>('');
  const [categoryColor, setCategoryColor] = useState<string>('');
  const [showCategoryToast, setShowCategoryToast] = useState<boolean>(false);
  const [showItemToast, setShowItemToast] = useState<boolean>(false);
  const [successItemToast, setSuccessItemToast] = useState<boolean>(false);

  const { categories } = useGetCategories();

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

  const onCreateItemClick = async () => {
    const newItem: CreateItem = {
      item: itemName,
      category: itemCategory,
      image: itemImage!,
    };

    createItem(newItem)
      .then(() => {
        setSuccessItemToast(true);
        setShowItemToast(true);
      })
      .catch(() => {
        setSuccessItemToast(false);
        setShowItemToast(true);
      });
  };

  return (
    <Template>
      <div className="fs-4 mb-2">Select an option to create:</div>
      <BooleanToggle
        firstOption="Item"
        secondOption="Category"
        handleChange={handleToggleChange}
        value={thingToCreate}
      />
      <h1 className="text-decoration-underline text-center my-4">
        {`Create ${thingToCreate.toLowerCase()}`}
      </h1>
      {thingToCreate === 'Item' ? (
        <CustomToast
          success={successItemToast}
          onClose={() => setShowItemToast(false)}
          show={showItemToast}
          thingToCreate="Item"
          nameOrColor="name"
        />
      ) : (
        <Toast
          bg="success"
          onClose={() => setShowCategoryToast(false)}
          show={showCategoryToast}
          className="m-auto mb-4"
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Create category</strong>
          </Toast.Header>
          <Toast.Body>
            <strong>Your category was successfully created.</strong>
          </Toast.Body>
        </Toast>
      )}
      <Row>
        <Col xs={12} md={{ span: 4, offset: 4 }} className="align-self-center">
          {thingToCreate === 'Item' ? (
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
                  {categories.map((category: any) => (
                    <option key={category.category} value={category.category}>
                      {category.category}
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
              <div className="w-100 text-center mt-4">
                <Button
                  onClick={onCreateItemClick}
                  variant="primary"
                  disabled={!itemName || !itemCategory || !itemImage}
                >
                  Create item
                </Button>
              </div>
            </Form>
          ) : (
            <Form>
              <Form.Group className="mb-3" controlId="category-name">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  onChange={(e) => setCategoryName(e.target.value)}
                  value={categoryName}
                  type="text"
                  placeholder="Category name"
                  isInvalid={!categoryName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="category-name">
                <Form.Label>Category color</Form.Label>
                <SketchPicker
                  color={categoryColor}
                  onChange={(color) => setCategoryColor(`#${color.hex}`)}
                />
              </Form.Group>
              <div className="w-100 text-center mt-4">
                <Button
                  onClick={() => setShowCategoryToast(true)}
                  variant="primary"
                  disabled={!categoryName || !categoryColor}
                >
                  Create category
                </Button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </Template>
  );
};

export default CreateLayout;
