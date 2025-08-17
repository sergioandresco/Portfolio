'use client';

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import navLinks from '@/data/navbar';


function NavBarOptions() {

    const pathname = usePathname();

    return (
        <NavigationMenu>
            <NavigationMenuList
                className='
                    bg-[#220D52]
                    px-[15px]
                    py-[10px]
                    rounded-lg
                '
            >
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <NavigationMenuItem key={link.name}>
                            <NavigationMenuLink asChild>
                                <Link
                                    href={link.href}
                                    className={`
                                        px-4 
                                        py-2 
                                        rounded-md 
                                        transition-colors 
                                        ${
                                            isActive
                                                ? 'bg-[#7E57C2] text-white'
                                                : 'text-white hover:bg-[#7E57C2]'
                                        }
                                    `}
                                >
                                    {link.name}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default NavBarOptions;