import { HtmlHTMLAttributes } from 'react';
import PropTypes, { InferProps } from 'prop-types';

export interface Item {
  item: string;
  image: string;
  favourite: boolean;
}

export const CategoriesAndItemsPropTypes = {
  /** Only returns favourite items */
  favourites: PropTypes.bool,
};

export type CategoriesAndItemsTypes = InferProps<
  typeof CategoriesAndItemsPropTypes
> &
  HtmlHTMLAttributes<HTMLDivElement>;
