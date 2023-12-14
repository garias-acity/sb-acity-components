import { Props } from './interface'
import style from './style.module.scss'

export const PromoCard = ({
    imagePath,
    title,
    description,
    vertical
}: Props) => {

    const backgroundCard = (() => {
        return imagePath ? {
            backgroundImage: `url(${imagePath})`
        } : {
            backgroundColor: '#ccc'
        }
    })()
    
    return (
        <>
            <a href="#">
                <div className={style.cardItem}
                    style={ backgroundCard }
                >
                    <div className={style.cardItem__content}>
                        <p className={style.cardItem__title}><strong>{ title }</strong></p>
                        <p className={style.cardItem__description}>{ description }</p>
                    </div>
                    {
                        vertical && (
                            <div className={style.cardItem__label}>
                                <p>{ vertical }</p>
                            </div>
                        )
                    }
                </div>
            </a>
        </>
    )
}