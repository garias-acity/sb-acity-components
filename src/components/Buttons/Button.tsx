import { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import './button.scss';
import { IButtonVariant } from '@/interfaces';

// Definir las propiedades del botón
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: IButtonVariant;
    icon?: ReactNode,
    isLoading?: boolean;
    onClick?: () => void;
}

// Componente de botón
export const Button: FC<ButtonProps> = ({
    variant = 'default',
    icon,
    isLoading = false,
    children,
    ...rest
}) => {
    const buttonClasses = `sb-btn sb-btn--${variant} ${isLoading ? 'sb-btn--loading' : ''}`;

    return (
        <button className={buttonClasses} {...rest} disabled={isLoading || rest.disabled}>
            {
                icon && <span>{icon}</span>
            }
            {
                children
            }
        </button>
    );
}