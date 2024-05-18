import "./home.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

import mulherIdosa from "/src/assets/images/mulherIdosa.png";
import estrela from "/src/assets/images/estrela.svg";
import sardinha from "/src/assets/images/sardinha.png";

function Home() {
  return (
    <>
      <Header />
      <section className="banner">
        <div>
          <h1>Onde a economia encontra qualidade!</h1>
          <span>
            Acessível para todos, graças à nossa parceria com supermercados
            locais
          </span>
        </div>

        <img src={mulherIdosa} alt="imagem de home" className="mulherIdosa" />
        <div>
          <svg width="300" height="200">
            <circle cx="150" cy="100" r="90" fill="blue" />
          </svg>
        </div>

        <div>
          <button calssName="promocao">Promoções</button>
        </div>
      </section>

      <section className="parceiros">
        <div>
          <h2>Paceiros</h2>
          <span>Supermercado Estrela</span>
          <img src={estrela} alt="imagem parceiro etrela" className="estrela" />
          <span>Joao de Joia</span>
          <img src={estrela} alt="imagem parceiro joao joia" className="joao" />
          <span>Supermercado Trevo</span>
          <img src={estrela} alt="imagem parceiro trevo" className="trevo" />
        </div>

        <div>
          <button className="mais">Mais</button>
        </div>
      </section>

      <section className="amostra">
        <div>
          <div>
            <img
              src={sardinha}
              alt="imagem 01 produto amostra"
              className="imagem 01 amostra"
            />
          </div>
          <span> Sardinha Coqueiro óleo lata 75g</span>
          <div>
            <button class="adicionar">Adicionar</button>
          </div>
          <div>
            <img
              src={sardinha}
              alt="imagem 01 produto amostra"
              className="imagem 01 amostra"
            />
          </div>
          <span> Sardinha Coqueiro óleo lata 75g</span>
          <div>
            <button class="adicionar">Adicionar</button>
          </div>
          <div>
            <img
              src={sardinha}
              alt="imagem 01 produto amostra"
              className="imagem 01 amostra"
            />
          </div>
          <span> Sardinha Coqueiro óleo lata 75g</span>
          <div>
            <button class="adicionar">Adicionar</button>
          </div>
          <div>
            <img
              src={sardinha}
              alt="imagem 01 produto amostra"
              className="imagem 01 amostra"
            />
          </div>
          <span> Sardinha Coqueiro óleo lata 75g</span>
          <div>
            <button class="adicionar">Adicionar</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
