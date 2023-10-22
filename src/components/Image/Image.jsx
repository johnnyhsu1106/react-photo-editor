import { usePhotoEditorContext } from '../../context/PhotoEditorContext';

const Image = () => {
  const { imageStyle } = usePhotoEditorContext();
  return (
    <div 
      className="main-image"
      style={imageStyle} 
    />
  )
}

export default Image;
