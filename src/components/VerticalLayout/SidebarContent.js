import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = (props) => {
  const ref = useRef();

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="ti-home"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">2</span> */}
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>
            <li>
              <Link to="/tables-datatable" className="waves-effect">
                <i className="ti-view-grid"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">2</span> */}
                <span>{props.t("Orders")}</span>
              </Link>
            </li>
           
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withTranslation()(SidebarContent);
