import React, {ReactNode} from 'react';

export interface Option {
  [key: string]: any
}

export interface DropdownSelectProps {
  options: Option[];
  searchKeys: string[];
  valueKey?: string;
  render?: (option: Option) => ReactNode;
}

export const DropdownSelect: React.FC<DropdownSelectProps>;
