import React from 'react'

const SidebarOption = ({ name, index, active, onSelectOption }) => {
  return (
    <button 
      className={`sidebar-option ${active ? 'active' : ''}`}
      onClick={() => {onSelectOption(index)}}
    >
      {name}
    </button>
  );
  
}

export default SidebarOption;