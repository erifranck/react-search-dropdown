import React from 'react';
import './DropdownItem.scss';

interface Props {
  value: string,
  onClick: (value: string) => void
}

export const DropdownItem: React.FC<Props> = (props) => {
  return (
    <div className="dropdown-item" onClick={() => props.onClick(props.value)}>
      {props.children}
    </div>
  )
}

