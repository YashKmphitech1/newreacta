import React from "react"
import { Navigate } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

//Tables
import DatatableTables from "../pages/Tables/DatatableTables"
//Pages
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesFaqs from "../pages/Utility/pages-faqs"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  // //profile
  { path: "/profile", component: UserProfile },

  // Tables
  { path: "/tables-datatable", component: DatatableTables },

  //Utility
  { path: "/pages-faqs", component: PagesFaqs },
  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Navigate to="/dashboard" /> },
]

const authRoutes = [
  // { path: "/logout", component: Logout },
  { path: "/auth/login", component: Login },
  // { path: "/forgot-password", component: ForgetPwd },
  // { path: "/register", component: Register },

  { path: "/pages-maintenance", component: PagesMaintenance },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },

]

export { userRoutes, authRoutes }
