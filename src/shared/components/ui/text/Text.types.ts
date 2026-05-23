export type variant = 'heading' | 'title' | 'body' | "label" | "error"
 
export interface TextProps {
 variant?: variant, 
 customStyle?: string, 
 children: React.ReactNode 
 htmlFor?: string;
 component?: React.ElementType
}