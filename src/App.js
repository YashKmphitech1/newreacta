import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// Import Routes all
import { userRoutes, authRoutes } from "./routes/allRoutes";
// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware";

// layouts Format
import VerticalLayout from "./components/VerticalLayout/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";

// Import scss
import "./assets/scss/theme.scss";
import Dashboard from "./pages/Dashboard";
import Pages404 from "./pages/Utility/pages-404"
import PrivateRoutes from "./routes/middleware/Authmiddleware";
import DatatableTables from "./pages/Tables/DatatableTables";
import UserProfile from "./pages/Authentication/user-profile";

const App = (props) => {
  function getLayout() {
    let layoutCls = VerticalLayout;
    switch (props.layout.layoutType) {
      case "horizontal":
        layoutCls = VerticalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  }

  const Layout = getLayout();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <PrivateRoutes > <Dashboard/> </PrivateRoutes> } />
          <Route path="/dashboard" element={ <PrivateRoutes > <Dashboard/> </PrivateRoutes> } />
          <Route path="/tables-datatable" element={ <PrivateRoutes > <DatatableTables/> </PrivateRoutes> } />
          <Route path="/profile" element={ <PrivateRoutes > <UserProfile/> </PrivateRoutes> } />
          
          <Route path="/auth/login" element={<Login/>} />
          <Route path="*" element={<Pages404 />} />
        </Routes>
      </Router>
    </>
  );
};

App.propTypes = {
  layout: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
  };
};

export default connect(mapStateToProps, null)(App);
