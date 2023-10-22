import { usePhotoEditorContext } from '../../context/PhotoEditorContext';
import SidebarOption from './SidebarOption';


const Sidebar = () => {
  const {
    options, 
    selectedOptionIndex, 
    handleOptionSelect,
    handleOptionsReset
  } = usePhotoEditorContext();
  return (
    <div className="sidebar">
      {options.map((option, index) => {
        const { name } = option; 

        return (
          <SidebarOption
            key={index}
            isActive={index === selectedOptionIndex}
            name={name}
            onClickOption={() => { handleOptionSelect(index) }}
          />
        )
      })}
      <button
        className='sidebar-option' 
        type='reset'
        onClick={handleOptionsReset}
      > Reset 
      </button>
  </div>
  )
};

export default Sidebar;