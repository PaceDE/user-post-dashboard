import { ButtonProps, ButtonSize, ButtonVariant } from "./Button.types"
import { twMerge } from "tailwind-merge"

const variantMap: Record<ButtonVariant, string> = {
    filled: "bg-bg-inverse text-fg-inverse hover:bg-bg-primary hover:text-fg-primary disabled:bg-bg-primary disabled:text-fg-primary",
    outlined: "bg-transparent text-fg-primary hover:bg-bg-inverse hover:text-fg-inverse disabled:bg-bg-inverse disabled:text-fg-inverse"
}

const sizeMap: Record<ButtonSize, string> = {
    sm: "text-[0.875rem] px-3 py-1.5 rounded-md",
    md: "text-[1rem] px-4 py-2 rounded-lg",
    lg: "text-[1.125rem] px-6 py-3 rounded-xl",
}

const Button = ({ children, variant = "filled", size = "md", customStyle = "", onClick, disabled = false, type = "button" }: ButtonProps) => {

    const defaultStyle = `${variantMap[variant]} ${sizeMap[size]} flex items-center justify-center border border-bg-primary font-semibold transition-all duration-200 cursor-pointer disabled:cursor-not-allowed`
    const style = twMerge(defaultStyle, customStyle);

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={style}>
            {children}
        </button>
    )
}

export default Button