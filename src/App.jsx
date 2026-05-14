import { useState } from "react";
import {
  ShieldCheck,
  Wallet,
  KeyRound,
  Users,
  Lock,
  Database,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Fingerprint,
  FileKey2,
  Network,
  Activity,
  AlertTriangle,
} from "lucide-react";
import { supabase } from "./lib/supabaseClient";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    tipo_patrimonio: "Criptomoedas",
    mensagem: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      loading: true,
      message: "",
      type: "",
    });

    const { error } = await supabase.from("leads").insert([formData]);

    if (error) {
      setStatus({
        loading: false,
        message: "Erro ao enviar. Confirma a ligação ao Supabase.",
        type: "error",
      });

      return;
    }

    setStatus({
      loading: false,
      message: "Pedido enviado com sucesso. Os dados foram guardados no Supabase.",
      type: "success",
    });

    setFormData({
      nome: "",
      email: "",
      tipo_patrimonio: "Criptomoedas",
      mensagem: "",
    });
  };

  return (
    <div className="site">
      <div className="backgroundGlow glowOne"></div>
      <div className="backgroundGlow glowTwo"></div>
      <div className="gridOverlay"></div>

      <header className="navbar">
        <a href="#" className="brand">
          <div className="brandIcon">
            <Fingerprint size={22} />
          </div>
          <div>
            <strong>LegacyChain</strong>
            <span>Digital inheritance protocol</span>
          </div>
        </a>

        <nav className="navLinks">
          <a href="#problema">Problema</a>
          <a href="#protocolo">Protocolo</a>
          <a href="#seguranca">Segurança</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="navCta">
          Criar plano
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="heroText">
            <div className="eyebrow">
              <Sparkles size={16} />
              Heranças digitais para a era da blockchain
            </div>

            <h1>
              Quando alguém morre,
              <span> quem herda as criptomoedas?</span>
            </h1>

            <p className="heroDescription">
              A LegacyChain é uma plataforma conceptual para organizar ativos
              digitais, preparar instruções de sucessão e evitar que património
              em cripto, NFTs e carteiras digitais fique perdido para sempre.
            </p>

            <div className="heroActions">
              <a href="#contacto" className="primaryButton">
                Proteger património digital
                <ArrowRight size={18} />
              </a>

              <a href="#protocolo" className="secondaryButton">
                Ver protocolo
              </a>
            </div>

            <div className="trustStrip">
              <div>
                <CheckCircle2 size={18} />
                <span>Sem guardar chaves privadas</span>
              </div>
              <div>
                <CheckCircle2 size={18} />
                <span>Herdeiros definidos</span>
              </div>
              <div>
                <CheckCircle2 size={18} />
                <span>Processo documentado</span>
              </div>
            </div>
          </div>

          <div className="heroDashboard">
            <div className="dashboardTop">
              <div>
                <span>Legacy Vault</span>
                <strong>Plano sucessório ativo</strong>
              </div>
              <div className="liveBadge">
                <span></span>
                Online
              </div>
            </div>

            <div className="vaultCircle">
              <div className="outerRing"></div>
              <div className="middleRing"></div>
              <div className="innerCore">
                <ShieldCheck size={48} />
                <strong>92%</strong>
                <span>Segurança</span>
              </div>
            </div>

            <div className="assetPanel bitcoinPanel">
              <Wallet size={18} />
              <div>
                <span>BTC Wallet</span>
                <strong>Protegida</strong>
              </div>
            </div>

            <div className="assetPanel ethPanel">
              <Network size={18} />
              <div>
                <span>ETH / NFTs</span>
                <strong>Mapeados</strong>
              </div>
            </div>

            <div className="assetPanel keyPanel">
              <KeyRound size={18} />
              <div>
                <span>Seed Phrase</span>
                <strong>Não exposta</strong>
              </div>
            </div>

            <div className="dashboardBottom">
              <div>
                <span>Ativos registados</span>
                <strong>12</strong>
              </div>
              <div>
                <span>Herdeiros</span>
                <strong>3</strong>
              </div>
              <div>
                <span>Risco atual</span>
                <strong>Baixo</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="problemSection" id="problema">
          <div className="sectionHeader">
            <span className="sectionKicker">O problema real</span>
            <h2>Milhões podem ficar bloqueados por uma simples falta de planeamento.</h2>
            <p>
              Ao contrário de uma conta bancária tradicional, uma carteira de
              criptomoedas pode depender totalmente de uma password, seed phrase
              ou chave privada. Se ninguém souber como proceder, o património
              pode ficar inacessível.
            </p>
          </div>

          <div className="problemGrid">
            <article className="problemCard danger">
              <div className="cardIcon">
                <AlertTriangle size={24} />
              </div>
              <h3>Perda total de acesso</h3>
              <p>
                Se a chave privada desaparecer, não existe botão de “recuperar
                password” na blockchain.
              </p>
            </article>

            <article className="problemCard">
              <div className="cardIcon">
                <Users size={24} />
              </div>
              <h3>Herdeiros sem instruções</h3>
              <p>
                A família pode nem saber que existem criptomoedas, NFTs,
                exchanges ou carteiras digitais.
              </p>
            </article>

            <article className="problemCard">
              <div className="cardIcon">
                <FileKey2 size={24} />
              </div>
              <h3>Documentação dispersa</h3>
              <p>
                Passwords, carteiras, plataformas e instruções ficam muitas
                vezes espalhadas e inseguras.
              </p>
            </article>
          </div>
        </section>

        <section className="protocolSection" id="protocolo">
          <div className="protocolContent">
            <span className="sectionKicker">O protocolo LegacyChain</span>
            <h2>Um sistema simples para preparar a sucessão digital.</h2>
            <p>
              A ideia é criar um plano onde a pessoa não expõe os seus dados
              sensíveis diretamente, mas deixa informação suficiente para que os
              herdeiros saibam o que existe, onde existe e como devem agir.
            </p>
          </div>

          <div className="timeline">
            <div className="timelineItem">
              <span>01</span>
              <div>
                <h3>Inventário digital</h3>
                <p>Registo dos ativos: cripto, exchanges, wallets, NFTs e contas relevantes.</p>
              </div>
            </div>

            <div className="timelineItem">
              <span>02</span>
              <div>
                <h3>Herdeiros e permissões</h3>
                <p>Definição de quem deve ser contactado e que instruções deve receber.</p>
              </div>
            </div>

            <div className="timelineItem">
              <span>03</span>
              <div>
                <h3>Instruções protegidas</h3>
                <p>Criação de um roteiro seguro sem publicar passwords ou chaves privadas.</p>
              </div>
            </div>

            <div className="timelineItem">
              <span>04</span>
              <div>
                <h3>Execução sucessória</h3>
                <p>Processo claro para familiares, advogado, notário ou pessoa de confiança.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="securitySection" id="seguranca">
          <div className="securityVisual">
            <div className="securityCard mainSecurityCard">
              <Lock size={30} />
              <h3>Zero Key Exposure</h3>
              <p>
                A plataforma não precisa de guardar chaves privadas para criar
                valor. O foco é documentação, organização e orientação.
              </p>
            </div>

            <div className="securityMetric metricOne">
              <Activity size={18} />
              <span>Monitorização</span>
              <strong>Ativa</strong>
            </div>

            <div className="securityMetric metricTwo">
              <Database size={18} />
              <span>Base de dados</span>
              <strong>Supabase</strong>
            </div>
          </div>

          <div className="securityText">
            <span className="sectionKicker">Arquitetura segura</span>
            <h2>Projeto com lógica real de produto.</h2>
            <p>
              Para impressionar, não basta o site ser bonito. Este projeto já
              pode guardar pedidos de contacto numa base de dados Supabase,
              mostrando que existe integração real entre frontend e backend.
            </p>

            <div className="featureList">
              <div>
                <CheckCircle2 size={20} />
                <span>Frontend em React</span>
              </div>
              <div>
                <CheckCircle2 size={20} />
                <span>Deploy preparado para Vercel</span>
              </div>
              <div>
                <CheckCircle2 size={20} />
                <span>Base de dados em Supabase</span>
              </div>
              <div>
                <CheckCircle2 size={20} />
                <span>Design responsivo e moderno</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contactSection" id="contacto">
          <div className="contactText">
            <span className="sectionKicker">Demonstração funcional</span>
            <h2>Cria um pedido de plano sucessório digital.</h2>
            <p>
              Este formulário envia dados reais para o Supabase. É a parte que
              podes mostrar ao professor para provar que o projeto não é apenas
              visual: tem armazenamento, estado, validação básica e integração.
            </p>

            <div className="miniStats">
              <div>
                <strong>React</strong>
                <span>Interface</span>
              </div>
              <div>
                <strong>Supabase</strong>
                <span>Database</span>
              </div>
              <div>
                <strong>Vercel</strong>
                <span>Deploy</span>
              </div>
            </div>
          </div>

          <form className="leadForm" onSubmit={handleSubmit}>
            <div className="formHeader">
              <div>
                <span>Legacy Request</span>
                <strong>Novo plano</strong>
              </div>
              <div className="formStatusDot"></div>
            </div>

            <label>
              Nome
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: Rodrigo Conchado"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="exemplo@email.com"
                required
              />
            </label>

            <label>
              Tipo de património digital
              <select
                name="tipo_patrimonio"
                value={formData.tipo_patrimonio}
                onChange={handleChange}
              >
                <option>Criptomoedas</option>
                <option>NFTs</option>
                <option>Contas digitais</option>
                <option>Carteiras e exchanges</option>
                <option>Outro</option>
              </select>
            </label>

            <label>
              Mensagem
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Descreve brevemente o que gostarias de proteger..."
                rows="5"
              ></textarea>
            </label>

            <button type="submit" disabled={status.loading}>
              {status.loading ? "A enviar..." : "Guardar no Supabase"}
              <ArrowRight size={18} />
            </button>

            {status.message && (
              <p className={`formMessage ${status.type}`}>{status.message}</p>
            )}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>LegacyChain</strong>
          <span>Digital inheritance protocol</span>
        </div>

        <p>
          Projeto académico. Informação meramente demonstrativa; não substitui
          aconselhamento jurídico, financeiro ou fiscal.
        </p>
      </footer>
    </div>
  );
}

export default App;