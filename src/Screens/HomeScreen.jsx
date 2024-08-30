import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { obtenerUser } from '../Components/Fetching/fetch'
import './HomeScreen.css'
import { MdOutlineCastConnected } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { validarVista } from '.';
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
/* import video from '../../public/Assets/Video/video.mp4' */


const HomeScreen = () => {
    const [userInfo, setUserInfo] = useState()
    const [continuarViendoList, setContinuarViendoList] = useState()
    const [top10Series, setTop10Series] = useState()
    const [recomendacion, setRecomendacion] = useState()
    const [netflixOnly, setNetflixOnly] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {userId} = useParams()
    
    /* console.log(userId) */

    useEffect(
        () => {
            setTimeout(
                ()=>{
                    obtenerUser().then(
                        (usuario) =>{
                            const usuarios = usuario
                            setUserInfo(usuarios)
                            setContinuarViendoList(usuarios[userId - 1].continuar)
                            setTop10Series(usuarios[userId - 1].top_10_semanal)
                            setRecomendacion(usuarios[userId - 1].recomendacion)
                            setNetflixOnly(usuarios[userId - 1].netflix_only)
                            setIsLoading(false)
                        }
                    )
                },
                200
            )
        }, 
    [])

    
    console.log(recomendacion)
    /* console.log(userInfo) */
    /* console.log(continuarViendoList)
    console.log(top10Series) */

    return (
        <>
        {
        isLoading
        ?<div></div>
        :<>
            <header className='home-header'>
                <img src="https://seeklogo.com/images/N/netflix-logo-6A5D357DF8-seeklogo.com.png" alt="" className='netflix-icon-home'/>
                <nav className='home-header-nav'>
                    <MdOutlineCastConnected className='home-header-icons tv-icon' />
                    <FaMagnifyingGlass className='home-header-icons search-icon'/>
                    <Link to={'/'} className='user-select-link'>
                        <img src={userInfo && userInfo[userId - 1].img_perfil} alt="imagen-usuario" className='user-imagen' />
                    </Link>
                </nav>
            </header>
            <main className='home-main'>
                <section className='recomendacion-principal'>
                <img src="/Assets/Images/bckg img.webp" className='recomendacion-img' />
                <div className='recomendacion-box'>
                    <div className='title-box'>
                        <img src={recomendacion.name} className='reco-title'></img>
                    </div>
                    <div className='reco-specs-box'>
                        <div className='specs-top10'>
                            <img src={recomendacion.top10puesto} className='top10number'></img>
                            <span className='top10text'>Top 10 semanal</span>
                        </div>
                        <span className='reco-description'>{recomendacion.descripcion}</span>
                        <div className='button-box'>
                            <div className='replay-bttn'><FaPlay className='replay-icon'/>Reproducir</div>
                            <div className='more-info-bttn'><IoMdInformationCircleOutline className='info-icon'/>Mas Informacion</div>
                        </div>
                    </div>
                </div>
                </section>
                <section className='series-sliders'>
                    <h3 className='home-text-preset slider-title'>Continuar viendo</h3>
                    <nav className="series-nav">
                        {
                            continuarViendoList && continuarViendoList.map(item =>{
                                const {serie, capitulo, visto, serie_id, imagen} = item
                                return(
                                    <div className="serie-box" key={serie_id}>
                                        <img src={imagen} alt={serie} className='serie-img'/>
                                        <div className='view-bar' style={{display: validarVista(visto)}} >
                                            <div className='view-progress' style={{width: visto + '%'}}></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </nav>
                    <h3 className='home-text-preset slider-title'>Top 10 semanal</h3>
                    <nav className="series-nav">
                    {
                            top10Series && top10Series.map(item =>{
                                const {serie, capitulo, visto, serie_id, imagen} = item
                                return(
                                    <div className="serie-box" key={serie_id}>
                                        <img src={imagen} alt={serie} className='serie-img' />
                                        <div className='view-bar' style={{display: validarVista(visto)}} >
                                            <div className='view-progress' style={{width: visto + '%'}}></div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                    </nav>
                    <h3 className='home-text-preset slider-title'>Solo en netflix</h3>
                    <nav className="series-nav">
                    {
                            netflixOnly && netflixOnly.map(item =>{
                                const {serie, capitulo, visto, serie_id, imagen} = item
                                return(
                                    <div className="serie-box" key={serie_id}>
                                        <img src={imagen} alt={serie} className='serie-img' />
                                        <div className='view-bar' style={{display: validarVista(visto)}} >
                                            <div className='view-progress' style={{width: visto + '%'}}></div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                    </nav>
                </section>
            </main>
        </>
        }
        </>
    )
}

export default HomeScreen