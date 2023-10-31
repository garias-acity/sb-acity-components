import { PropsWithChildren, memo, useMemo } from "react";
import styles from "./prizeFont.module.scss";

export interface PrizeFontProps {
  amount: string;
  coin: "USD" | "PEN";
}

const coins = {
  USD: "$",
  PEN: "S/",
};

export const PrizeFont = memo((props: PropsWithChildren<PrizeFontProps>) => {
  const { amount, coin } = props;

  const text = useMemo(
    () => `${coins[coin] ?? coins.PEN}${amount}`,
    [amount, coin]
  );

  return (
    <>
      <div className={styles.decorators}>
        <h3 className={styles.content}>
          <span className={styles.content} data-text={text}>
            {text}
          </span>
          <span className={styles.shadows} data-text={text}>
            {text}
          </span>
        </h3>
      </div>
    </>
  );
});
