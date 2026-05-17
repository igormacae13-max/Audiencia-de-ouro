/* global React */
const { Fragment } = React;

// ============================================================
// Shared atoms
// ============================================================

function Logo({ size = 26 }) {
  return (
    <div className="logo" style={{ fontSize: size }}>
      <span className="bulb" />
      <span>Audiência de Ouro</span>
    </div>
  );
}

function Header({ variant = 'default' }) {
  return (
    <div className="wf-header">
      <Logo />
      <div className="nav">
        <span>Serviços</span>
        <span>Catálogo</span>
        <span>Processo</span>
        <span>FAQ</span>
      </div>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-faint)' }}>◐ tema</span>
        <span className="cta">Falar com a gente</span>
      </div>
    </div>
  );
}

function Ph({ children, style, gold }) {
  return (
    <div className={`ph ${gold ? 'ph-gold' : ''}`} style={style}>
      {children || '[ placeholder ]'}
    </div>
  );
}

function Tag({ children, gold }) {
  return <span className={`tag ${gold ? 'tag-gold' : ''}`}>{children}</span>;
}

function Stat({ num, label, gold }) {
  return (
    <div>
      <div className={`stat-num ${gold ? 'gold' : ''}`}>{num}</div>
      <div className="label" style={{ marginTop: 4 }}>{label}</div>
    </div>
  );
}

function FaqRow({ q, open }) {
  return (
    <div className="faq-row">
      <span>{q}</span>
      <span className="plus">{open ? '–' : '+'}</span>
    </div>
  );
}

function Annot({ children, style }) {
  return <div className="annot" style={style}>{children}</div>;
}

// ============================================================
// DIRECTION 01 — EDITORIAL PREMIUM
// Magazine-style. Asymmetric. Big script headline.
// ============================================================

function W1_Editorial() {
  return (
    <div className="wf">
      <div className="wf-tag"><b>01</b> &nbsp;·&nbsp; Editorial Premium</div>
      <Header />

      {/* HERO — magazine cover split */}
      <div className="section" style={{ paddingTop: 64, paddingBottom: 72 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 56, alignItems: 'start' }}>
          <div>
            <div className="label" style={{ marginBottom: 18 }}>Edição Nº 01 · Maio 2026</div>
            <div className="hand" style={{ fontSize: 92 }}>
              Anúncios que <span className="squiggle">vendem.</span>
              <br/>Sites que <span style={{ color: 'var(--gold)' }}>convertem.</span>
            </div>
            <div style={{ marginTop: 28, fontSize: 18, maxWidth: 520, color: 'var(--ink-soft)' }}>
              A estrutura completa para escalar seu faturamento — sem amadorismo digital, sem promessa vazia.
            </div>
            <div style={{ marginTop: 32, display: 'flex', gap: 14, alignItems: 'center' }}>
              <div className="sk-dark" style={{ padding: '16px 28px', borderRadius: 999 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Começar agora →
                </span>
              </div>
              <div className="sk" style={{ padding: '15px 24px', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
                Ver catálogo
              </div>
            </div>
            <Annot style={{ left: 380, top: 240, transform: 'rotate(-6deg)' }}>↑ tipografia script gigante</Annot>
          </div>

          {/* VSL frame — portrait magazine slot */}
          <div style={{ position: 'relative' }}>
            <Ph style={{ height: 420 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                <div className="play play-lg" />
                <div>VSL · 90s</div>
              </div>
            </Ph>
            <Annot style={{ right: -10, top: -22, transform: 'rotate(4deg)' }}>vídeo do dono ↘</Annot>
            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-faint)' }}>
              <span>00:00 / 01:30</span>
              <span>HD · LEGENDADO</span>
            </div>
          </div>
        </div>

        {/* Stats ticker */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1.5px solid var(--ink)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
          <Stat num="R$ 12M+" label="Faturamento gerado" gold />
          <Stat num="184" label="Clientes ativos" />
          <Stat num="<1s" label="Tempo de carregamento" />
          <Stat num="4.9★" label="Avaliação média" />
        </div>
      </div>

      {/* BENTO SERVIÇOS — asymmetric editorial */}
      <div className="section">
        <div className="section-title-row">
          <div>
            <div className="label">§ 01 — Pilares</div>
            <div className="hand" style={{ fontSize: 56, marginTop: 6 }}>Três frentes. Uma máquina.</div>
          </div>
          <div className="note" style={{ maxWidth: 260, textAlign: 'right' }}>“cada pilar resolve um<br/>buraco no funil” ✎</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gridTemplateRows: '320px 220px', gap: 18 }}>
          {/* Big feature */}
          <div className="sk-dark" style={{ gridRow: 'span 2', padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Tag>01 · Tráfego pago</Tag>
              <div className="hand" style={{ fontSize: 52, marginTop: 18, color: 'var(--paper)' }}>
                Escala que <span style={{ color: 'var(--gold)' }}>não para</span>.
              </div>
              <div style={{ marginTop: 16, fontSize: 16, color: 'var(--ink-faint)', maxWidth: 360 }}>
                Meta · Google · TikTok. Gestão diária, criativos testados em lote, ROAS rastreado por canal.
              </div>
            </div>
            <Ph style={{ height: 100, opacity: 0.5 }}>dashboard mock</Ph>
          </div>

          <div className="sk-solid" style={{ padding: 22 }}>
            <Tag gold>02 · Sites</Tag>
            <div className="hand" style={{ fontSize: 32, marginTop: 12 }}>Código puro.<br/>&lt; 1 segundo.</div>
            <div style={{ marginTop: 10, fontSize: 14, color: 'var(--ink-soft)' }}>Sem WordPress. Sem builder pesado.</div>
          </div>

          <div className="sk-gold" style={{ padding: 22 }}>
            <Tag gold>03 · CRO</Tag>
            <div className="hand" style={{ fontSize: 32, marginTop: 12 }}>Otimização<br/>contínua.</div>
            <div style={{ marginTop: 10, fontSize: 14, color: 'var(--ink-soft)' }}>A/B test mensal. Heatmap. Funil.</div>
          </div>

          <div className="sk" style={{ padding: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div className="label">+ extra</div>
              <div className="hand" style={{ fontSize: 26, marginTop: 6 }}>Copy de oferta</div>
            </div>
            <span className="arrow" style={{ fontSize: 28 }}>→</span>
          </div>

          <div className="sk" style={{ padding: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div className="label">+ extra</div>
              <div className="hand" style={{ fontSize: 26, marginTop: 6 }}>Pixel + analytics</div>
            </div>
            <span className="arrow" style={{ fontSize: 28 }}>→</span>
          </div>
        </div>
      </div>

      {/* CATÁLOGO */}
      <div className="section" style={{ background: 'var(--paper-warm)' }}>
        <div className="section-title-row">
          <div>
            <div className="label">§ 02 — Vitrine</div>
            <div className="hand" style={{ fontSize: 56, marginTop: 6 }}>O catálogo.</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Tag>todos</Tag><Tag>vsl</Tag><Tag>e-commerce</Tag><Tag>institucional</Tag>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {[
            ['Premium Clean', 'institucional'],
            ['Cyber VSL', 'vsl'],
            ['Corporate Trust', 'b2b'],
            ['Shopify Pro', 'e-commerce'],
            ['Lead Magnet', 'captura'],
            ['Black Friday', 'oferta'],
          ].map(([name, nicho], i) => (
            <div key={i} className="sk-solid" style={{ padding: 14, background: 'var(--paper)' }}>
              <Ph style={{ height: 200, marginBottom: 14 }}>template preview</Ph>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div className="hand" style={{ fontSize: 28 }}>{name}</div>
                <Tag gold>{nicho}</Tag>
              </div>
              <div style={{ marginTop: 8, fontSize: 14, color: 'var(--ink-soft)' }}>
                Pronto pra customizar. Entrega em 7 dias.
              </div>
              <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
                <div className="sk" style={{ flex: 1, padding: '10px 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  ↗ Ver demo
                </div>
                <div className="sk-dark" style={{ flex: 1, padding: '10px 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Escolher
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESSO */}
      <div className="section">
        <div className="section-title-row">
          <div>
            <div className="label">§ 03 — Como funciona</div>
            <div className="hand" style={{ fontSize: 56, marginTop: 6 }}>Três passos. Zero fricção.</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative' }}>
          {[
            ['Escolha o layout', 'Você navega o catálogo, vê os demos, escolhe o que combina.'],
            ['A gente personaliza', 'Logo, cores, textos e oferta. Tudo conversado, tudo seu.'],
            ['Seu site no ar', 'Hospedagem grátis no 1º ano. Domínio configurado. Pixels prontos.'],
          ].map(([t, d], i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div className="hand" style={{ fontSize: 96, color: 'var(--gold)', lineHeight: 1 }}>0{i+1}</div>
              <div className="hand" style={{ fontSize: 32, marginTop: 8 }}>{t}</div>
              <div style={{ marginTop: 12, fontSize: 15, color: 'var(--ink-soft)', maxWidth: 280 }}>{d}</div>
              {i < 2 && <div className="arrow" style={{ position: 'absolute', right: -22, top: 32, fontSize: 40 }}>→</div>}
            </div>
          ))}
        </div>
      </div>

      {/* CTA + FAQ */}
      <div className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <div className="hand" style={{ fontSize: 72, color: 'var(--paper)' }}>
              Vamos <span style={{ color: 'var(--gold)' }}>conversar?</span>
            </div>
            <div style={{ marginTop: 18, fontSize: 18, color: 'var(--ink-faint)', maxWidth: 440 }}>
              Diagnóstico gratuito de 20 minutos. Sem compromisso, sem script de vendedor.
            </div>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <div style={{ padding: '16px 28px', borderRadius: 999, background: 'var(--gold)', color: 'var(--ink)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>
                ⌬ Chamar no WhatsApp
              </div>
              <div style={{ padding: '15px 24px', borderRadius: 999, border: '1.5px solid var(--ink-faint)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--paper)' }}>
                Agendar reunião
              </div>
            </div>
            <div style={{ marginTop: 40, display: 'flex', gap: 32, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <span>✓ Sem fidelidade</span>
              <span>✓ Hospedagem grátis 1º ano</span>
              <span>✓ Entrega em 7 dias</span>
            </div>
          </div>

          <div>
            <div className="label" style={{ color: 'var(--gold)' }}>FAQ</div>
            <div style={{ marginTop: 18, color: 'var(--paper)' }}>
              {[
                ['Quanto tempo demora a entrega?', true],
                ['Hospedagem e domínio estão inclusos?', false],
                ['Posso pedir alterações depois?', false],
                ['Qual a forma de pagamento?', false],
                ['Funciona pra qualquer nicho?', false],
              ].map(([q, open], i) => (
                <div key={i} style={{ borderBottom: '1.5px solid var(--ink-soft)', padding: '16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-hand)', fontSize: 22 }}>
                  <span>{q}</span>
                  <span style={{ color: 'var(--gold)' }}>{open ? '–' : '+'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '32px 60px', background: 'var(--ink)', color: 'var(--ink-faint)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        <span>© Audiência de Ouro · 2026</span>
        <span>@audienciadeouro · ⌬ contato</span>
      </div>
    </div>
  );
}

window.W1_Editorial = W1_Editorial;
