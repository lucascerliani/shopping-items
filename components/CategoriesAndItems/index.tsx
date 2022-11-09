import {
  CategoriesAndItemsPropTypes,
  CategoriesAndItemsTypes,
  Item,
} from './types';
import { AccordionToggle, ItemCard } from '@components';
import { Accordion, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useGetCategories } from '@hooks';

const CategoriesAndItems = ({
  favourites = false,
}: CategoriesAndItemsTypes): JSX.Element => {
  const { categories, loading } = useGetCategories();

  const DisplayItemCard = (itemIndex: number, itemObject: Item) => (
    <Col key={String(itemIndex)} xs={12} md={6} lg={3}>
      <ItemCard name={itemObject.item} image={itemObject.image} />
    </Col>
  );

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
                                return DisplayItemCard(itemIndex, itemObj);
                              })
                          : categoryObj.items.map(
                              (itemObj: Item, itemIndex: number) => {
                                return DisplayItemCard(itemIndex, itemObj);
                              }
                            )}
                      </Row>
                    </Container>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        })
      )}
    </>
  );
};

CategoriesAndItems.propTypes = CategoriesAndItemsPropTypes;

export default CategoriesAndItems;
