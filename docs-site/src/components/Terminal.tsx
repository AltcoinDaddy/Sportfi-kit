export const Terminal = () => {
  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-dot" />
        <div className="terminal-dot" />
        <div className="terminal-dot" />
        <span style={{ marginLeft: 'auto', fontSize: '0.65rem', color: '#555555', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '0.1em' }}>blueprint.v1</span>
      </div>
      <div className="terminal-body">
        <div>
          <span className="terminal-prompt">$</span>
          <span className="terminal-keyword">npm</span> install sportfi-kit
        </div>
        <div style={{ marginTop: '0.75rem' }}>
          <span className="terminal-prompt">$</span>
          <span className="terminal-keyword">npx</span> sportfi-kit create
        </div>
        <div style={{ marginTop: '2.5rem' }} className="terminal-comment">
          # PRODUCTION_READY_INFRASTRUCTURE
        </div>
        <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
          <span className="terminal-keyword">export</span> {'{'} SportFiKit {'}'} <span className="terminal-keyword">from</span> <span className="terminal-string">'@pkg/core'</span>
        </div>
      </div>
    </div>
  );
};
