import { useState } from 'react'
import { DEFAULT_OPTIONS } from './options';
import './App.css'

import Sidebar from './Sidebar';
import Slider from './Slider'

const App = () => {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const selectedOption = options[selectedOptionIndex];
  const slideProps = {
    min: selectedOption.range.min,
    max: selectedOption.range.max,
    value: selectedOption.value
  };

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

  const getImageStyle = () => {
    const filters = options.map(option => {
      const { property, value, unit } = option;
      return `${property}(${value}${unit})`
    }).join(' ');

    return { filter: filters}
  }

  return (
    <div className="container">
      <div 
        className="main-image"
        style={getImageStyle()} 
      />
      <Sidebar 
        options={options}
        selectedOptionIndex={selectedOptionIndex}
        onSelectOption={handleOptionSelect}
        onResetOptions={handleOptionsReset}
      />
      <Slider 
        {...slideProps}
        onChangeSlider={handleSliderChange}
      />

    </div>
  )
}

export default App;
