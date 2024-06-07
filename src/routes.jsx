import { SignIn } from "@/pages/auth";
import { Accounts, Home, Transcation } from "@/pages/dashboard";
import {
  UserCircleIcon
} from "@heroicons/react/24/solid";
import { IoSettingsOutline } from "react-icons/io5";
import Retaildata from "./pages/dashboard/Retailerdata/retaildata";
import Invoicesdata from "./pages/dashboard/Retailerdata/invoicesdata";
import Signin from "./pages/auth/phone-signin";
import Otp from "./pages/auth/otp";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <img src="/images/dshicon.svg" className="  w-36 text-center" />,
        name: "dashboard",
        path: "/dashboard",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "portfolio",
        path: "/portfolio",
        element: <Home />,
      },

      {
        icon: <img src="/images/usericon.svg" className=" w-48 text-center" />,
        name: "application",
        path: "/home",
        element: <Home />,
      },
      {
        icon: (
          <img src="/images/symbolicon.svg" className=" w-48 text-center" />
        ),
        name: "accounts",
        path: "/accounts",
        element: <Accounts />,
      },
      {
        icon: <img src="/images/symbl.svg" className=" w-48 text-center" />,
        name: "transcation",
        path: "/transcation",
        element: <Transcation />,
      },
      {
        icon: <IoSettingsOutline {...icon} />,
        name: "settings",
        path: "/settings",
        element: <Transcation />,
      },
      {
        path: "/notifications",
        element: <Transcation />,
      },
      {
        path: "/retailer",
        element: <Retaildata />,
      },
      {
        path: "/invoices",
        element: <Invoicesdata />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign_in",
        element: <Signin />,
      },
      {
        path: "/otp",
        element: <Otp />,
      },
    ],
  },
];

export default routes;
