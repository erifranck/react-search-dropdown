import React from 'react';

export interface Option {
  [key: string]: any
}

export interface SelectSearchProps {
  options: Option[];
  searchKeys: string[];
  valueKey?: string;
  render?: (option: Option) => ReactNode;
}

export const SelectSearch: React.FC<SelectSearchProps>;
