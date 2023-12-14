import { Button } from '@/components/Buttons/Button'
import style from './style.module.scss'
import { Props } from './interface'
import { HeartIcon } from '@/components/Icons'

export const GameCard = ({ imagePath, isLogged, isFavorite }: Props) => {
    return (
        <>
            <div className={style.gameCard}>
                <div className={style.gameCard__content}>
                    <Button classNames={style['gameCard__content--button']} variant='primary'>JUGAR</Button>
                </div>
                {
                    isLogged && (
                        <div className={style.gameCard__favorite}>
                            <button type='button'>
                                <HeartIcon 
                                    fill={ !isFavorite ? 'none' : '#f00' }
                                    color={ !isFavorite ? '#000' : '#f00' }
                                /> 
                            </button>
                        </div>
                    )
                }
                <img loading="lazy" src={imagePath} alt="Game image" />
            </div>
        </>
    )
}