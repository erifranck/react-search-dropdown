import React from 'react';
import { DropdownSelect } from 'components/DropdownSelect/DropdownSelect';
import './App.css';

const dropdownOptions = [
  {
    name: 'erifranck',
    value: '3053378798'
  },
  {
    name: 'julio',
    value: '3053019182'
  },
  {
    name: 'kleydith',
    value: '3030201223'
  },
  {
    name: 'anthoner',
    value: '30530111823'
  }
]

function App() {
  return (
    <div className="App">
      <DropdownSelect
        options={dropdownOptions}
        searchKeys={['name', 'value']}
      />
    </div>
  );
}

export default App;
