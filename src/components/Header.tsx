import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from './MainNav';
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return(
    <div className="border-b-2 py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
            {/* Navbar logo for EatersBay */}
            <Link 
             to="/"
             className="text-3xl font-bold tracking-tight  hover:text-blue-800">
                EatersBay
            </Link>
            
            {/* only visible for mobile screens  */}
            <div className="md:hidden flex items-center">
                <ModeToggle/>
                <div className="px-2"></div>
                <MobileNav/>
            </div>

            {/* desktop nav bar */}
            <div className="hidden md:flex  items-center">
                <ModeToggle/>
                <div className="px-2"></div>
                <MainNav/>
            </div>
        </div>
    </div>
  )
}

export default Header;