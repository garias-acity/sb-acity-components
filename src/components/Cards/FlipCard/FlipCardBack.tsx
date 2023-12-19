import { cn } from "@/utils/classes";
import { ContentProps } from "./interface";
import style from './style.module.scss';

export const FlipCardBack = (props: ContentProps) => {
    const { children, className, isFlipped, ...rest } = props;
    return (
        <div
            className={cn(style.backContainer, className, isFlipped && style.backFlipped)}
            {...rest}
        >
            {children}
        </div>
    );
}