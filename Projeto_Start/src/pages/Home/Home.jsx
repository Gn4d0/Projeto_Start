import './home.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header/header'

import mulherIdosa from '/src/assets/images/mulherIdosa.png';

function Home() {
  

  return (
    <>
      <Header/>
      <section className = 'banner'>
        <div>
          <h1>Onde a economia encontra qualidade!</h1>
          <span>Acessível para todos, graças à nossa parceria com supermercados locais</span>
        </div>
        
        <img src={mulherIdosa} alt="imagem de home" className='mulherIdosa'/>
        
        <div>
          <button calssName = 'promocao' >Promoções</button>
        </div>

      </section>

      <section className = 'parceiros'>
          
          <h2>Paceiros</h2>
          <span>Atacadão</span>
          <span>Mix Mateus</span>
          <span>Novo Atacarejo</span>
        
        <div>
          <button className  = 'mais'>Mais</button>
        </div>  
      
      </section>
        
      <Footer />

    </>
  )
}

export default Home
