export type ButtonVariant = "outlined" | "filled"
export type ButtonSize = "sm" | "md" | "lg"

export type ButtonProps = {
    variant?: ButtonVariant
    size?: ButtonSize
    children: React.ReactNode
    customStyle?: string
    onClick?: () => void
    disabled?: boolean
    type?: "button" | "submit"
    icon?: React.ReactNode
    iconPosition?: "left" | "right"
}