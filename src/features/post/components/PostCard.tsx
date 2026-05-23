import Text from '@/shared/components/ui/text';
import { PostCardData } from '../types';

const PostCard = ({ postData, number }: { number:number,postData: PostCardData }) => {

    const { body, title } = postData;

    return (
        <div className='flex flex-col items-start gap-3 bg-bg-base w-full px-4 py-3 rounded-xl border border-border-default'>
            <Text component="span" customStyle="px-5 py-0.5 rounded-xl bg-bg-inverse text-fg-inverse font-10px]">Post {number}</Text>
            <div className='flex w-full flex-col gap-2 bg-bg-base px-4 py-3 rounded-xl border border-border-default'>
                <div className='flex flex-col justify-center'>
                    <Text customStyle='text-[clamp(16px,2vw,18px)] text-fg-secondary'>
                        {title.charAt(0).toUpperCase() + title.slice(1)}
                    </Text>
                    <Text customStyle='text-[clamp(12px,2vw,14px)] text-fg-muted'>
                        {body.charAt(0).toUpperCase() +  body.slice(1)}
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default PostCard;