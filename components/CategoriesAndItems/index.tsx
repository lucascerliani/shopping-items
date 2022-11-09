import {
  CategoriesAndItemsPropTypes,
  CategoriesAndItemsTypes,
  Item,
} from './types';
import { AccordionToggle, CustomModal, ItemCard } from '@components';
import { Accordion, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useGetCategories } from '@hooks';
import {
  selectValue,
  removeCategory,
  removeItem,
} from '../../slices/categorySlice';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCategory, deleteItem } from '@services';
import { useState } from 'react';

const CategoriesAndItems = ({
  favourites = false,
}: CategoriesAndItemsTypes): JSX.Element => {
  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false);
  const [showItemModal, setShowItemModal] = useState<boolean>(false);

  const { loading } = useGetCategories();

  const categories = useSelector(selectValue);

  const dispatch = useDispatch();

  const DisplayItemCard = (
    categoryName: string,
    itemIndex: number,
    itemObject: Item
  ) => (
    <Col key={String(itemIndex)} xs={12} md={6} lg={3}>
      <ItemCard
        category={categoryName}
        name={itemObject.item}
        image={itemObject.image}
        onDeleteItem={() => setShowItemModal(true)}
        favourite={itemObject.favourite}
      />
    </Col>
  );

  const handleDeleteCategory = async (categoryName: string) => {
    console.log(categoryName);
    deleteCategory(categoryName)
      .then(() => {
        dispatch(removeCategory(categoryName));
        setShowCategoryModal(false);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteItem = async (categoryName: string, itemName: string) => {
    deleteItem(categoryName, itemName)
      .then(() => {
        dispatch(removeItem({ categoryName, itemName }));
        setShowItemModal(false);
      })
      .catch((error) => {
        setShowItemModal(false);
        console.log(error);
      });
  };

  const onCategoryDeleteClick = () => {};

  return (
    <>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        categories.map((categoryObj, categoryIndex) => {
          return (
            <Accordion
              key={String(categoryIndex)}
              defaultActiveKey={String(categoryIndex)}
            >
              <Card className="mb-5" key={String(categoryIndex)}>
                <Card.Header
                  className="p-0"
                  style={{ height: '60px', backgroundColor: categoryObj.color }}
                >
                  <div className="align-items-center h-100 d-flex">
                    <AccordionToggle
                      key={String(categoryIndex)}
                      eventKey={String(categoryIndex)}
                    >
                      <h3>{categoryObj.category}</h3>
                    </AccordionToggle>
                    <i
                      className="bi bi-trash fs-3 pe-1"
                      style={{ cursor: 'pointer' }}
                      onClick={() => setShowCategoryModal(true)}
                    />
                  </div>
                </Card.Header>
                <Accordion.Collapse
                  key={String(categoryIndex)}
                  eventKey={String(categoryIndex)}
                >
                  <Card.Body>
                    <Container>
                      <Row>
                        {favourites
                          ? categoryObj.items
                              .filter((itemObj: Item) => itemObj.favourite)
                              .map((itemObj: Item, itemIndex: number) => {
                                return (
                                  <>
                                    {DisplayItemCard(
                                      categoryObj.category,
                                      itemIndex,
                                      itemObj
                                    )}
                                    <CustomModal
                                      key={`item-modal-${itemIndex}`}
                                      thingToDelete="item"
                                      show={showItemModal}
                                      handleClose={() =>
                                        setShowItemModal(false)
                                      }
                                      handleDelete={() =>
                                        handleDeleteItem(
                                          categoryObj.category,
                                          itemObj.item
                                        )
                                      }
                                    />
                                  </>
                                );
                              })
                          : categoryObj.items.map(
                              (itemObj: Item, itemIndex: number) => {
                                return (
                                  <>
                                    {DisplayItemCard(
                                      categoryObj.category,
                                      itemIndex,
                                      itemObj
                                    )}
                                    <CustomModal
                                      key={`item-modal-${itemIndex}`}
                                      thingToDelete="item"
                                      show={showItemModal}
                                      handleClose={() =>
                                        setShowItemModal(false)
                                      }
                                      handleDelete={() =>
                                        handleDeleteItem(
                                          categoryObj.category,
                                          itemObj.item
                                        )
                                      }
                                    />
                                  </>
                                );
                              }
                            )}
                      </Row>
                    </Container>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <CustomModal
                key={`category-modal-${categoryIndex}`}
                thingToDelete="category"
                show={showCategoryModal}
                handleClose={() => setShowCategoryModal(false)}
                handleDelete={() => {
                  console.log(categoryObj);
                  handleDeleteCategory(categoryObj.category);
                }}
              />
            </Accordion>
          );
        })
      )}
    </>
  );
};

CategoriesAndItems.propTypes = CategoriesAndItemsPropTypes;

export default CategoriesAndItems;
