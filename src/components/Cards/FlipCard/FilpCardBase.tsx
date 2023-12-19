import styles from './style.module.scss';
import { createContext } from 'react';
import { useFlipCard } from './hook/useFlipCard';
import { FlipCardContextProps } from './interface';

type Props = React.HTMLProps<HTMLDivElement>;

export const FlipCardContext = createContext({} as FlipCardContextProps);
const { Provider } = FlipCardContext;

export const FlipCardBase = (props: Props) => {
    const { isFlipped, handleFlipped } = useFlipCard()
    const { children, className, ...rest } = props;

    return (
        <Provider
            value={{ isFlipped, handleFlipped }}
        >
             <div className={`${styles.wrapper} ${className}`} {...rest}>
                {children}
            </div>
        </Provider>
    );
}