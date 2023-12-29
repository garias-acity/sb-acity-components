import { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import './button.scss';
import { IButtonVariant } from '@/interfaces';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string,
    variant?: IButtonVariant;
    icon?: {
        component: ReactNode,
        position: 'left' | 'right'
    },
    isLoading?: boolean;
    aditionalClasses?: string;
    onClick?: () => void;
}

// Componente de botón
export const Button: FC<ButtonProps> = ({
    label,
    variant = 'default',
    icon = null,
    isLoading = false,
    aditionalClasses,
    ...rest
}) => {
    const buttonClasses = `gap-2 sb-btn sb-btn--${variant} ${aditionalClasses} ${isLoading ? 'sb-btn--loading' : ''}`;

    return (
        <button className={buttonClasses} {...rest} disabled={isLoading || rest.disabled}>
            {
                icon && icon?.position === 'left' && <span className='flex items-center justify-center'>{icon.component}</span>
            }
            <span>
                {
                    label
                }
            </span>
            {
                icon && icon?.position === 'right' && <span>{icon.component}</span>
            }
        </button>
    );
}