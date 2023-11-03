import { Theme } from "@/interfaces";
import clsx from "clsx";
import { FC } from "react";

import styles from "./defaultLink.module.scss";

interface CustomProps {
  label: string;
  theme: Theme;
}
export type DefaultLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  CustomProps;

export const DefaultLink: FC<DefaultLinkProps> = ({
  className,
  label,
  theme,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className={clsx(
        className,
        styles.defaultLink,
        styles[`defaultLink-${theme}`]
      )}
    >
      {label}
    </a>
  );
};
