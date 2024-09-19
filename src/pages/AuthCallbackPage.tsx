import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


const AuthCallbackPage = () => {
    //navigate hook
    const navigate = useNavigate();
    const { user } = useAuth0();
    const { createUser } = useCreateMyUser();

    //hook to ensure useEffect runs only once
    //its stop state from re-render on update
    const hasCreatedUser = useRef(false);
     
    useEffect(() => {
        if (user?.sub && user?.email && !hasCreatedUser.current) {
            //creating user in mongodn
            createUser({ auth0Id: user.sub, email: user.email });
            // to prevent re-rendring
            hasCreatedUser.current = true; 
        }
        // this will take us to home page
        navigate("/");
    }, [createUser, navigate, user]);

    return(
        <>Loading ...</>
    )
}

export default AuthCallbackPage;