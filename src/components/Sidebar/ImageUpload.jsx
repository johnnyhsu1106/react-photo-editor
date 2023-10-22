import Container from '../Container/Container';
import { usePhotoEditorContext } from '../../context/PhotoEditorContext';


const ImageUpload = () => {
  const { handleImageUpload } = usePhotoEditorContext(); 

  return (
    <Container className="image-upload">
      <label htmlFor="image-upload">Upload Image</label>
      <input
        id="image-upload"
        type="file" 
        accept="image/*" 
        onChange={(e) => handleImageUpload(e.target.files?.[0])} 
      />
    </Container>
  );
};

export default ImageUpload;
