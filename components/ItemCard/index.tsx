import { Card, Row, Col } from 'react-bootstrap';
import { ItemCardPropTypes, ItemCardTypes } from './types';

const ItemCard = ({ name, image }: ItemCardTypes): JSX.Element => {
  return (
    <Card className="mb-5">
      <Card.Body>
        <Card.Title>
          <Row>
            <Col xs={10}>{name}</Col>
            <Col xs={2}>
              <i
                className="bi bi-heart"
                style={{
                  cursor: 'pointer',
                  color: 'red',
                }}
              />
            </Col>
          </Row>
        </Card.Title>
      </Card.Body>
      <Card.Img variant="top" src={image} style={{ borderRadius: 'unset' }} />
      <Card.Body className="text-end">
        <i className="bi bi-trash fs-5" style={{ cursor: 'pointer' }} />
      </Card.Body>
    </Card>
  );
};

ItemCard.propTypes = ItemCardPropTypes;

export default ItemCard;
