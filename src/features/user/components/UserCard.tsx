import { UserCardData } from '../types';
import Avatar from '@/shared/components/ui/avatar';
import Text from '@/shared/components/ui/text';
import Divider from '@/shared/components/ui/divider';
import { FaBuilding } from 'react-icons/fa6';
import Link from 'next/link';
import Button from '@/shared/components/ui/button';

const UserCard = ({ userData, postPage=false }: {userData:UserCardData, postPage?:boolean}) => {


    const { id, name, email, company } = userData;
    const href = postPage ? "/users" : `/users/${id}`

    return (
        <div className='max-w-250 flex flex-col gap-3 bg-bg-base w-full px-4 py-3 rounded-xl border border-border-default'>

            {/* Header */}
            <div className='flex gap-2 items-center'>
                <Avatar name={name} />

                <div className='border-red flex flex-col justify-center'>
                    <Text customStyle='text-[clamp(18px,2vw,20px)] text-fg-secondary'>
                        {name}
                    </Text>

                    <Text customStyle='text-[clamp(14px,2vw,16px)] text-fg-muted'>
                        {email}
                    </Text>
                </div>
            </div>

            <Divider customStyle='relative bottom-2' size='sm' />

            {/* Body */}
            <div className='flex gap-2 items-center'>
                <FaBuilding className='text-fg-muted' />

                <Text customStyle='text-[16px] text-fg-secondary'>
                    Works In : {company}
                </Text>
            </div>

            {/* Footer */}
            <Link href={href}>
                <Button>{postPage ? "Go Back" : "View Post"}</Button>
            </Link>
        </div>
    );
};

export default UserCard;