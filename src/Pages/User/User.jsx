import React, { useContext } from 'react'
import './User.css'
import Header from '../../Components/Header/Header'
import { Context } from '../../Context/Context'

export default function User() {
    const { user, dispatch } = useContext(Context)

    const hendSair = ()=>{
        dispatch({type: "LOGOUT"})
        window.location.replace("/")
    }

  return (
<div className='body'>
  <Header />

  <main>
    <div className="container">
      <div className="perfil-container">
        <aside className="barra-lateral">
          <div className="menu-lateral">
            <h2>Menu</h2>
            <ul>
              {/* <li><a href="#"><i className="fas fa-user-edit"></i> Editar Perfil</a></li> */}
              {/* <li><a href="#"><i className="fas fa-file-alt"></i> Meus Recursos</a></li>
              <li><a href="#"><i className="fas fa-graduation-cap"></i> Trabalhos Acadêmicos</a></li>
              <li><a href="#"><i className="fas fa-heart"></i> Favoritos</a></li>
              <li><a href="#"><i className="fas fa-cog"></i> Configurações</a></li>
              <li><a href="#"><i className="fas fa-question-circle"></i> Ajuda</a></li> */}
              <li className='sairButtonStyle' onClick={hendSair}><i className="fas fa-sign-out-alt"></i> Sair</li>
            </ul>
          </div>
        </aside>

        <section className="conteudo-principal">
          <div className="perfil">
            <div className="foto-perfil">
              {/* <img src="foto-perfil.jpg" alt="Foto do Perfil" className="foto-perfil-img" /> */}
              <h2 className="nome-usuario">[{user.nome}]</h2>
              <p className="tipo-conta">Tipo de Conta: {user.adm ? "Administrador" : "Usuário"}</p>
            </div>

            <div className="informacoes">
              <h3>Informações</h3>
              <ul>
                <li><strong>Email:</strong> {user.email}</li>
                {/* <li><strong>Instituição/Afiliação:</strong> [Nome da Instituição]</li> */}
                {/* <li><strong>Biografia:</strong> [Descrição do usuário]</li> */}
                <li><strong>Telefone:</strong> {user.tel}</li>
                <li><strong>Desde:</strong> {new Date(user.createdAt).toISOString().slice(0,10)}</li>
                <li><strong>Ultima Alteração:</strong> {new Date(user.updatedAt).toISOString().slice(0,10)}</li>
              </ul>
            </div>
          </div>

          {/* <div className="atividades-recentes">
            <h3>Atividades Recentes</h3>
            <ul>
              <li>Participação em: [Nome do Evento]</li>
              <li>Favoritou: [Recurso/Trabalho Acadêmico]</li>
              <li>Avaliou: [Evento/Recurso/Trabalho Acadêmico]</li>
              <li>Comentou em: [Evento/Recurso/Trabalho Acadêmico]</li>
            </ul>
          </div> */}
        </section>
      </div>
    </div>
  </main>

  <footer>
   <div className="container">
      <p>&copy; 2024 Repositório Educa Guiné</p>
    </div>
  </footer>
</div>
  )
}
