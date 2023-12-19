import { Button } from '@/components/Buttons/Button'
import style from './style.module.scss'
import { GameCard } from '@/components/Cards/GameCard'

export const ContainerSection = () => {
    return (
        <div className={style.container}>
            <div className={style.container__header}>
                <div className={style['container__header--left']}>
                    <img src="https://www.casinoatlanticcity.com/static/img/casino-online-menu/title/maquinas.svg" alt="Lobby" />
                    <h2 className={style.container__title}>Tus promociones</h2>
                </div>
                <div className={style['container__header--right']}>
                    <Button variant='secondary'>VER MÁS</Button>
                </div>
            </div>
            <div className={style.container__body}>
                <GameCard isFavorite isLogged imagePath='https://www.casinoatlanticcity.com/cms/img/logos/pragmatic/4005966/atlanticmoneymouse3_02.webp' />
                <GameCard isFavorite isLogged imagePath='https://www.casinoatlanticcity.com/cms/img/logos/pragmatic/4005966/atlanticmoneymouse3_02.webp' />
                <GameCard isFavorite isLogged imagePath='https://www.casinoatlanticcity.com/cms/img/logos/pragmatic/4005966/atlanticmoneymouse3_02.webp' />
                <GameCard isFavorite isLogged imagePath='https://www.casinoatlanticcity.com/cms/img/logos/pragmatic/4005966/atlanticmoneymouse3_02.webp' />
            </div>
        </div>
    )
}