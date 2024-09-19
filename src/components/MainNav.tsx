import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {

  // auth0 hook for login funcitonality
  const {loginWithRedirect, isAuthenticated} = useAuth0();

  return(
    <span className="flex space-x-2 items-center">
      {/* Login button check and styles */}
      {isAuthenticated? (<UsernameMenu/>) : (
        <Button 
        variant="outline" 
        className="font-bold hover:text-blue-800 hover:bg-white"
        // login function is called here
        onClick={async ()=> await loginWithRedirect()}
        >
            Log In
        </Button>
      )}
    </span>
    
  )
}

export default MainNav;