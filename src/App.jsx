import "./index.css";

function App() {
  return (
    <div className="page">
      <header className="navbar">
        <div className="logo">
          <span className="logoIcon">∞</span>
          <span>LegacyChain</span>
        </div>

        <nav className="navLinks">
          <a href="#problema">Problema</a>
          <a href="#solucao">Solução</a>
          <a href="#seguranca">Segurança</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <button className="navButton">Começar</button>
      </header>

      <main>
        <section className="hero">
          <div className="heroContent">
            <p className="tag">Gestão de Heranças Digitais</p>

            <h1>
              O futuro da tua herança não está só no banco.
              <span> Também está na blockchain.</span>
            </h1>

            <p className="heroText">
              Milhares de euros em criptomoedas podem desaparecer para sempre
              quando alguém morre sem deixar acesso às carteiras digitais,
              passwords ou chaves privadas. A LegacyChain ajuda a preparar,
              organizar e proteger esse património digital.
            </p>

            <div className="heroButtons">
              <button className="primaryButton">Planear Herança Digital</button>
              <button className="secondaryButton">Ver como funciona</button>
            </div>

            <div className="stats">
              <div>
                <strong>100%</strong>
                <span>informação organizada</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>acesso seguro</span>
              </div>
              <div>
                <strong>0</strong>
                <span>cripto perdida</span>
              </div>
            </div>
          </div>

          <div className="heroVisual">
            <div className="orb"></div>

            <div className="cryptoCard mainCard">
              <span className="cardLabel">Património Digital</span>
              <h2>€84.250</h2>
              <p>BTC · ETH · USDT · NFTs</p>
            </div>

            <div className="cryptoCard smallCard topCard">
              <span>Carteira protegida</span>
              <strong>Chave segura</strong>
            </div>

            <div className="cryptoCard smallCard bottomCard">
              <span>Herdeiros definidos</span>
              <strong>3 pessoas</strong>
            </div>
          </div>
        </section>

        <section className="section" id="problema">
          <p className="sectionTag">O problema</p>
          <h2>Quando a chave privada desaparece, o dinheiro desaparece também.</h2>

          <div className="cards">
            <article className="infoCard">
              <h3>Criptomoedas bloqueadas</h3>
              <p>
                Sem seed phrase, password ou acesso à carteira, os herdeiros
                podem nunca conseguir recuperar os fundos.
              </p>
            </article>

            <article className="infoCard">
              <h3>Família sem instruções</h3>
              <p>
                Muitas pessoas têm ativos digitais, mas nunca explicam onde
                estão guardados nem como devem ser acedidos.
              </p>
            </article>

            <article className="infoCard">
              <h3>Falta de planeamento</h3>
              <p>
                A herança digital precisa de organização, segurança e
                instruções claras antes de ser tarde demais.
              </p>
            </article>
          </div>
        </section>

        <section className="solution" id="solucao">
          <div>
            <p className="sectionTag">A solução</p>
            <h2>Um plano seguro para transmitir bens digitais.</h2>
            <p>
              A LegacyChain permite criar um registo organizado dos teus ativos
              digitais, indicar herdeiros, preparar instruções e garantir que
              tudo fica protegido até ser necessário.
            </p>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <p>Registas os teus ativos digitais.</p>
            </div>
            <div className="step">
              <span>02</span>
              <p>Defines herdeiros e instruções de acesso.</p>
            </div>
            <div className="step">
              <span>03</span>
              <p>A informação fica protegida e organizada.</p>
            </div>
          </div>
        </section>

        <section className="security" id="seguranca">
          <p className="sectionTag">Segurança</p>
          <h2>Privacidade primeiro. Acesso apenas quando for necessário.</h2>
          <p>
            O objetivo não é expor passwords ou chaves privadas, mas sim criar
            um processo seguro para que os herdeiros saibam o que existe, onde
            está e como devem proceder.
          </p>
        </section>
      </main>

      <footer className="footer" id="contacto">
        <div>
          <strong>LegacyChain</strong>
          <p>Heranças digitais, criptomoedas e planeamento sucessório moderno.</p>
        </div>

        <p className="disclaimer">
          Este site é apenas informativo e não substitui aconselhamento jurídico
          ou financeiro.
        </p>
      </footer>
    </div>
  );
}

export default App;