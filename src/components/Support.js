import React from 'react';
import '../styles/Support.css';

const plans = [
  {
    title: 'PLANO DE SUPORTE AVULSO',
    oldPrice: 'R$1,27',
    newPrice: 'R$0,64/minuto',
    features: [
      'Atendimento dentro dos canais oficiais de suporte',
      'Tempo de solução varia conforme complexidade',
    ],
  },
  {
    title: 'PLANO BÁSICO',
    oldPrice: 'R$423,90',
    newPrice: 'R$349,99/mês',
    features: [
      'Atendimento personalizado',
      'Manutenção periódica',
      'Treinamento e capacitação da equipe',
    ],
  },
  {
    title: 'PLANO PRO',
    oldPrice: 'R$1239,90',
    newPrice: 'R$949,99/mês',
    badge: '⭐ RECOMENDADO',
    features: [
      'Hospedagem premium + suporte 24h',
      'Gestão de marketing digital completa',
      'Atendimento direto com especialistas (sem robôs)',
    ],
  },
];

export default function SuporteTecnico() {
  return (
    <div>
      {/* Nova seção adicionada */}
      <div 
  className="suporte-intro"
  style={{
    backgroundImage: "url('./images/fundo-suporte.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    position: "relative",
    color: "#fff",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
    marginLeft: "calc(-50vw + 50%)" // Corrige possíveis problemas de margem
  }}
>
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    boxSizing: "border-box"
  }}>
    <h1 style={{ position: "relative", zIndex: 2 }}>Suporte especializado para sua empresa</h1>
    <p style={{ position: "relative", zIndex: 2 }}>A WebTiStacks oferece uma poderosa ferramenta para solicitações de suporte técnico, 24h por dia, para todos os seus produtos.</p>
  </div>
</div>

      <section className='canais'>
        <h6>
          Além disso, contamos também com outros canais para que você possa falar com a gente
        </h6>
        <div className="channels-container">
          {/* Imagem da girl pointing */}
          {/* Removed girl-pointing image as per user request */}
          {/* Cards dos canais */}
          <div className="channel-cards">
            {/* Card WhatsApp */}
            <article className="channel-card whatsapp-card">
              <div className="channel-icon">📱</div>
              <h3>WhatsApp</h3>
              <p>Suporte rápido e direto pelo WhatsApp Business</p>
              <button className="channel-button">Enviar mensagem</button>
            </article>
            {/* Card Site */}
            <article className="channel-card site-card">
              <div className="channel-icon">🌐</div>
              <h3>Site</h3>
              <p>Formulário de contato em nosso site</p>
              <button className="channel-button">Acessar site</button>
            </article>
            {/* Card Help Desk */}
            <article className="channel-card helpdesk-card">
              <div className="channel-icon">🛎️</div>
              <h3>Help Desk</h3>
              <p>Sistema completo de tickets para seu negócio</p>
              <button className="channel-button">Abrir ticket</button>
            </article>
          </div>
        </div>
      </section>
      
      
      <div className="suporte-container">
        <div className="suporte-topo">
          <div className="suporte-texto">
            <h1>SUPORTE TÉCNICO</h1>
            <p className="subtitulo">CONFIRA NOSSOS PLANOS E CONDIÇÕES</p>
          </div>
          <img src="./images/suporte.png" alt="Ilustração Suporte" className="suporte-img" />
        </div>
        <div className="planos">
          {plans.map((plan, index) => (
            <div className={`plano-card ${index === 2 ? 'pro' : ''}`} key={index}>
              {plan.badge && <div className="plano-badge">{plan.badge}</div>}
              <h2>{plan.title}</h2>
              <p className="preco-antigo">DE: <span>{plan.oldPrice}</span></p>
              <p className="preco-novo">💰 <strong>{plan.newPrice}</strong></p>
              <ul>
                {plan.features.map((item, idx) => (
                  <li key={idx}>✅ {item}</li>
                ))}
              </ul>
              <button className="cta-button">Contratar agora</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}