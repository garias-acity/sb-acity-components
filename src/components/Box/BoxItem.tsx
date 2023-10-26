import { FC } from "react";
import style from "./box.module.scss";

interface Item {
  id: number;
  text: string; 
  backgroundColor: 'suenos' | 'vip-royal' | 'sorteo-estelar' | 'mega-torneo' | 'top-atlantic';
}

export const BoxItem: FC<Item> = ({ id, text, backgroundColor }) => {
  
  const bgColor = `${style[`box__item-${backgroundColor}`]}`
  
  return (
    <div
      className={`${bgColor} promos-v3-flex promos-v3-rounded-2xl promos-v3-w-full sm:promos-v3-w-[348px] promos-v3-justify-between promos-v3-items-center promos-v3-min-h-[88px] promos-v3-py-4`}
    >
      <div className="promos-v3-min-w-[71px]">
        <p
          className={`${style["box__item-number"]} promos-v3-text-center promos-v3-pt-2 promos-v3-font-bold`}
        >
          {id}
        </p>
      </div>
      <div className="promos-v3-relative promos-v3-h-full">
        <div className={`${style["box__item-gradient"]} promos-v3-min-h-[75px]`}></div>
      </div>
      <p
        className={`${style["box__item-description"]} promos-v3-text-left promos-v3-text-white promos-v3-py-2 promos-v3-pl-4 promos-v3-pr-4 promos-v3-text-base sm:promos-v3-text-lg !promos-v3-leading-6`}
      >
        {text}
      </p>
    </div>
  );
};