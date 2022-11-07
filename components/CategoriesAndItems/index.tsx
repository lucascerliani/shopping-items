import {
  CategoriesAndItemsPropTypes,
  CategoriesAndItemsTypes,
  Item,
} from './types';
import { AccordionToggle, ItemCard } from '@components';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';

const CategoriesAndItems = ({
  itemsByCategory,
  favourites = false,
}: CategoriesAndItemsTypes): JSX.Element => {
  const DisplayItemCard = (itemIndex: number, itemObject: Item) => (
    <Col key={String(itemIndex)} xs={12} md={6} lg={3}>
      <ItemCard name={itemObject.item} image={itemObject.image} />
    </Col>
  );

  return (
    <Accordion defaultActiveKey="0" alwaysOpen>
      {itemsByCategory.map((categoryObj, categoryIndex) => {
        return (
          <Card key={String(categoryIndex)}>
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
                          .filter((itemObj) => itemObj.favourite)
                          .map((itemObj, itemIndex) => {
                            return DisplayItemCard(itemIndex, itemObj);
                          })
                      : categoryObj.items.map((itemObj, itemIndex) => {
                          return DisplayItemCard(itemIndex, itemObj);
                        })}
                  </Row>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
};

CategoriesAndItems.propTypes = CategoriesAndItemsPropTypes;

export default CategoriesAndItems;
