import { HtmlHTMLAttributes } from 'react';
import PropTypes, { InferProps } from 'prop-types';

export const ItemCardPropTypes = {
  /** Category name */
  category: PropTypes.string.isRequired,

  /** Item name */
  name: PropTypes.string.isRequired,

  /** Card image URL */
  image: PropTypes.string.isRequired,

  /** Function that will be executed when the trash is clicked */
  onDeleteItem: PropTypes.func.isRequired,

  /** Is favourite */
  favourite: PropTypes.bool.isRequired,
};

export type ItemCardTypes = InferProps<typeof ItemCardPropTypes> &
  HtmlHTMLAttributes<HTMLDivElement>;
