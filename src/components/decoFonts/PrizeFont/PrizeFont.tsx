import { PropsWithChildren, memo } from "react";
import styles from "./prizeFont.module.scss";

export enum Coin {
  USD = "USD",
  PEN = "PEN",
}

export interface PrizeFontProps {
  amount: string;
  coin?: Coin;
}

const coins = {
  USD: "$",
  PEN: "S/",
};

export const PrizeFont = memo((props: PropsWithChildren<PrizeFontProps>) => {
  const { amount, coin } = props;

  const text = `${(coin && coins[coin]) ?? coins.PEN}${amount}`;

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
