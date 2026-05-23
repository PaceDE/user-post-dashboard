"use client"

import { navItems } from "@/shared/constants/nav";
import Text from "@/shared/components/ui/text";
import Link from "next/link";
import { FiSidebar, FiX } from "react-icons/fi";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "@/shared/constants/ui";
import { usePathname } from "next/navigation";
import { SidebarProps } from "./Sidebar.types";
import Button from "@/shared/components/ui/button";

const Sidebar = ({ desktopOpen, mobileOpen, setDesktopOpen, setMobileOpen }: SidebarProps) => {

    const pathname = usePathname();

    const desktopSidebarToggle = () => {
        setDesktopOpen(prev => {
            document.cookie = `sidebar-open=${!prev};path=/;max-age=${60 * 60 * 24 * 365}`;
            return !prev;
        });
    }

    return (
        <>
            <aside className={`fixed ${!mobileOpen ? "-translate-x-full" : ""} md:translate-x-0  h-screen z-50 bg-bg-inverse border-r-2 border-border-strong shadow-2xl text-fg-inverse duration-300`}>
                <div className={`${SIDEBAR_WIDTH.full} ${desktopOpen ? SIDEBAR_WIDTH.desktop.full : SIDEBAR_WIDTH.desktop.mini} flex flex-col gap-2 duration-300`}>

                    {/* Toggle Header */}
                    <div className={`${HEADER_HEIGHT} border-b-2 border-border-strong`}>

                        {/* Desktop and Tablet Toggle */}
                        <div onClick={desktopSidebarToggle} className={`p-1 hidden h-full md:flex md:items-center ${desktopOpen ? "md:justify-end" : "md:justify-center"}`}>
                            <Button>         
                                <FiSidebar size={24} aria-label={desktopOpen ? "Close Sidebar" : "Open Sidebar"}/>
                              </Button>      
                        </div>

                        {/* Mobile Sidebar-Close */}
                        <div onClick={() => setMobileOpen(false)} className={`p-1 h-full ${mobileOpen ? "flex justify-end items-center " : "hidden"} md:hidden cursor-pointer`}>
                           <Button>   
                                <FiX size={24} aria-label={mobileOpen ? "Close Sidebars" : ""}/>
                            </Button>
                        </div>

                    </div>

                    {/* Nav Items */}
                    <nav className='flex flex-col gap-2 p-4'>
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.to;
                            const Icon = item.icon;
                            return (
                                <Link key={index} href={item.to} onClick={() => setMobileOpen(false)}
                                    className={`flex items-center gap-2 p-2 rounded-lg
                                ${!desktopOpen ? "md:p-1 md:justify-center" : ""} 
                                ${isActive ? "bg-bg-primary text-fg-primary" : ""} `}
                                >
                                    <Icon size={20} aria-label={!desktopOpen ? item.label : ""} />

                                    <Text variant="body" customStyle={`${!desktopOpen ? "md:hidden" : ""} font-bold!`}>
                                        {item.label}
                                    </Text>

                                </Link>
                            )
                        })}
                    </nav>

                </div>
            </aside>

            {mobileOpen && (
                <div 
                onClick={() => setMobileOpen(false)} 
                className="fixed w-full h-full bg-white opacity-40 md:hidden"
                />
            )}
        </>
    )
}

export default Sidebar;