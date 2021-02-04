import React, {useState, ReactNode, FormEvent} from 'react';
import {DropdownItem} from 'components/DropdownItem/DropdownItem';
import Fuse from 'fuse.js/dist/fuse';
import './DropdownSelect.scss';

interface Option {
  [key: string]: any
}

interface Props {
  options: Option[];
  searchKeys: string[];
  valueKey?: string;
  render?: (option: Option) => ReactNode;
}

export const DropdownSelect: React.FC<Props> = (props) => {
  const [query, setQuery] = useState<string>('');
  const fuse = new Fuse(props.options, {keys: props.searchKeys, threshold: 0.3});
  const handleSelect = (option: Option) => {
    setQuery(option[props.valueKey || 'value']);
  };
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };
  return (
    <div className="dropdown-select-wrapper" >
      <input
        type="text"
        value={query}
        className="dropdown-select-input"
        onChange={handleChange} />
      <div className="dropdown-select-content" >
        {
          fuse.search(query).map((option, index) => {
            return (
              <DropdownItem
                key={index}
                value={option.item[props.valueKey || 'value']}
                onClick={() => handleSelect(option.item)}
              >
                {props.render ? props.render(option.item): (
                  <>
                    <p>{option.item.name}</p>
                    <span>{option.item.value}</span>
                  </>
                )}
              </DropdownItem>
            )
          })
        }
      </div>
    </div>
  )
}

