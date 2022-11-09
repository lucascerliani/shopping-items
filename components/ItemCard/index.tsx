import { changeFavourite } from '@services';
import { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFavourite, removeFavourite } from '../../slices/categorySlice';
import { ItemCardPropTypes, ItemCardTypes } from './types';

const ItemCard = ({
  category,
  name,
  image,
  onDeleteItem,
  favourite,
}: ItemCardTypes): JSX.Element => {
  const [isFavourite, setIsFavourite] = useState<boolean>(favourite);

  const dispatch = useDispatch();

  const handleFavourite = () => {
    const favouriteValue = !isFavourite;

    changeFavourite(category, name, favouriteValue)
      .then(() => {
        dispatch(
          favourite
            ? addFavourite({ categoryName: category, itemName: name })
            : removeFavourite({ categoryName: category, itemName: name })
        );
        setIsFavourite(favouriteValue);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Card className="mb-5">
      <Card.Body>
        <Card.Title>
          <Row>
            <Col xs={10}>{name}</Col>
            <Col xs={2}>
              <i
                className={`bi bi-heart${isFavourite ? '-fill' : ''}`}
                style={{
                  cursor: 'pointer',
                  color: 'red',
                }}
                onClick={handleFavourite}
              />
            </Col>
          </Row>
        </Card.Title>
      </Card.Body>
      <Card.Img variant="top" src={image} style={{ borderRadius: 'unset' }} />
      <Card.Body className="text-end">
        <i
          onClick={onDeleteItem}
          className="bi bi-trash fs-5"
          style={{ cursor: 'pointer' }}
        />
      </Card.Body>
    </Card>
  );
};

ItemCard.propTypes = ItemCardPropTypes;

export default ItemCard;
