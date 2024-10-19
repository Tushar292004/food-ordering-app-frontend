import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const {logout} = useAuth0();
  return(
    <>
    <Link to="/" className="flex items-center text-xl hover:text-blue-500">
    Home</Link>
    <Link to="/manage-restaurant" className="flex items-center text-xl hover:text-blue-500">
    Manage Restaurant</Link>
    <Link to="/user-profile" className="flex items-center text-xl hover:text-blue-500">
    User Profile</Link>
    <Button 
    className="flex items-center font-bold px-3"
    onClick={()=> logout()}>Log Out</Button>
    </>
  )
}

export default MobileNavLinks;