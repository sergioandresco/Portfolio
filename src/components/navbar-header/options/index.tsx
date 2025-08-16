import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import navLinks from '@/data/navbar';


function NavBarOptions() {

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {navLinks.map((link) => (
                    <NavigationMenuItem key={link.name}>
                        <NavigationMenuLink asChild>
                            <Link
                                href={link.href}
                                className="text-white hover:text-purple-300 transition-colors"
                            >
                                {link.name}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default NavBarOptions;