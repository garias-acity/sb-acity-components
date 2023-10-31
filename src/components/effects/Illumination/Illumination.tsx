import { PropsWithChildren, FC } from "react";
import styles from "./illumination.module.scss";

export const Illumnation: FC = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className={styles.illumination_container}>
      <div className={styles.illumination_content}>{children}</div>
    </div>
  );
};
