"use client"
import Text from '@/shared/components/ui/text';
import { HEADER_HEIGHT, SIDEBAR_OFFSET_INVERSE } from '@/shared/constants/ui';
import { MdOutlineMenuOpen } from "react-icons/md";
import { TopbarProps } from './Topbar.types';
import Button from "@/shared/components/ui/button";
import { usePathname } from 'next/navigation';
import Input from '../../ui/Input';
import { useUserStore } from '@/features/user/store/user.store';
import { FiSearch } from 'react-icons/fi';

const Topbar = ({ mobileOpen, desktopOpen, setMobileOpen, }: TopbarProps) => {
  const pathname = usePathname();
  const isUserPage = pathname === "/users";
  const { search, setSearch } = useUserStore();

  return (
    <header className={`fixed w-full flex items-center gap-2 justify-between ${HEADER_HEIGHT} p-4 border-b-2 border-border-strong bg-bg-inverse text-fg-inverse`}>
      <div className='flex gap-2 items-center'>

        <Button onClick={() => setMobileOpen(true)} customStyle='md:hidden'>
          <MdOutlineMenuOpen size={24} aria-label={!mobileOpen ? "OpenSidebar" : ""} className='group-hover:text-fg-primary' />
        </Button>
        <Text variant="heading" customStyle='text-[16px] lg:text-[18px]'> User Post Dashboard</Text>
      </div>
      {isUserPage && (
        <div className={`relative flex items-center ${desktopOpen ? SIDEBAR_OFFSET_INVERSE.full : SIDEBAR_OFFSET_INVERSE.mini}`}>

          <div className="absolute left-0 h-full flex items-center px-3 border-r-2 border-fg-muted">
            <FiSearch className="text-fg-muted" />
          </div>

          <Input
            className="pl-12 pr-3 w-full"
            type="text"
            placeholder="Search By Name or Email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}



    </header>
  )
}

export default Topbar
