import { cn } from "@/utils/classes";
import { ContentProps } from "./interface";
import style from './style.module.scss';
import { useContext } from "react";

export const FlipCardFront = (props: ContentProps) => {
    const { children, className, isFlipped, ...rest } = props;
    return (
        <div
            className={cn(style.frontContainer, className, isFlipped && style.frontFlipped)}
            {...rest}
        >
            {children}
        </div>
    );
}