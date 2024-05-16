import React from "react"
import Header from "../../components/Header/Index"
import Footer from "../../components/Footer"
import styles from "./home.module.css"
import modelo from "./img/modelo.jpg"


function Home(){
    return (
        <div>
        <Header />
    <div>
        <div>
            <img src={modelo} className={styles["modelo"]} alt="" />
        </div>
        <div>
            <h3>Sua Empresa Pede</h3>
            <p>Bem-vindo ao Mesa Solidária! Somos uma plataforma dedicada a reduzir o desperdício de alimentos e combater a fome, conectando supermercados com produtos próximos à data de vencimento a pessoas em situação de vulnerabilidade social.</p>
        </div>
        <div>
            <form action="">
                <input type="name" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <input type="number" placeholder="Numero de Telefone"/>
                <button type="submit">Iniciar Cadastro</button>
            </form>
            </div>
        </div>
        
        <Footer />
        </div>
      
    )
}

export default Home