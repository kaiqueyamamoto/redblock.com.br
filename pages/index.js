import React from 'react'
import HeaderLinks  from '../components/Header'
import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.css'


export default function Home() {
  return (
    <>
      <HeaderLinks title="Redblock Solution - Muito mais que uma agëncia de marketing digital"/>
      <NavBar />
      <div className='container'>
        <div className='row'>
          <div className="col-md-12">
            <div className="col-md-6">
                <h1>
                  Hey! agora a redblock se tornou a conecta-tech com mais opções e soluções de mercado.
                </h1>
                <br />
                <p>
                  Melhoramos de uma agência full-service para um grupo onde pensamos em trazer mais resultados para a sua empresa e marca, nossas soluções abrangem: Marketing Digital, Desenvolvimento de Software, Aplicativos para Android e iOS, E-Commerces e Robôs Para Mercado Financeiro.
                </p>
            </div>
            <div className="col-md-6">
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
