const IconButton = ({ dataLabel, icon, handleValue }) => {
  return (
    <button className="icon" data-label={dataLabel} onMouseOver={handleValue}>
      {icon}
    </button>
  )
}
export default IconButton
