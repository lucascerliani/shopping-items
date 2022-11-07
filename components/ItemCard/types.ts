import { HtmlHTMLAttributes } from 'react';
import PropTypes, { InferProps } from 'prop-types';

export const ItemCardPropTypes = {
  /** Name of the item */
  name: PropTypes.string.isRequired,

  /** Card image URL */
  image: PropTypes.string.isRequired,
};

export type ItemCardTypes = InferProps<typeof ItemCardPropTypes> &
  HtmlHTMLAttributes<HTMLDivElement>;
