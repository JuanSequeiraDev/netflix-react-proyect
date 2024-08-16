import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerUser } from '../Components/Fetching/fetch'

const HomeScreen = () => {
    const [userInfo, setUserInfo] = useState()
    const [continuarViendoList, setContinuarViendoList] = useState()
    const [top10Series, setTop10Series] = useState()
    const {userId} = useParams()
    /* console.log(userId) */

    useEffect(
        () => {
            obtenerUser().then((usuario) =>{
                const usuarios = usuario
                setUserInfo(usuarios)
                setContinuarViendoList(usuarios[userId].continuar)
                setTop10Series(usuarios[userId].top_10_semanal)
            })
        }, 
    [])

    console.log(continuarViendoList)
    console.log(top10Series)

    return (
        <div>HomeScreen</div>
    )
}

export default HomeScreen