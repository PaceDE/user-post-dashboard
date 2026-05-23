import { Dispatch, SetStateAction } from "react";

export interface TopbarProps { 
    mobileOpen: boolean,
    desktopOpen: boolean, 
    setMobileOpen: Dispatch<SetStateAction<boolean>> 
}