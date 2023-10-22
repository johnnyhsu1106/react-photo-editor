import { usePhotoEditorContext } from '../../context/PhotoEditorContext'


const ResetButton = () => {
  const { handleOptionsReset } = usePhotoEditorContext();
  return (
    <button
      className='sidebar-option' 
      type='reset'
      onClick={handleOptionsReset}
    > Reset 
    </button>
  )
}

export default ResetButton;
