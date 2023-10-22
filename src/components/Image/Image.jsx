import Container from '../Container/Container';
import { usePhotoEditorContext } from '../../context/PhotoEditorContext';

const Image = () => {
  const { imageStyle } = usePhotoEditorContext();
  return (
    <Container className='main-image' style={imageStyle} />
  )
};

export default Image;
