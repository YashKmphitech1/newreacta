import PropTypes from 'prop-types'
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { logoutUser } from "../../store/actions"

const Logout = props => {
  useEffect(() => {
    props.logoutUser(props.history)
  })

  return <></>
}

Logout.propTypes = {
  history: PropTypes.object,
  logoutUser: PropTypes.func
}

export default connect(null, { logoutUser })(Logout)
