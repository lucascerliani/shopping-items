import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CustomModalTypes } from './types';

const CustomModal = ({
  thingToDelete,
  show,
  handleClose,
  handleDelete,
}: CustomModalTypes): JSX.Element => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this {thingToDelete}?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Delete {thingToDelete}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
