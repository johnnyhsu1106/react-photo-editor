

import React from 'react'
import SidebarOption from './SidebarOption';

const Sidebar = ({ options, selectedOptionIndex, onSelectOption, onResetOptions }) => {
  return (
    <div className="sidebar">
      {options.map((option, index) => {
        const { name } = option; 
        return (
          <SidebarOption
            key={index}
            index={index}
            active={index === selectedOptionIndex}
            name={name}
            onSelectOption={onSelectOption}
          />
        )
      })}
      <button
        className='sidebar-option' 
        type='reset'
        onClick={onResetOptions}
      > Reset 
      </button>
  </div>
  )
};

export default Sidebar;