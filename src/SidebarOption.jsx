import React from 'react'

const SidebarOption = ({ name, index, isActive, onSelectOption }) => {
  return (
    <button 
      className={`sidebar-option ${isActive ? 'active' : ''}`}
      onClick={() => {onSelectOption(index)}}
    >
      {name}
    </button>
  );
  
}

export default SidebarOption;