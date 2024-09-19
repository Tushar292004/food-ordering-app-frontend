import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    return (
        <Sheet>
            <SheetTrigger>
                {/* this is menu icon from lucid react which will trigger sheet component to open */}
                <Menu className="" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                     {isAuthenticated? (
                        <span className="flex items-center font-bold gap-2">
                            <CircleUserRound className=""/>
                            {user?.email ? user.email.split('@')[0] : ''}
                        </span>
                     ):(
                        <span>Welcome to EatersBay</span>
                     )}
                </SheetTitle>
                <Separator className="" />
                <SheetDescription className="flex flex-col gap-4" >
                    {isAuthenticated? <MobileNavLinks/> :
                    <Button 
                    onClick={()=>loginWithRedirect()}
                    className="flex-1 font-bold">Log In</Button>}
                </SheetDescription>
            </SheetContent>
        </Sheet >
    )
}

export default MobileNav;