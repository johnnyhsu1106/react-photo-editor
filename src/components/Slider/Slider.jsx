import { usePhotoEditorContext } from '../../context/PhotoEditorContext';

const Slider = () => {
  const {
    selectedOption,
    handleSliderChange
  } = usePhotoEditorContext();

  return (
    <div className="slider-container">
      <input
        type="range"
        className="slider"
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        onChange={(e) => {handleSliderChange(+e.target.value)}}
      />
    </div>
  )
}

export default Slider;