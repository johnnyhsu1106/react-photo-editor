import { createContext, useContext, useState, useMemo } from 'react';
import DEFAULT_OPTIONS from '../options.json';


const PhotoEditorContext = createContext(null);

const usePhotoEditorContext = () => {
  const photoEditor = useContext(PhotoEditorContext);
  if (photoEditor === null) {
    throw new Error('usePhotoContext must be used within PhotoProvider')
  }
  return photoEditor;
};

const PhotoEditorProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const selectedOption = options[selectedOptionIndex];

  const handleOptionSelect = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleSliderChange = (value) => {
    setOptions((prevOptions) => {
      return prevOptions.map((prevOption, index) => {
        return index === selectedOptionIndex ? {...prevOption, value : value} : prevOption;
      });
    })
  };
  
  const handleOptionsReset = () => {
    setOptions(DEFAULT_OPTIONS);
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();

    if (file) {
      setFileName(`modified-${file.name}`);
      reader.readAsDataURL(file);
    }

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };


  const imageStyle = useMemo(() => {
    const filters = options.map(option => {
      const { property, value, unit } = option;
      return `${property}(${value}${unit})`
    }).join(' ');

    return { filter: filters, backgroundImage: `url(${imageUrl})`};
  
  }, [options, imageUrl]);

  const value = {
    fileName,
    imageUrl,
    imageStyle,
    options,
    selectedOptionIndex,
    selectedOption,
    handleImageUpload,
    handleOptionSelect,
    handleSliderChange,
    handleOptionsReset,
  };

  return (
    <PhotoEditorContext.Provider value={value}>
      {children}
    </PhotoEditorContext.Provider>    

  )
}

export {usePhotoEditorContext, PhotoEditorProvider}
