export const OpenSourceBadge = () => {
  return (
    <div className="open-source-badge" role="status" aria-label="Open Source Contributor">
      <span className="badge-pulse">●</span>
      <span>Open Source Contributor</span>
    </div>
  );
};

export const DBDuckHighlight = () => {
  return (
    <div className="dbduck-highlight" role="region" aria-label="DBDuck Flagship Project Highlight">
      <div className="highlight-badge">🚀 FLAGSHIP</div>
      <h3>DBDuck</h3>
      <p className="highlight-subtitle">Universal Data Object Model</p>
      <div className="metrics">
        <div className="metric">
          <span className="metric-value">70%</span>
          <span className="metric-label">Boilerplate Reduction</span>
        </div>
        <div className="metric">
          <span className="metric-value">6</span>
          <span className="metric-label">Databases Unified</span>
        </div>
        <div className="metric">
          <span className="metric-value">28</span>
          <span className="metric-label">Security Issues Fixed</span>
        </div>
      </div>
      <div className="highlight-links">
        <a href="https://dbduck.org.in" target="_blank" rel="noopener noreferrer" className="highlight-link primary">
          View Docs →
        </a>
        <a href="https://github.com/Veeresh-Hanni/DBDuck" target="_blank" rel="noopener noreferrer" className="highlight-link secondary">
          GitHub ↗
        </a>
      </div>
    </div>
  );
};

export const AccessibilityAttributes = {
  // For headings
  heading: {
    role: 'heading',
  },
  // For interactive elements
  button: {
    role: 'button',
    tabIndex: 0,
  },
  // For links
  link: {
    role: 'link',
  },
  // For lists
  list: {
    role: 'list',
  },
  listItem: {
    role: 'listitem',
  },
  // For navigation
  nav: {
    role: 'navigation',
    'aria-label': 'Main Navigation',
  },
  // For sections
  section: {
    role: 'region',
  },
  // For forms
  form: {
    role: 'form',
  },
};

export default { OpenSourceBadge, DBDuckHighlight, AccessibilityAttributes };
