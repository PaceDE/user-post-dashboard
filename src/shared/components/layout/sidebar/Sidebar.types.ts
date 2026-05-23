import { Dispatch, SetStateAction } from "react";

export interface SidebarProps { 
    desktopOpen: boolean, 
    mobileOpen: boolean, 
    setMobileOpen: Dispatch<SetStateAction<boolean>> 
    setDesktopOpen: Dispatch<SetStateAction<boolean>> 
}

