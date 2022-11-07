import { HtmlHTMLAttributes } from 'react';
import PropTypes, { InferProps } from 'prop-types';

export const BooleanTogglePropTypes = {
  /** First option to select */
  firstOption: PropTypes.string.isRequired,

  /** Second option to select */
  secondOption: PropTypes.string.isRequired,

  /** Function to handle toggle change */
  handleChange: PropTypes.func.isRequired,

  /** Toggle value */
  value: PropTypes.string.isRequired,
};

export type BooleanToggleTypes = InferProps<typeof BooleanTogglePropTypes> &
  HtmlHTMLAttributes<HTMLDivElement>;
