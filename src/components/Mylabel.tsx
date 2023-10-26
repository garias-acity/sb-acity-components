import './Mylabel.css'

interface Props {
    /**
     * Text to display
     */
    label: string;
    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
}

/**
 * AllCaps boolean
 * color: text-primary... 
 * font-color?: string
 */

export const Mylabel = ({ label, size = 'normal', allCaps = false, color = 'primary', fontColor= '#000' }: Props) => {
  return (
    <div className={ `${size} text-${color} label` } style={{ color: fontColor }}>
        {
            allCaps ? label.toLocaleUpperCase() : label
        }
    </div>
  )
}