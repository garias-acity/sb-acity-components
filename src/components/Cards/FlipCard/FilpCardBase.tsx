import { cn } from '@/utils/classes';
import styles from './flip.module.scss';

type Props = React.HTMLProps<HTMLDivElement>;

const FlipCard = (props: Props) => {
    const { children, className, ...rest } = props;

    return (
        <div className={`${styles.wrapper} ${className}`} {...rest}>
            {children}
        </div>
    );
}

export type ContentProps = React.HTMLProps<HTMLDivElement> & {
    isFlipped: boolean;
};

FlipCard.Front = function FrontContent(props: ContentProps) {
    const { children, className, isFlipped, ...rest } = props;

    return (
        <div
            className={cn(styles.frontContainer, className, isFlipped && styles.frontFlipped)}
            {...rest}
        >
            {children}
        </div>
    );
};

FlipCard.Back = function BackContent(props: ContentProps) {
    const { children, className, isFlipped, ...rest } = props;

    return (
        <div
            className={cn(styles.backContainer, className, isFlipped && styles.backFlipped)}
            {...rest}
        >
            {children}
        </div>
    );
};

export default FlipCard;