import Name from "./name";
import NavBarOptions from "./options";
import { Separator } from "@/components/ui/separator";

function NavbarHeader() {
    return ( 
        <div className="w-full flex items-center justify-between">
            <Name />
            <Separator className="mx-4 hidden sm:block flex-1 bg-purple-300/40" /> 
            <NavBarOptions />
        </div>
    );
}

export default NavbarHeader;