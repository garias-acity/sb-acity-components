import { ReactElement } from 'react';

export type ContentProps = React.HTMLProps<HTMLDivElement> & {
    isFlipped: boolean;
};

export interface BaseProps {
    children?: ReactElement | ReactElement[] 
}

export interface FlipCardContextProps {
    isFlipped: boolean,
    handleFlipped: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface FlipCardHOCProps {
    ({ children }: BaseProps ):JSX.Element,
    Front: ({ className, isFlipped }: { isFlipped?: boolean, className: string }) => JSX.Element,
    Back: ({ className, isFlipped }: { isFlipped?: boolean, className: string }) => JSX.Element,
}

