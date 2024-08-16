import React, { useEffect, useState } from 'react'
import { obtenerUser } from '../Components/Fetching/fetch'
import { FaRegWindowMinimize } from "react-icons/fa";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { TiPencil } from "react-icons/ti";
import './UserScreen.css'
import { Link } from 'react-router-dom';


const UserScreen = () => {
    const [userInfo, setUserInfo] = useState()

    useEffect(
        () => {
            obtenerUser().then((usuario) =>{
                const usuarios = usuario
                setUserInfo(usuarios)
            })
        }, 
    [])

    /* console.log(userInfo) */

    return (
        <>
        <header className='user-screen-header'>
            <h2 className='netflix-name-small'>NETFLIX</h2>
            <TiPencil className='edit-profile'/>
            <nav className='screen-icons'>
                <FaRegWindowMinimize />
                <HiOutlineSquare2Stack />
                <IoMdClose />
            </nav>
        </header>
        <main className='user-screen-main'>
            <h3 className='welcome-text'>¿Quien esta viendo ahora?</h3>
            <nav className='nav-usuarios'>
                {
                    userInfo && userInfo.map(user =>{
                        const {usuario, img_perfil, user_id} = user
                        console.log(usuario)
                        return(
                            <Link to={'/HomeScreen/' + user_id} className='link' key={user_id}>
                                <div className='box-usuario' >
                                    <img src={img_perfil} alt={usuario} className='img_usuario' />
                                    <span className='user-name'>{usuario}</span>
                                </div>
                            </Link>
                        )})
                }
            </nav>
        </main>
        </>
    )
}

export default UserScreen