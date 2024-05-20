import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

export default function Header() {
    const { user } = useContext(Context)
    const [userName, setUserName] = useState(" ")

    useEffect(()=>{
        const getUserName = ()=>{
            const Name = user?.nome.split(" ")[0]
            setUserName(Name)
        }
        getUserName()
    }, [user?.nome])

  return (
    <header>
        <div className="container">
            <div className="cabecalho-superior">
                <div className="esquerda"></div>
                <div className="centro">
                    <a href="index.html">
                        <img src="./logo.png" alt="Logo Repositório Educa Guiné" />
                    </a>
                    <h1>Repositório Educa Guiné</h1>
                </div>
                <div className="direita">
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </div>
            <nav className='navStyle'>
                <ul className='UlStyle'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/categorias">Categorias</Link></li>
                    <li><Link to="/recursos">Recursos</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    {user?.adm && (<li><Link to="/educaadmguine">Cadastrar</Link></li>)}
                    {user && (<li className='userNameStyle'><Link to="/user">{userName}</Link></li>)}
                </ul>
            </nav>
        </div>
    </header>
  )
}
