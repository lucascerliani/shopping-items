import { HtmlHTMLAttributes } from 'react';
import PropTypes, { InferProps } from 'prop-types';

export const AccordionTogglePropTypes = {
  /** Event key for opening accordion */
  eventKey: PropTypes.string.isRequired,
};

export type AccordionToggleTypes = InferProps<typeof AccordionTogglePropTypes> &
  HtmlHTMLAttributes<HTMLDivElement>;
