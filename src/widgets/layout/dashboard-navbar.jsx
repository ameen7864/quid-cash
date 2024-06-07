import { setOpenSidenav, useMaterialTailwindController } from "@/context";
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  ClockIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openSidenav } = controller;
  const fixedNavbar = true;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-b-xl transition-all ${
        fixedNavbar
          ? "sticky z-40 py-0 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-0"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex justify-between gap-6 md:flex-row md:items-center ">
        <div className="w-96  text-black ms-20 text-base my-4">
          Anchor: &nbsp;
          <select>
            <option value="">All</option>
            <option value="">Ripplr</option>
            <option value="">Intelligent Retail</option>
          </select>
        </div>
        {/* <div className="capitalize">
          <Breadcrumbs 
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {"page"}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div> */}
        <div className="flex items-center">
          <Typography className="text-black text-sm font-medium mr-2">
            Global View
          </Typography>

          <label class="relative block aspect-[2/0.75] w-12 h-6 rounded-full bg-gray-600 transition-all duration-300 hover:bg-[length:100%_500%] focus:bg-[length:100%_500%] bg-[length:100%_100%]">
            <input class="peer/input hidden" type="checkbox" />
            <div class="absolute left-[3%] top-1/2 aspect-square h-[90%] -translate-y-1/2 rotate-180 rounded-full bg-white bg-gradient-to-t transition-all duration-500 peer-checked/input:left-[50%] peer-checked/input:-rotate-6"></div>
          </label>

          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>

          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <BellIcon className="h-5 w-5 text-blue-gray-500" />
              </IconButton>
            </MenuHandler>
            <MenuList className="w-max border-0">
              <MenuItem className="flex items-center gap-3">
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>New message</strong> from Laur
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuHandler>
              <div className=" flex gap-2 text-blue-gray-500 text-sm cursor-pointer">
                admin@ripplr.in
              </div>
            </MenuHandler>
            <MenuList className="w-max border-0">
              <MenuItem className="flex items-center gap-3">
                <div>
                  <Link to="/">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-1 font-medium text-blue-gray-500"
                    >
                      View Profile
                    </Typography>
                  </Link>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-3">
                <div>
                  <Link to="/auth/sign-in">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-1 font-medium text-[#00A991] "
                    >
                      Logout
                    </Typography>
                  </Link>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <Link to="/auth/sign-in">
            <Button
              variant="text"
              color="blue-gray"
              className="hidden items-center gap-1 px-4 xl:flex normal-case"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
              Abhishek
            </Button>
            <IconButton
              variant="text"
              color="blue-gray"
              className="grid xl:hidden"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
          </Link> */}
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
