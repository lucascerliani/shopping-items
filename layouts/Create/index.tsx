import { useState } from 'react';
import { BooleanToggle, Template, CustomToast } from '@components';
import { ItemOrCategory } from './types';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { SketchPicker } from 'react-color';
import { createCategory, createItem } from '@services';
import { CreateCategory, CreateItem } from 'services/types';
import { useGetCategories } from '@hooks';
import { addCategory, selectValue } from '../../slices/categorySlice';
import { useSelector, useDispatch } from 'react-redux';

const CreateLayout = () => {
  const [thingToCreate, setThingToCreate] = useState<ItemOrCategory>('Item');
  const [itemName, setItemName] = useState<string>('');
  const [itemCategory, setItemCategory] = useState<string>('');
  const [itemImage, setItemImage] = useState<File>();
  const [categoryName, setCategoryName] = useState<string>('');
  const [categoryColor, setCategoryColor] = useState<string>('');
  const [showItemToast, setShowItemToast] = useState<boolean>(false);
  const [successItemToast, setSuccessItemToast] = useState<boolean>(false);
  const [showCategoryToast, setShowCategoryToast] = useState<boolean>(false);
  const [successCategoryToast, setSuccessCategoryToast] =
    useState<boolean>(false);
  const [categoryColorError, setCategoryColorError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useGetCategories();

  const categories = useSelector(selectValue);

  const dispatch = useDispatch();

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
    setLoading(true);
    const newItem: CreateItem = {
      item: itemName,
      category: itemCategory,
      image: itemImage!,
    };

    createItem(newItem)
      .then(() => {
        setLoading(false);
        setSuccessItemToast(true);
        setShowItemToast(true);
      })
      .catch(() => {
        setLoading(false);
        setSuccessItemToast(false);
        setShowItemToast(true);
      });
  };

  const onCreateCategoryClick = async () => {
    setLoading(true);
    const newCategory: CreateCategory = {
      category: categoryName,
      color: categoryColor,
      items: [],
    };

    createCategory(newCategory)
      .then(() => {
        dispatch(addCategory(newCategory));
        setLoading(false);
        setSuccessCategoryToast(true);
        setShowCategoryToast(true);
      })
      .catch((error) => {
        setLoading(false);
        if (error.message.includes('color')) {
          setCategoryColorError(true);
        } else {
          setCategoryColorError(false);
        }
        setSuccessCategoryToast(false);
        setShowCategoryToast(true);
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
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : thingToCreate === 'Item' ? (
        <CustomToast
          success={successItemToast}
          onClose={() => setShowItemToast(false)}
          show={showItemToast}
          thingToCreate="Item"
          nameOrColor="name"
        />
      ) : (
        <CustomToast
          success={successCategoryToast}
          onClose={() => setShowCategoryToast(false)}
          show={showCategoryToast}
          thingToCreate="Category"
          nameOrColor={categoryColorError ? 'color' : 'name'}
        />
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
                  onChange={(color) => setCategoryColor(color.hex)}
                />
              </Form.Group>
              <div className="w-100 text-center mt-4">
                <Button
                  onClick={onCreateCategoryClick}
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
