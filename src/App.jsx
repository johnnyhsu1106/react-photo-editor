import Container from './components/Container/Container';
import Image from './components/Image/Image';
import Sidebar from './components/Sidebar/Sidebar';
import Slider from './components/Slider/Slider';
import { PhotoEditorProvider } from './context/PhotoEditorContext';
import './App.css';


const App = () => {
  return (
    <Container className='container'>
      <PhotoEditorProvider>
        <Image />
        <Sidebar />
        <Slider />
      </PhotoEditorProvider>
    </Container>
  )
}

export default App;
