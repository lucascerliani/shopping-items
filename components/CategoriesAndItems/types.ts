import { HtmlHTMLAttributes } from 'react';
import PropTypes, { InferProps } from 'prop-types';

export interface Item {
  item: string;
  image: string;
  favourite: boolean;
}

const Item = {
  /** Item name */
  item: PropTypes.string.isRequired,

  /** Item image */
  image: PropTypes.string.isRequired,

  /** If item is favourite */
  favourite: PropTypes.bool.isRequired,
};

const Category = {
  /** Category name */
  category: PropTypes.string.isRequired,

  /** Category color */
  color: PropTypes.string.isRequired,

  /** Category color */
  items: PropTypes.arrayOf(PropTypes.shape(Item).isRequired).isRequired,
};

export const CategoriesAndItemsPropTypes = {
  /** Array of items ordered by category */
  itemsByCategory: PropTypes.arrayOf(PropTypes.shape(Category).isRequired)
    .isRequired,

  /** Only returns favourite items */
  favourites: PropTypes.bool,
};

export type CategoriesAndItemsTypes = InferProps<
  typeof CategoriesAndItemsPropTypes
> &
  HtmlHTMLAttributes<HTMLDivElement>;
