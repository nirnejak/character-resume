import PropTypes from "prop-types"

import "./Photo.scss"

const Photo = ({ image, altText }) => {
  return (
    <div className="photo">
      <img src={image} alt={altText} />
    </div>
  )
}

Photo.propTypes = {
  altText: PropTypes.string,
  image: PropTypes.string.isRequired,
}

export default Photo
