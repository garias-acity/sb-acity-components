import style from './style.module.scss'
import '@/index.css'
export const MaintenancePage = () => {
    return (
        <div className={style['maintenance']}>
            <div className={style['maintenance_imageContent']}>
                <img src="https://www.casinoatlanticcity.com/static/img/error_404_v2.gif" alt="AC" />
            </div>
            <div className={style['maintenance_content']}>
                <div className="flex flex-col bg-gray-50">hola</div>
                <h2 className={style['maintenance_content-title']}>Página en mantenimiento</h2>
                <p className={style['maintenance_content-description']}>Lo sentimos, no encontramos la página que buscas. Prueba suerte en nuestros juegos o haz una apuesta deportiva.</p>
            </div>
        </div>
    )
}