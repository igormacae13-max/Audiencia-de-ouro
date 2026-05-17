/* global React */

// ============================================================
// DIRECTION 03 — CINEMA VSL
// Hero é o vídeo. Teatral, dramático, números gigantes.
// ============================================================

function W3_Cinema() {
  const Header = window.WfHeader;
  const Ph = window.WfPh;
  const Tag = window.WfTag;

  return (
    <div className="wf">
      <div className="wf-tag"><b>03</b> &nbsp;·&nbsp; Cinema VSL</div>
      <Header />

      {/* HERO — full-bleed VSL */}
      <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '60px 60px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <Tag gold>▶ assista 90 segundos</Tag>
          <div className="hand" style={{ fontSize: 92, color: 'var(--paper)', marginTop: 22, lineHeight: 0.95 }}>
            Anúncios que <span style={{ color: 'var(--gold)' }}>vendem</span>.<br/>
            Sites que <span className="squiggle">convertem</span>.
          </div>
          <div style={{ marginTop: 18, fontSize: 18, color: 'var(--ink-faint)', maxWidth: 620, margin: '18px auto 0' }}>
            A estrutura completa pra escalar seu faturamento — sem amadorismo digital.
          </div>
        </div>

        {/* big VSL */}
        <div style={{ position: 'relative', margin: '0 -20px' }}>
          <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', border: '1.5px solid var(--gold)' }}>
            <Ph style={{ height: 480, borderRadius: 0, border: 'none', background: 'rgba(212,160,23,0.06)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
                <div className="play play-lg" style={{ background: 'var(--gold)' }} />
                <div style={{ color: 'var(--gold-soft)', letterSpacing: '0.14em' }}>VSL · 01:30 · LEGENDADO</div>
              </div>
            </Ph>
            {/* floating stats over video */}
            <div style={{ position: 'absolute', top: 24, left: 24, padding: '12px 18px', background: 'rgba(0,0,0,0.7)', borderRadius: 10, border: '1px solid var(--gold)' }}>
              <div className="label" style={{ color: 'var(--gold-soft)' }}>ao vivo</div>
              <div className="hand" style={{ fontSize: 28, color: 'var(--paper)' }}>R$ 12M+ gerados</div>
            </div>
            <div style={{ position: 'absolute', bottom: 24, right: 24, padding: '12px 18px', background: 'rgba(0,0,0,0.7)', borderRadius: 10 }}>
              <div className="label" style={{ color: 'var(--ink-faint)' }}>184 clientes ativos</div>
            </div>
          </div>
          <Annot style={{ left: 40, top: -20, transform: 'rotate(-4deg)', color: 'var(--gold)' }}>vídeo full-bleed ↘</Annot>
        </div>

        {/* CTA below video */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 36 }}>
          <div style={{ padding: '18px 36px', borderRadius: 999, background: 'var(--gold)', color: 'var(--ink)', fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>
            ⌬ Falar com a gente
          </div>
          <div style={{ padding: '17px 32px', borderRadius: 999, border: '1.5px solid var(--ink-faint)', fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            ver catálogo ↓
          </div>
        </div>

        {/* Stats strip — gigantes */}
        <div style={{ marginTop: 80, padding: '48px 0', borderTop: '1.5px solid var(--ink-soft)' }}>
          <div className="label" style={{ textAlign: 'center', color: 'var(--ink-faint)', marginBottom: 32 }}>· números que importam ·</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
            {[
              ['R$ 12M+', 'em vendas geradas'],
              ['184', 'clientes ativos'],
              ['<1s', 'tempo de load'],
              ['4.9★', 'avaliação média'],
            ].map(([n, l], i) => (
              <div key={i}>
                <div className="hand" style={{ fontSize: 96, color: 'var(--gold)', lineHeight: 1 }}>{n}</div>
                <div className="label" style={{ color: 'var(--ink-faint)', marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 40 }} />
      </div>

      {/* SERVIÇOS — horizontal swipe cards */}
      <div className="section">
        <div className="section-title-row">
          <div>
            <div className="label">Pilares</div>
            <div className="hand" style={{ fontSize: 56, marginTop: 6 }}>O que sustenta o resultado.</div>
          </div>
          <div className="dots" style={{ alignItems: 'center' }}>
            <span className="on" /><span /><span /><span />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-faint)', marginLeft: 10 }}>← →</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 0.4fr', gap: 18 }}>
          <div className="sk-dark" style={{ padding: 30, minHeight: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Tag gold>01</Tag>
              <div className="hand" style={{ fontSize: 44, color: 'var(--paper)', marginTop: 16 }}>Tráfego pago</div>
              <div style={{ marginTop: 12, fontSize: 15, color: 'var(--ink-faint)', maxWidth: 320 }}>
                Meta, Google, TikTok. Criativos em lote, ROAS rastreado, escala diária.
              </div>
            </div>
            <Ph style={{ height: 110, background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.15)' }}>chart mock</Ph>
          </div>

          <div className="sk-solid" style={{ padding: 30, minHeight: 380 }}>
            <Tag>02</Tag>
            <div className="hand" style={{ fontSize: 44, marginTop: 16 }}>Sites</div>
            <div style={{ marginTop: 12, fontSize: 15, color: 'var(--ink-soft)' }}>
              Código puro, sem builder. Tempo de load &lt; 1 segundo. SEO técnico de fábrica.
            </div>
            <Ph style={{ height: 120, marginTop: 20 }}>code mock</Ph>
          </div>

          <div className="sk-gold" style={{ padding: 30, minHeight: 380 }}>
            <Tag gold>03</Tag>
            <div className="hand" style={{ fontSize: 44, marginTop: 16 }}>CRO</div>
            <div style={{ marginTop: 12, fontSize: 15, color: 'var(--ink-soft)' }}>
              A/B test contínuo, heatmap, otimização de funil. Conversão sempre subindo.
            </div>
            <Ph style={{ height: 120, marginTop: 20 }} gold>funil mock</Ph>
          </div>

          {/* peek of next card */}
          <div className="sk" style={{ padding: 14, minHeight: 380, opacity: 0.5 }}>
            <div className="label" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', margin: '20px auto' }}>+ mais →</div>
          </div>
        </div>
      </div>

      {/* CATÁLOGO — masonry-ish */}
      <div className="section" style={{ background: 'var(--paper-warm)' }}>
        <div className="section-title-row">
          <div>
            <div className="label">Vitrine</div>
            <div className="hand" style={{ fontSize: 56, marginTop: 6 }}>O catálogo de templates.</div>
            <div style={{ marginTop: 8, fontSize: 15, color: 'var(--ink-soft)', maxWidth: 480 }}>
              6 modelos prontos. Cada um testado em mercado real, otimizado pra um tipo de oferta.
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'min-content', gap: 22 }}>
          {[
            ['Premium Clean', 'institucional', 240],
            ['Cyber VSL', 'vsl · oferta', 280],
            ['Corporate Trust', 'b2b', 240],
            ['Shopify Pro', 'e-commerce', 280],
            ['Lead Magnet', 'captura', 240],
            ['Black Friday', 'oferta', 280],
          ].map(([name, nicho, h], i) => (
            <div key={i} style={{ background: 'var(--paper)', borderRadius: 14, border: '1.5px solid var(--ink)', overflow: 'hidden', position: 'relative' }}>
              <Ph style={{ height: h, border: 'none', borderRadius: 0, borderBottom: '1.5px solid var(--ink)' }}>preview ↗</Ph>
              {/* overlay tag */}
              <div style={{ position: 'absolute', top: 12, left: 12 }}>
                <Tag gold>{nicho}</Tag>
              </div>
              <div style={{ padding: 18 }}>
                <div className="hand" style={{ fontSize: 30 }}>{name}</div>
                <div style={{ marginTop: 6, fontSize: 13, color: 'var(--ink-soft)' }}>
                  Entrega 7 dias · hospedagem grátis 1º ano
                </div>
                <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink)' }}>↗ ver demo</span>
                  <span style={{ padding: '8px 14px', borderRadius: 999, background: 'var(--ink)', color: 'var(--paper)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>escolher</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESSO — zigzag vertical timeline */}
      <div className="section">
        <div className="section-title-row">
          <div>
            <div className="label">Como funciona</div>
            <div className="hand" style={{ fontSize: 56, marginTop: 6 }}>Três passos. Sete dias.</div>
          </div>
        </div>

        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* vertical line */}
          <div style={{ position: 'absolute', left: 18, top: 20, bottom: 20, width: 2, background: 'var(--gold)', opacity: 0.5 }} />

          {[
            ['Você escolhe o layout', 'Navega o catálogo, vê os demos ao vivo, escolhe o que combina com a sua oferta.', 'right'],
            ['A gente personaliza', 'Logo, cores, textos, vídeos. Tudo conversado, tudo seu. Revisões inclusas.', 'left'],
            ['Seu site vai ao ar', 'Domínio configurado, hospedagem grátis no 1º ano, pixels rodando do dia 1.', 'right'],
          ].map(([t, d, side], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 28, marginBottom: 40, position: 'relative' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--gold)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-hand)', fontSize: 22, fontWeight: 700, flexShrink: 0, marginLeft: -22, zIndex: 2 }}>
                {i+1}
              </div>
              <div className={side === 'left' ? 'sk-gold' : 'sk-solid'} style={{ padding: 24, flex: 1, marginLeft: side === 'left' ? 200 : 0, marginRight: side === 'right' ? 200 : 0 }}>
                <div className="hand" style={{ fontSize: 34 }}>{t}</div>
                <div style={{ marginTop: 8, fontSize: 15, color: 'var(--ink-soft)' }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA + FAQ */}
      <div className="section" style={{ background: 'var(--ink)', color: 'var(--paper)', borderBottom: 'none', padding: '80px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Tag gold>ÚLTIMA CHAMADA</Tag>
          <div className="hand" style={{ fontSize: 84, color: 'var(--paper)', marginTop: 22 }}>
            Bora <span style={{ color: 'var(--gold)' }}>fazer acontecer</span>?
          </div>
          <div style={{ marginTop: 18, fontSize: 18, color: 'var(--ink-faint)', maxWidth: 560, margin: '18px auto 0' }}>
            Diagnóstico gratuito de 20 minutos. Sem compromisso, sem script de vendedor.
          </div>
          <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center', gap: 14 }}>
            <div style={{ padding: '20px 40px', borderRadius: 999, background: 'var(--gold)', color: 'var(--ink)', fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>⌬ WhatsApp agora</div>
            <div style={{ padding: '19px 32px', borderRadius: 999, border: '1.5px solid var(--ink-faint)', fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase' }}>agendar reunião</div>
          </div>
        </div>

        {/* FAQ accordion */}
        <div style={{ maxWidth: 760, margin: '0 auto', marginTop: 64 }}>
          <div className="label" style={{ color: 'var(--gold)', textAlign: 'center', marginBottom: 24 }}>· perguntas frequentes ·</div>
          {[
            ['Quanto tempo demora a entrega completa?', true],
            ['Hospedagem e domínio estão inclusos no valor?', false],
            ['Posso pedir alterações depois que o site for ao ar?', false],
            ['Funciona pra qualquer nicho ou só pra alguns?', false],
            ['Qual a forma de pagamento e tem fidelidade?', false],
          ].map(([q, open], i) => (
            <div key={i} style={{ borderBottom: '1.5px solid var(--ink-soft)', padding: '20px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-hand)', fontSize: 24 }}>{q}</span>
                <span style={{ color: 'var(--gold)', fontSize: 22 }}>{open ? '–' : '+'}</span>
              </div>
              {open && (
                <div style={{ marginTop: 14, fontSize: 15, color: 'var(--ink-faint)', maxWidth: 600 }}>
                  Padrão: 7 dias úteis após aprovação do briefing. Casos especiais podem ser entregues em 72h com sobretaxa.
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1.5px solid var(--ink-soft)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
          <span>© Audiência de Ouro · 2026</span>
          <span>@audienciadeouro</span>
        </div>
      </div>
    </div>
  );
}

function Annot({ children, style }) {
  return <div className="annot" style={style}>{children}</div>;
}

window.W3_Cinema = W3_Cinema;
