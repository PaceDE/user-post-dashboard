import React from 'react';
import { twMerge } from 'tailwind-merge';
import { DividerProps, SizeVariant } from "./Divider.types"

const sizeClasses: Record<SizeVariant, string> = {
    sm: 'h-px',
    md: 'h-0.5',
    lg: 'h-1',
};

const Divider = ({ size = 'md', customStyle }: DividerProps) => {
    const defaultStyle = `bg-border-default rounded-4xl my-2 ${sizeClasses[size]}`;

    const style = twMerge(defaultStyle, customStyle);

    return <div className={style}/>

}

export default Divider;