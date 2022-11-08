import { Toast } from 'react-bootstrap';
import { CustomToastPropTypes, CustomToastTypes } from './types';

const CustomToast = ({
  success,
  onClose,
  show,
  thingToCreate,
  nameOrColor,
}: CustomToastTypes): JSX.Element => {
  return (
    <Toast
      bg={success ? 'success' : 'danger'}
      onClose={onClose}
      show={show}
      className="m-auto mb-4"
      delay={3000}
      autohide={success}
    >
      <Toast.Header>
        <strong className="me-auto">
          Create {thingToCreate.toLowerCase()}
        </strong>
      </Toast.Header>
      <Toast.Body>
        <strong>
          {success
            ? `Your ${thingToCreate} was successfully created.`
            : nameOrColor === 'name'
            ? `${thingToCreate} name already exists.`
            : 'Another category already has this color'}
        </strong>
      </Toast.Body>
    </Toast>
  );
};

CustomToast.prototype = CustomToastPropTypes;

export default CustomToast;
