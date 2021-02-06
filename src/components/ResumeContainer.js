import { useParams, Link } from "react-router-dom"

import PropTypes from "prop-types"

import "./ResumeContainer.scss"

const ResumeContainer = ({ children }) => {
  const { id } = useParams()

  const prevResume = parseInt(id) - 1
  const nextResume = parseInt(id) + 1

  return (
    <section className="resume-container">
      <div className="resume">
        <div className="link">
          {prevResume > 0 && <Link to={`/resume/${prevResume}`}>{"<<"}</Link>}
        </div>
        <div className="card">{children}</div>
        <div className="link">
          <Link to={`/resume/${nextResume}`}>{">>"}</Link>
        </div>
      </div>
    </section>
  )
}

ResumeContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ResumeContainer
