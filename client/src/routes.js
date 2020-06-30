import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";


import Dashboard from './components/protected/Dashboard'
import Price from "./components/protected/Price"
import Discount from "./components/protected/Discount"
import Coupon from './components/protected/Coupon'
import Reword from './components/protected/Reword'
import Report from './components/protected/Report'
import Shipping from './components/protected/Shipping'
import Setting from './components/protected/Setting'




export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },


  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/price",
    layout: DefaultLayout,
    component: Price
  },
  {
    path: "/discount",
    layout: DefaultLayout,
    component: Discount
  },
  {
    path: "/coupon",
    layout: DefaultLayout,
    component: Coupon
  },
  {
    path: "/reword",
    layout: DefaultLayout,
    component: Reword
  },
  {
    path: "/report",
    layout: DefaultLayout,
    component: Report
  },
  {
    path: "/shipping",
    layout: DefaultLayout,
    component: Shipping
  },
  {
    path: "/setting",
    layout: DefaultLayout,
    component: Setting
  },

];
