import React from "react"
import { Link } from "react-router-dom"

import PropTypes from "prop-types"

import "./Card.scss"

const Card = ({ character }) => {
  return (
    <Link to={`/resume/${character.id}`}>
      <div className="card">
        <div className="card-image">
          <img src={character.image} alt={name} />
        </div>
        <div className="card-content">
          <h2>{character.name}</h2>
          <p className="subtitle">{character.species}</p>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  character: PropTypes.object.isRequired,
}

export default Card
