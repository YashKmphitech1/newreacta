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
import Pages404 from "../pages/Utility/pages-404"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  // //profile
  { path: "/profile", component: UserProfile },

  // Tables
  { path: "/tables-datatable", component: DatatableTables },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Navigate to="/dashboard" /> },
]

const authRoutes = [
  { path: "/auth/login", component: Login },
  { path: "/pages-404", component: Pages404 },

]

export { userRoutes, authRoutes }
