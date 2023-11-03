import { Theme } from "@/interfaces";
import clsx from "clsx";
import { FC, useState, useCallback } from "react";

import styles from "./defaultLink.module.scss";

interface CustomProps {
  label: string;
  theme: Theme;
  visited?: boolean;
  disabled?: boolean;
}
export type DefaultLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  CustomProps;

export const DefaultLink: FC<DefaultLinkProps> = ({
  className,
  label,
  theme,
  onClick,
  visited: defaultVisited = false,
  disabled = false,
  ...rest
}) => {
  const [visited, setVisited] = useState(defaultVisited);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) return;
      setVisited(true);
      onClick && onClick(e);
    },
    [setVisited]
  );

  return (
    <a
      {...rest}
      onClick={handleClick}
      className={clsx(
        className,
        styles.defaultLink,
        styles[`defaultLink-${theme}`],
        visited && styles[`defaultLink-visited`]
      )}
    >
      {label}
    </a>
  );
};
