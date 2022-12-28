import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
import Test from "./Test";
import axios from "axios";
import Constants from "./config/constants";

const App = (props) => {
  axios.defaults.baseURL = Constants.API_BASE_URL;
  return (
    <>
      <Router basename={Constants.BASE_URL}>
        <Routes>
          <Route path="/" element={ <PrivateRoutes > <Dashboard/> </PrivateRoutes> } />
          <Route path="/dashboard" element={ <PrivateRoutes > <Dashboard/> </PrivateRoutes> } />
          <Route path="/tables-datatable" element={ <PrivateRoutes > <DatatableTables/> </PrivateRoutes> } />
          <Route path="/profile" element={ <PrivateRoutes > <UserProfile/> </PrivateRoutes> } />
          
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Pages404 />} />
          <Route path="/test" element={<Test />} />
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
