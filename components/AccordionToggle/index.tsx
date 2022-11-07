import { useAccordionButton } from 'react-bootstrap';
import { AccordionTogglePropTypes, AccordionToggleTypes } from './types';

const AccordionToggle = ({
  children,
  eventKey,
}: AccordionToggleTypes): JSX.Element => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      className="text-start w-100 h-100 bg-transparent"
      type="button"
      style={{ border: 'unset' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

AccordionToggle.propTypes = AccordionTogglePropTypes;

export default AccordionToggle;
