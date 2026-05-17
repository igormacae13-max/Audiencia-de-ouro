/* global React */

// ============================================================
// DIRECTION 02 — BENTO VAULT
// Everything is a bento. Modular dashboard-feel.
// ============================================================

function W2_Bento() {
  const Header = window.WfHeader;
  const Ph = window.WfPh;
  const Tag = window.WfTag;
  const Stat = window.WfStat;

  return (
    <div className="wf">
      <div className="wf-tag"><b>02</b> &nbsp;·&nbsp; Bento Vault</div>
      <Header />

      {/* HERO BENTO — the hero IS a bento grid */}
      <div className="section" style={{ paddingTop: 40, paddingBottom: 56 }}>
        <div className="label" style={{ marginBottom: 18 }}>↳ Hub de negócios · uma página, três frentes</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: '120px', gap: 16 }}>
          {/* Big headline tile */}
          <div className="sk-solid" style={{ gridColumn: 'span 4', gridRow: 'span 3', padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
            <div>
              <Tag>headline</Tag>
              <div className="hand" style={{ fontSize: 78, marginTop: 18, lineHeight: 0.95 }}>
                Anúncios que vendem.<br/>
                Sites que <span style={{ color: 'var(--gold)' }}>convertem</span>.
              </div>
              <div style={{ marginTop: 18, fontSize: 17, color: 'var(--ink-soft)', maxWidth: 520 }}>
                Estrutura completa pra escalar — tráfego, site e CRO em um só lugar.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div className="sk-dark" style={{ padding: '14px 24px', borderRadius: 16, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Começar agora →</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>ou explore ↓</div>
            </div>
          </div>

          {/* VSL tile */}
          <div className="sk-dark" style={{ gridColumn: 'span 2', gridRow: 'span 3', padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Ph style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.2)' }}>
              <div className="play play-lg" />
            </Ph>
            <div>
              <div className="label" style={{ color: 'var(--gold-soft)' }}>VSL · 90s</div>
              <div className="hand" style={{ fontSize: 24, color: 'var(--paper)', marginTop: 4 }}>Como a gente trabalha</div>
            </div>
          </div>

          {/* Stat tiles */}
          <div className="sk-gold" style={{ gridColumn: 'span 2', padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div className="stat-num gold">R$12M+</div>
              <div className="label">faturamento gerado</div>
            </div>
            <span className="arrow" style={{ fontSize: 32 }}>↗</span>
          </div>
          <div className="sk-solid" style={{ gridColumn: 'span 2', padding: 20 }}>
            <div className="stat-num">184</div>
            <div className="label">clientes ativos</div>
          </div>
          <div className="sk" style={{ gridColumn: 'span 2', padding: 20 }}>
            <div className="stat-num">&lt; 1s</div>
            <div className="label">carregamento</div>
          </div>
        </div>
      </div>

      {/* SERVIÇOS BENTO */}
      <div className="section">
        <div className="section-title-row">
          <div>
            <div className="label">02 · Serviços</div>
            <div className="hand" style={{ fontSize: 56, marginTop: 6 }}>O que a gente entrega.</div>
          </div>
          <div className="note" style={{ transform: 'rotate(-3deg)' }}>“cada tile = uma frente” ✎</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '180px', gap: 16 }}>
          {/* Tráfego — wide */}
          <div className="sk-dark" style={{ gridColumn: 'span 2', gridRow: 'span 2', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Tag gold>tráfego pago</Tag>
              <div className="hand" style={{ fontSize: 44, marginTop: 16, color: 'var(--paper)' }}>
                Escala que <span style={{ color: 'var(--gold)' }}>não para</span>.
              </div>
              <div style={{ marginTop: 12, fontSize: 14, color: 'var(--ink-faint)', maxWidth: 320 }}>
                Meta, Google e TikTok. Criativos em lote, ROAS rastreado por canal, otimização diária.
              </div>
            </div>
            {/* Mini-chart placeholder */}
            <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 60 }}>
              {[28, 38, 32, 52, 46, 68, 78, 64, 88, 72, 96, 84].map((h, i) => (
                <div key={i} style={{ flex: 1, height: h + '%', background: i % 3 === 2 ? 'var(--gold)' : 'rgba(255,255,255,0.25)', borderRadius: 2 }} />
              ))}
            </div>
          </div>

          {/* Sites */}
          <div className="sk-solid" style={{ gridColumn: 'span 2', padding: 24 }}>
            <Tag>sites</Tag>
            <div className="hand" style={{ fontSize: 38, marginTop: 12 }}>Código puro. &lt; 1s.</div>
            <div style={{ marginTop: 8, fontSize: 14, color: 'var(--ink-soft)' }}>HTML5 + Tailwind. Zero builder, zero gordura.</div>
          </div>

          {/* CRO */}
          <div className="sk-gold" style={{ padding: 22 }}>
            <Tag gold>CRO</Tag>
            <div className="hand" style={{ fontSize: 28, marginTop: 10 }}>A/B test mensal</div>
          </div>

          {/* Pixel */}
          <div className="sk" style={{ padding: 22 }}>
            <Tag>analytics</Tag>
            <div className="hand" style={{ fontSize: 28, marginTop: 10 }}>Pixel + GA4</div>
          </div>
        </div>
      </div>

      {/* CATÁLOGO — Cruip-style clean grid */}
      <div className="section" style={{ background: 'var(--paper-warm)' }}>
        <div className="section-title-row">
          <div>
            <div className="label">03 · Catálogo</div>
            <div className="hand" style={{ fontSize: 56, marginTop: 6 }}>6 templates. Pronto pra escalar.</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Tag gold>todos · 6</Tag><Tag>vsl</Tag><Tag>e-com</Tag><Tag>b2b</Tag>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            ['Premium Clean', 'institucional', '#1'],
            ['Cyber VSL', 'vsl · oferta', '#2'],
            ['Corporate Trust', 'b2b', '#3'],
            ['Shopify Pro', 'e-commerce', '#4'],
            ['Lead Magnet', 'captura', '#5'],
            ['Black Friday', 'oferta', '#6'],
          ].map(([name, nicho, n], i) => (
            <div key={i} className="sk-solid" style={{ background: 'var(--paper)', borderRadius: 14, overflow: 'hidden' }}>
              <Ph style={{ height: 220, borderRadius: 0, borderLeft: 0, borderRight: 0, borderTop: 0 }}>
                preview · {n}
              </Ph>
              <div style={{ padding: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div className="hand" style={{ fontSize: 26 }}>{name}</div>
                  <span className="label">{n}</span>
                </div>
                <div style={{ marginTop: 6, display: 'flex', gap: 6 }}>
                  {nicho.split(' · ').map((t, j) => <Tag key={j} gold={j === 0}>{t}</Tag>)}
                </div>
                <div style={{ marginTop: 12, fontSize: 13, color: 'var(--ink-soft)' }}>
                  Entrega 7 dias. Hospedagem grátis 1º ano.
                </div>
                <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
                  <div className="sk" style={{ flex: 1, padding: '10px 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>↗ demo</div>
                  <div className="sk-dark" style={{ flex: 1, padding: '10px 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>escolher</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESSO — bento cards */}
      <div className="section">
        <div className="section-title-row">
          <div>
            <div className="label">04 · Processo</div>
            <div className="hand" style={{ fontSize: 56, marginTop: 6 }}>Do clique ao no ar.</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            ['Escolha', 'o layout', 'Navega o catálogo, escolhe o que combina com a oferta.'],
            ['A gente', 'personaliza', 'Logo, cores, copy e oferta — tudo no seu tom.'],
            ['No ar', 'em 7 dias', 'Domínio, hospedagem, pixels. Tudo pronto pra rodar.'],
          ].map(([n, t, d], i) => (
            <div key={i} className={i === 1 ? 'sk-gold' : 'sk-solid'} style={{ padding: 28, minHeight: 200 }}>
              <div className="label">passo 0{i+1}</div>
              <div className="hand" style={{ fontSize: 40, marginTop: 12 }}>{n}<br/><span style={{ color: 'var(--gold)' }}>{t}</span></div>
              <div style={{ marginTop: 14, fontSize: 14, color: 'var(--ink-soft)' }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA + FAQ bento */}
      <div className="section" style={{ background: 'var(--ink)', color: 'var(--paper)', borderBottom: 'none' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: 'auto', gap: 16 }}>
          {/* CTA big tile */}
          <div style={{ gridColumn: 'span 3', padding: 36, border: '1.5px solid var(--gold)', borderRadius: 16, background: 'rgba(212,160,23,0.08)' }}>
            <div className="hand" style={{ fontSize: 60, color: 'var(--paper)' }}>Vamos <span style={{ color: 'var(--gold)' }}>conversar</span>?</div>
            <div style={{ marginTop: 16, fontSize: 16, color: 'var(--ink-faint)', maxWidth: 380 }}>
              Diagnóstico de 20 min. Sem compromisso, sem script.
            </div>
            <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <div style={{ padding: '14px 24px', borderRadius: 12, background: 'var(--gold)', color: 'var(--ink)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>⌬ WhatsApp</div>
              <div style={{ padding: '13px 22px', borderRadius: 12, border: '1.5px solid var(--ink-faint)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>agendar</div>
            </div>
          </div>

          {/* FAQ tiles */}
          <div style={{ gridColumn: 'span 3', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
            {[
              'Quanto tempo demora?',
              'Hospedagem inclusa?',
              'Posso alterar depois?',
              'Pagamento parcelado?',
              'Serve pro meu nicho?',
              'Posso cancelar?',
            ].map((q, i) => (
              <div key={i} style={{ padding: 16, border: '1.5px solid var(--ink-soft)', borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 70 }}>
                <span style={{ fontFamily: 'var(--font-hand)', fontSize: 18 }}>{q}</span>
                <span style={{ color: 'var(--gold)' }}>+</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1.5px solid var(--ink-soft)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
          <span>© Audiência de Ouro</span>
          <span>@audienciadeouro</span>
        </div>
      </div>
    </div>
  );
}

window.W2_Bento = W2_Bento;
