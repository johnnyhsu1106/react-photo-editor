const Slider = ({
  min, 
  max, 
  value, 
  onChangeSlider 
}) => {
  return (
    <div className="slider-container">
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {onChangeSlider(e.target.value)}}
      />
    </div>
  )
}

export default Slider;