// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import Tablescopy from "views/Dashboard/Tables copy";
import TablesCopy2 from "views/Dashboard/Tables copy 2";
import TablesCopy3 from "views/Dashboard/Tables copy 3";
import { RectangleGroupIcon } from '@heroicons/react/24/solid'
import { RectangleStackIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { WalletIcon } from '@heroicons/react/24/solid'
import { Box } from "@chakra-ui/react";



import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

import { AddIcon } from '@chakra-ui/icons'
import TablesCopy4 from "views/Dashboard/Tables copy 4";
var token = localStorage.getItem('token')
console.log(token);

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/table-barang",
    name: "Barang",
    rtlName: "لوحة القيادة",
    icon: <RectangleGroupIcon height={18} />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/barang-masuk",
    name: "Barang Masuk",
    rtlName: "لوحة القيادة",
    icon: <RectangleStackIcon height={18} />,
    component: Tablescopy,
    layout: "/admin",
  },
  {
    path: "/hutang",
    name: "Hutang",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: TablesCopy2,
    layout: "/admin",
  },
  {
    path: "/permintaan",
    name: "Permintaan Barang",
    rtlName: "لوحة القيادة",
    icon: <ShoppingCartIcon height={18} />,
    component: TablesCopy3,
    layout: "/admin",
  },
  {
    path: "/transaksi",
    name: "Transaksi Harian",
    rtlName: "لوحة القيادة",
    icon: <WalletIcon height={18}/>,
    component: TablesCopy4,
    layout: "/admin",
  },
  // {
  //   path: "/rtl-support-page",
  //   name: "RTL",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color="inherit" />,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      
      // ...(token !== null ? [{
      //   path: "/signin",
      //   name: "Sign out",
      //   rtlName: "لوحة القيادة",
      //   icon: <DocumentIcon color="inherit" />,
      //   component: SignIn,
      //   layout: "/auth",
      // },] : [,{
      //   path: "/signup",
      //   name: "Sign out",
      //   rtlName: "لوحة القيادة",
      //   icon: <DocumentIcon color="inherit" />,
      //   component: SignUp,
      //   layout: "/auth",
      // }]),
      {
        path: "/signup",
        name: "Sign Out",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignUp,
        layout: "/auth",
      },
      
      {
        path: "/signin",
        name: "Sign Out",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
