import Container from '../Container/Container';
import SidebarOptions from './SidebarOptions';
import ResetButton from './ResetButton';
import ImageUpload from './ImageUpload';


const Sidebar = () => {
  return (
    <Container className="sidebar">
      <SidebarOptions />
      <ResetButton />
      <ImageUpload />
    </Container>
  )
};

export default Sidebar;