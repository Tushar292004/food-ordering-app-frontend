import { useAuth0 } from "@auth0/auth0-react";

import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const { user, logout } = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="flex items-center px-3 font-bold gap-2">
                <CircleUserRound
                    className="" />
                {user?.email ? user.email.split('@')[0] : ''}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link
                        to="/user-profile"
                        className="font-bold">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button 
                    className="flex flex-1 font-bold"
                    //logout inbuilt auth0 function called
                    onClick={()=> logout()}
                    >Log Out</Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu;