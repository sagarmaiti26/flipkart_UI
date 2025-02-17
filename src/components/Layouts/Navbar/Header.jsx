import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Searchbar from "./Searchbar";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary-blue fixed top-0 py-2.5 w-full z-10">
      <div className="w-full sm:w-10/12 px-1 sm:px-4 m-auto flex flex-wrap justify-between items-center relative">
        <div className="flex items-center flex-1 mb-2 sm:mb-0">
          <Link className="h-7 mr-1 sm:mr-4" to="/">
            <img
              draggable="false"
              className="h-full w-full object-contain"
              src={logo}
              alt="Flipkart Logo"
            />
          </Link>
          <Searchbar />
        </div>

        <div className="flex items-center justify-between ml-1 sm:ml-0 gap-2 sm:gap-7 relative flex-wrap">
          <Link
            to="/login"
            className="px-3 sm:px-9 py-1.5 text-primary-blue bg-white border font-medium rounded-sm cursor-pointer text-sm sm:text-base"
          >
            Login
          </Link>

          <span className="moreDropDown hidden sm:flex items-center text-white font-medium gap-1 cursor-pointer">
            More
            <span>
              <ExpandMoreIcon sx={{ fontSize: "16px" }} />
            </span>
          </span>

          <Link
            to="/cart"
            className="flex items-center text-white font-medium gap-2 relative text-sm sm:text-base"
          >
            <span>
              <ShoppingCartIcon />
            </span>
            Cart
          </Link>
          <Link
            to="/cart"
            className="flex items-center text-white font-medium gap-2 relative "
          >
            <span>
              <StorefrontIcon />
            </span>
            Become a Seller
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;