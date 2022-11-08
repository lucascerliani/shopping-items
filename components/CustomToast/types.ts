import { HtmlHTMLAttributes } from 'react';
import PropTypes, { InferProps } from 'prop-types';

export const CustomToastPropTypes = {
  /** True for success toast and false for error toast */
  success: PropTypes.bool.isRequired,

  /** Function to close toast */
  onClose: PropTypes.func.isRequired,

  /** Function to show toast */
  show: PropTypes.bool.isRequired,

  /** Item or Category */
  thingToCreate: PropTypes.oneOf(['Item', 'Category']).isRequired,

  /** Name or color error */
  nameOrColor: PropTypes.oneOf(['name', 'color']).isRequired,
};

export type CustomToastTypes = InferProps<typeof CustomToastPropTypes> &
  HtmlHTMLAttributes<HTMLDivElement>;
