/* global React */

// ============================================================
// DIRECTION 04 — CATÁLOGO-FIRST
// Inverte a lógica: a vitrine É o herói. Tráfego/processo dão suporte.
// ============================================================

function W4_Catalogo() {
  const Header = window.WfHeader;
  const Ph = window.WfPh;
  const Tag = window.WfTag;

  return (
    <div className="wf">
      <div className="wf-tag"><b>04</b> &nbsp;·&nbsp; Catálogo-first</div>
      <Header />

      {/* HERO condensado */}
      <div style={{ padding: '40px 60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 40, alignItems: 'center' }}>
          <div>
            <Tag gold>↓ catálogo abaixo</Tag>
            <div className="hand" style={{ fontSize: 72, marginTop: 18, lineHeight: 0.95 }}>
              Escolha um modelo.<br/>
              A gente <span style={{ color: 'var(--gold)' }}>personaliza</span>.<br/>
              Seu site no ar em <span className="squiggle">7 dias</span>.
            </div>
            <div style={{ marginTop: 18, fontSize: 16, color: 'var(--ink-soft)', maxWidth: 520 }}>
              Templates testados em mercado real + tráfego pago + CRO. Tudo no mesmo lugar, sem amadorismo.
            </div>
            <div style={{ marginTop: 28, display: 'flex', gap: 14 }}>
              <div className="sk-dark" style={{ padding: '14px 26px', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase' }}>ver catálogo ↓</div>
              <div className="sk" style={{ padding: '13px 24px', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>falar com a gente</div>
            </div>
          </div>

          {/* VSL menor, vertical */}
          <div>
            <Ph style={{ height: 240, borderRadius: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div className="play" />
                <div>VSL · 90s</div>
              </div>
            </Ph>
            <div style={{ marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-faint)', textAlign: 'center' }}>
              ▶ entenda como funciona
            </div>
          </div>
        </div>

        {/* Stats inline strip */}
        <div style={{ marginTop: 40, padding: '20px 24px', border: '1.5px solid var(--ink)', borderRadius: 12, background: 'var(--paper-warm)', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span className="hand" style={{ fontSize: 38, color: 'var(--gold)' }}>R$12M+</span>
            <span className="label">gerados</span>
          </div>
          <div style={{ width: 1, height: 30, background: 'var(--ink-soft)' }} />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span className="hand" style={{ fontSize: 38 }}>184</span>
            <span className="label">clientes</span>
          </div>
          <div style={{ width: 1, height: 30, background: 'var(--ink-soft)' }} />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span className="hand" style={{ fontSize: 38 }}>&lt;1s</span>
            <span className="label">load</span>
          </div>
          <div style={{ width: 1, height: 30, background: 'var(--ink-soft)' }} />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span className="hand" style={{ fontSize: 38 }}>4.9★</span>
            <span className="label">avaliação</span>
          </div>
        </div>
      </div>

      {/* CATÁLOGO MASTER — bem grande, é o protagonista */}
      <div className="section" style={{ paddingTop: 48 }}>
        <div className="section-title-row">
          <div>
            <Tag gold>★ protagonista</Tag>
            <div className="hand" style={{ fontSize: 72, marginTop: 12 }}>O catálogo.</div>
            <div style={{ marginTop: 6, fontSize: 16, color: 'var(--ink-soft)', maxWidth: 560 }}>
              6 modelos testados, organizados por objetivo. Clica no demo, navega como se fosse seu.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', maxWidth: 360, justifyContent: 'flex-end' }}>
            <Tag gold>todos · 6</Tag>
            <Tag>vsl</Tag>
            <Tag>e-commerce</Tag>
            <Tag>b2b</Tag>
            <Tag>captura</Tag>
            <Tag>oferta</Tag>
          </div>
        </div>

        {/* Featured card — bem grande */}
        <div className="sk-solid" style={{ padding: 0, marginBottom: 28, overflow: 'hidden', borderRadius: 14, background: 'var(--paper)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', minHeight: 360 }}>
            <Ph style={{ borderRadius: 0, border: 'none', borderRight: '1.5px solid var(--ink)' }} gold>
              <div style={{ textAlign: 'center' }}>
                <div className="play" style={{ margin: '0 auto 12px' }} />
                <div>preview interativo · template em destaque</div>
              </div>
            </Ph>
            <div style={{ padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                  <Tag gold>destaque</Tag>
                  <Tag>vsl · oferta</Tag>
                </div>
                <div className="hand" style={{ fontSize: 56, lineHeight: 1 }}>Cyber VSL</div>
                <div style={{ marginTop: 16, fontSize: 15, color: 'var(--ink-soft)' }}>
                  Página de oferta com vídeo, contador, bloco de garantia, FAQ e checkout integrado. Otimizada pra tráfego pago.
                </div>
                <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['VSL hero', 'contador', 'garantia', 'depoimentos', 'FAQ', 'checkout'].map(t => (
                    <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 8px', background: 'var(--paper-warm)', borderRadius: 4 }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <div className="sk" style={{ flex: 1, padding: '14px 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>↗ ver demo ao vivo</div>
                <div className="sk-dark" style={{ flex: 1, padding: '14px 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>escolher este</div>
              </div>
            </div>
          </div>
        </div>

        {/* Restante do catálogo — grid 3 colunas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            ['Premium Clean', 'institucional'],
            ['Corporate Trust', 'b2b'],
            ['Shopify Pro', 'e-commerce'],
            ['Lead Magnet', 'captura'],
            ['Black Friday', 'oferta'],
          ].map(([name, nicho], i) => (
            <div key={i} className="sk-solid" style={{ background: 'var(--paper)', borderRadius: 12, overflow: 'hidden' }}>
              <Ph style={{ height: 180, border: 'none', borderRadius: 0, borderBottom: '1.5px solid var(--ink)' }}>preview</Ph>
              <div style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div className="hand" style={{ fontSize: 24 }}>{name}</div>
                  <Tag gold>{nicho}</Tag>
                </div>
                <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                  <div className="sk" style={{ flex: 1, padding: '8px 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>demo</div>
                  <div className="sk-dark" style={{ flex: 1, padding: '8px 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>escolher</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVIÇOS — suporte, não protagonista */}
      <div className="section" style={{ background: 'var(--paper-warm)' }}>
        <div className="section-title-row">
          <div>
            <div className="label">+ o pacote completo</div>
            <div className="hand" style={{ fontSize: 48, marginTop: 6 }}>Site sozinho não vende.</div>
            <div style={{ marginTop: 6, fontSize: 15, color: 'var(--ink-soft)', maxWidth: 480 }}>
              Por isso a gente entrega o ciclo todo. Tráfego, site e otimização — tudo conectado.
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {[
            ['Tráfego pago', 'Meta · Google · TikTok. ROAS rastreado por canal.', 'dark'],
            ['Sites de alta conversão', 'Código puro, <1s de load. Sem builder pesado.', 'solid'],
            ['Otimização contínua', 'A/B test, heatmap, funil. Conversão sempre subindo.', 'gold'],
          ].map(([t, d, kind], i) => (
            <div key={i} className={`sk-${kind === 'solid' ? 'solid' : kind === 'dark' ? 'dark' : 'gold'}`} style={{ padding: 24, minHeight: 180 }}>
              <div className="label" style={{ color: kind === 'dark' ? 'var(--gold-soft)' : undefined }}>0{i+1}</div>
              <div className="hand" style={{ fontSize: 32, marginTop: 10, color: kind === 'dark' ? 'var(--paper)' : undefined }}>{t}</div>
              <div style={{ marginTop: 10, fontSize: 14, color: kind === 'dark' ? 'var(--ink-faint)' : 'var(--ink-soft)' }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESSO — horizontal compacto */}
      <div className="section">
        <div className="section-title-row">
          <div>
            <div className="label">Processo</div>
            <div className="hand" style={{ fontSize: 48, marginTop: 6 }}>Do clique ao no ar.</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, border: '1.5px solid var(--ink)', borderRadius: 14, overflow: 'hidden' }}>
          {[
            ['01', 'Escolha', 'navega o catálogo, vê os demos, escolhe'],
            ['02', 'Personaliza', 'logo, cores, copy, oferta — tudo seu'],
            ['03', 'No ar', '7 dias úteis. domínio + hosting + pixel'],
          ].map(([n, t, d], i) => (
            <div key={i} style={{ flex: 1, padding: 28, borderRight: i < 2 ? '1.5px solid var(--ink)' : 'none', background: i === 1 ? 'var(--gold-pale)' : 'var(--paper)', position: 'relative' }}>
              <div className="hand" style={{ fontSize: 56, color: 'var(--gold)', lineHeight: 1 }}>{n}</div>
              <div className="hand" style={{ fontSize: 30, marginTop: 8 }}>{t}</div>
              <div style={{ marginTop: 8, fontSize: 14, color: 'var(--ink-soft)' }}>{d}</div>
              {i < 2 && <div className="arrow" style={{ position: 'absolute', right: -14, top: '50%', transform: 'translateY(-50%)', fontSize: 32, background: 'var(--paper)', padding: '0 2px', zIndex: 2 }}>→</div>}
            </div>
          ))}
        </div>
      </div>

      {/* CTA + FAQ */}
      <div className="section" style={{ background: 'var(--ink)', color: 'var(--paper)', borderBottom: 'none' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 48, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 40 }}>
            <Tag gold>último passo</Tag>
            <div className="hand" style={{ fontSize: 66, color: 'var(--paper)', marginTop: 20 }}>
              Escolheu um modelo?<br/>
              <span style={{ color: 'var(--gold)' }}>Vamos começar.</span>
            </div>
            <div style={{ marginTop: 18, fontSize: 16, color: 'var(--ink-faint)', maxWidth: 380 }}>
              Diagnóstico em 20 minutos. Sem compromisso.
            </div>
            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <div style={{ padding: '16px 28px', borderRadius: 999, background: 'var(--gold)', color: 'var(--ink)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>⌬ WhatsApp</div>
              <div style={{ padding: '15px 24px', borderRadius: 999, border: '1.5px solid var(--ink-faint)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase' }}>agendar</div>
            </div>
            <div style={{ marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.1em' }}>
              ✓ sem fidelidade<br/>
              ✓ hospedagem grátis 1º ano<br/>
              ✓ entrega em 7 dias úteis
            </div>
          </div>

          <div>
            <div className="label" style={{ color: 'var(--gold)' }}>FAQ · quebra de objeções</div>
            <div style={{ marginTop: 20 }}>
              {[
                ['E se eu não souber qual template escolher?', true, 'A gente recomenda baseado no seu nicho e oferta. 20 min de conversa resolve.'],
                ['Quanto custa o domínio e a hospedagem?', false],
                ['7 dias é pra qualquer template, mesmo customizado?', false],
                ['Posso pedir alterações depois que o site for ao ar?', false],
                ['Tem fidelidade ou contrato de longo prazo?', false],
                ['Preciso já ter tráfego rodando antes?', false],
              ].map(([q, open, a], i) => (
                <div key={i} style={{ borderBottom: '1.5px solid var(--ink-soft)', padding: '18px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-hand)', fontSize: 22, color: 'var(--paper)' }}>{q}</span>
                    <span style={{ color: 'var(--gold)', fontSize: 22 }}>{open ? '–' : '+'}</span>
                  </div>
                  {open && a && <div style={{ marginTop: 12, fontSize: 14, color: 'var(--ink-faint)', maxWidth: 520 }}>{a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1.5px solid var(--ink-soft)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
          <span>© Audiência de Ouro · 2026</span>
          <span>@audienciadeouro</span>
        </div>
      </div>
    </div>
  );
}

window.W4_Catalogo = W4_Catalogo;
