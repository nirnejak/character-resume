import PropTypes from "prop-types"

import "./ResumeContainer.scss"

const ResumeContainer = ({ children }) => {
  return (
    <section className="resume-container">
      <div className="resume">{children}</div>
    </section>
  )
}

ResumeContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ResumeContainer
