

const SidebarOption = ({ 
  name, 
  isActive, 
  onClickOption 
}) => {
  return (
    <button 
      className={`sidebar-option ${isActive ? 'active' : ''}`}
      onClick={onClickOption}
    >
      {name}
    </button>
  );
  
}

export default SidebarOption;