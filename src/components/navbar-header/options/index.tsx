'use client';

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from '@/components/ui/navigation-menu';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navLinks from '@/data/navbar/index';


function NavBarOptions() {

    const pathname = usePathname();
    const visibleLinks = navLinks.slice(0, 3);
    const hiddenLinks = navLinks.slice(3);

    return (
        <NavigationMenu
            className='
                fixed 
                sm:static
                bottom-[22px]
                sm:[bottom:unset]
            '
        >
            <NavigationMenuList
                className='
                    bg-[#220D52]/40
                    backdrop-blur-md
                    border border-white/20
                    shadow-lg
                    px-[15px] py-[10px]
                    rounded-md
                '
            >
                {visibleLinks.map((link) => {
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
                                        ${isActive
                                            ? 'bg-[#7E57C2]/60 text-white'
                                            : 'bg-[#220D52]/40 text-white hover:bg-[#7E57C2]/40'
                                        }
                                    `}
                                >
                                    {link.name}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    );
                })}

                {hiddenLinks.length > 0 && (
                    <NavigationMenuItem className="sm:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="p-2 rounded-md text-white hover:bg-[#7E57C2]">
                                <MoreVertical className="w-5 h-5" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#220D52] text-white">
                                {hiddenLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <DropdownMenuItem key={link.name} asChild>
                                            <Link
                                                href={link.href}
                                                className={`
                                                    block px-4 py-2 rounded-md
                                                    ${isActive ? 'bg-[#7E57C2]' : 'hover:bg-[#7E57C2]'}
                                                `}
                                            >
                                                {link.name}
                                            </Link>
                                        </DropdownMenuItem>
                                    );
                                })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </NavigationMenuItem>
                )}

                {hiddenLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <NavigationMenuItem key={link.name} className="hidden sm:block">
                            <NavigationMenuLink asChild>
                                <Link
                                    href={link.href}
                                    className={`
                                        px-4 
                                        py-2 
                                        rounded-md 
                                        transition-colors
                                        ${isActive
                                            ? 'bg-[#7E57C2]/60 text-white'
                                            : 'bg-[#220D52]/40 text-white hover:bg-[#7E57C2]/40'
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