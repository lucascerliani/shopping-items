import { HtmlHTMLAttributes } from 'react';
import PropTypes, { InferProps } from 'prop-types';

export const CustomModalPropTypes = {
  /** Thing to delete: category or item */
  thingToDelete: PropTypes.oneOf(['category', 'item']).isRequired,

  /** Show modal */
  show: PropTypes.bool.isRequired,

  /** Function to close modal */
  handleClose: PropTypes.func.isRequired,

  /** Function to delete thing selected */
  handleDelete: PropTypes.func.isRequired,
};

export type CustomModalTypes = InferProps<typeof CustomModalPropTypes> &
  HtmlHTMLAttributes<HTMLDivElement>;
