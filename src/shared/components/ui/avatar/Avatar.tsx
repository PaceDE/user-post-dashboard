import { ProfileProps } from './Avatar.types';
import Text from '../text';
import { twMerge } from 'tailwind-merge';
import { getInitials } from '@/shared/utils/string';
import { colorPalette } from '@/shared/constants/colors';

const Avatar = ({ name, customStyle, textStyle }: ProfileProps) => {
    const initials = getInitials(name);
    const backgroundColor = colorPalette[name.length % colorPalette.length]

    const defaultStyle = 'w-15 h-15 flex justify-center items-center rounded-full';

    const style = twMerge(defaultStyle, customStyle);

    return (
        <div style={{ backgroundColor }} className={style}>
            <Text variant="title" customStyle={textStyle ?? 'text-[18px]'}>
                {initials}
            </Text>
        </div>
    );
};

export default Avatar;