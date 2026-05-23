import React from 'react'
import { TextProps, variant } from './Text.types';
import { twMerge } from 'tailwind-merge';

const styleMap: Record<variant, string> = {
    heading: "text-[2rem] font-bold",
    title: "text-[1.25rem] font-semibold",
    body: "text-[1rem] font-medium",
    label: "text-sm font-medium text-secondary",
    error: "text-xs text-red-500"
}

const Text = ({ variant = "body", children, customStyle = "", component, htmlFor }: TextProps) => {

    const defaultStyle = `${styleMap[variant]} font-manrope`;
    const style = twMerge(defaultStyle, customStyle);

    const defaultTag = variant === "heading" ? "h1" : variant === "title" ? "h3" : variant === "label" ? "label" : "p"
    const Component: React.ElementType = component || defaultTag;
    const labelProps = variant === "label" && htmlFor ? { htmlFor } : {};

    return (
        <Component {...labelProps} className={style}>
            {children}
        </Component>
    )
}

export default Text