import Name from "./name";
import NavBarOptions from "./options";
import { Separator } from "@/components/ui/separator";

function NavbarHeader() {
    return ( 
        <div 
            className="
                sticky 
                top-0 
                z-50 
                w-full 
                flex 
                items-center 
                justify-center 
                sm:justify-between
            "
        >
            <Name />
            <Separator className="mx-4 hidden sm:block flex-1 bg-purple-300/40" /> 
            <NavBarOptions />
        </div>
    );
}

export default NavbarHeader;