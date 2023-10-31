import { PropsWithChildren, FC, memo, useRef, useEffect } from "react";
import styles from "./illumination.module.scss";

interface Props {
  width?: string;
}

export const Component: FC<PropsWithChildren<Props>> = (props) => {
  const { children, width = "100%" } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.style.setProperty("--illumination-width", width);
  }, [width]);

  return (
    <div className={styles.illumination_container} ref={containerRef}>
      <div className={styles.illumination_content}>{children}</div>
    </div>
  );
};

export const Illumination = memo(Component);
