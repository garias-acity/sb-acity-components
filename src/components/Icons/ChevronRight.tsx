import { type IconProps } from "./interface";

export const IconChevronRight = ({ color = '#000', width = 24, height = 24, fill = 'none' }: IconProps) => {
    return (
        <svg width={width} height={height} fill={ fill } stroke={color} strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>
    )
}