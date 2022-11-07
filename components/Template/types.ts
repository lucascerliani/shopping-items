import { HtmlHTMLAttributes } from 'react';
import PropTypes, { InferProps } from 'prop-types';

export const TemplatePropTypes = {
  /** Page title */
  pageTitle: PropTypes.string,
};

export type TemplateTypes = InferProps<typeof TemplatePropTypes> &
  HtmlHTMLAttributes<HTMLDivElement>;
