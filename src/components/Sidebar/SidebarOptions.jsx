import SidebarOption from './SidebarOption';
import { usePhotoEditorContext } from '../../context/PhotoEditorContext';


const SidebarOptions = () => {
  const {
    options, 
    selectedOptionIndex, 
    handleOptionSelect
  } = usePhotoEditorContext();

  return (
    options.map((option, index) => {
      const { name } = option; 

      return (
        <SidebarOption
          key={index}
          isActive={index === selectedOptionIndex}
          name={name}
          onClickOption={() => { handleOptionSelect(index) }}
        />
      )
    })
  )
}

export default SidebarOptions;
