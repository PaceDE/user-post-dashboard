"use client";

"use client";
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../topbar/Topbar'
import { DashboadLayoutProps } from './DashboardLayout.types'
import { HEADER_OFFSET, SIDEBAR_OFFSET } from '@/shared/constants/ui';

const DashboardLayout = ({ children, sidebarOpen }: DashboadLayoutProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [desktopOpen, setDesktopOpen] = useState(sidebarOpen)

    return (
        <div className="flex h-full">
            <Sidebar desktopOpen={desktopOpen} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} setDesktopOpen={setDesktopOpen} />
            <div className={`${desktopOpen ? SIDEBAR_OFFSET.full : SIDEBAR_OFFSET.mini} flex flex-col flex-1 duration-300`}>
                <Topbar mobileOpen={mobileOpen} desktopOpen={desktopOpen} setMobileOpen={setMobileOpen} />
                <div className={`${HEADER_OFFSET} p-4 flex-1`}>
                    <div className='bg-bg-base/35 rounded-2xl h-full p-5'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
