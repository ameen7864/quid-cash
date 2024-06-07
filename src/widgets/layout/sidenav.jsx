import { setOpenSidenav, useMaterialTailwindController } from "@/context";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function Sidenav({ routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;

  return (
    <aside
      className={` ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed bg-[#133039] inset-0 z-50  h-[calc(100vh)] w-20 rounded-e-3xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div className={`relative`}>
        <div className="p-4 text-center">
          <img src="/img/quid.svg" className=" h-20 w-20 text-center" />
        </div>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul>
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                {name && (
                  <NavLink to={`/${layout}${path}`}>
                    {({ isActive }) => (
                      <Button
                        style={{
                          backgroundColor: isActive ? "#00A991" : "transparent",
                          color: isActive
                            ? "#ffffff"
                            : sidenavType === "dark"
                            ? "#ffffff"
                            : "#ffffff",
                        }}
                        className="flex items-center gap-4 px-4 capitalize"
                        fullWidth
                      >
                        {icon}

                        <span className="opacity-0 absolute top-full left-0 bg-black text-white px-2 py-1 rounded-md transition-opacity duration-100 pointer-events-none">
                          {name}
                        </span>
                      </Button>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}



// Sidenav.propTypes = {
//   brandImg: PropTypes.string,
//   brandName: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
