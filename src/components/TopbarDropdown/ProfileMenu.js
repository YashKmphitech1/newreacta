import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
// Redux
import { connect } from "react-redux"
import { Link,useNavigate } from "react-router-dom"

// users
import user1 from "../../assets/images/users/avatar-1.jpg"
import { useTranslation } from "react-i18next"

const ProfileMenu = props => {
  const navigate= useNavigate()
  const { t } = useTranslation()
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login")
  }
  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user1}
            alt="Header Avatar"
          />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <Link to="/profile" className="dropdown-item">
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1" />
            {t("Profile")}{" "}
          </Link>

          {/* <div className="dropdown-divider" /> */}
          <button onClick={handleLogout} className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{t("Logout")}</span>
          </button>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

export default ProfileMenu
