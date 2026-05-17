/* global React */
// Shared atoms exposed on window for w2/w3/w4 wireframes

function WfLogo({ size = 26 }) {
  return (
    <div className="logo" style={{ fontSize: size }}>
      <span className="bulb" />
      <span>Audiência de Ouro</span>
    </div>
  );
}

function WfHeader() {
  return (
    <div className="wf-header">
      <WfLogo />
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

function WfPh({ children, style, gold }) {
  return (
    <div className={`ph ${gold ? 'ph-gold' : ''}`} style={style}>
      {children || '[ placeholder ]'}
    </div>
  );
}

function WfTag({ children, gold }) {
  return <span className={`tag ${gold ? 'tag-gold' : ''}`}>{children}</span>;
}

function WfStat({ num, label, gold }) {
  return (
    <div>
      <div className={`stat-num ${gold ? 'gold' : ''}`}>{num}</div>
      <div className="label" style={{ marginTop: 4 }}>{label}</div>
    </div>
  );
}

Object.assign(window, { WfLogo, WfHeader, WfPh, WfTag, WfStat });
