import PropTypes from "prop-types"

const Photo = ({ imageUrl, altText }) => {
  return <img src={imageUrl} alt={altText} />
}

Photo.propTypes = {
  altText: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
}

export default Photo
