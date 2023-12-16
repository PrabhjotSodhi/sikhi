"use client";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/'
        },
        {
        icon: BiSearch,
        label: 'Search',
        href: '/search',
        active: pathname === '/search'
        },
    ], [pathname]);

    return (
        <div>
            [children]
        </div>
    )
} 

export default Sidebar;