import { CaseItem } from '../data';

type Props = { item: CaseItem };

export default function CaseCard({ item }: Props) {
  const hasResults = item.results && item.results.length > 0;
  const href = item.href ?? '#';
  return (
    <a className="case-card" href={href}>
      <div className="case-media" style={{ background: item.bg }}>
        <div className="case-media__image">
          <img src={item.image} alt={item.title} loading="lazy" />
        </div>
        {hasResults && (
          <div className="case-media__results" aria-hidden>
            <h4 className="case-results__title">Результаты</h4>
            <div className="case-results__grid">
              {item.results!.map((r, i) => (
                <div className="case-result" key={i}>
                  <div className="case-result__label">{r.label}</div>
                  <div
                    className={
                      'case-result__value ' +
                      (r.tone === 'down' ? 'is-down' : 'is-up')
                    }
                  >
                    {r.value}
                  </div>
                  {r.sub && <div className="case-result__sub">{r.sub}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="case-footer">
        <div className="case-info">
          <h3 className="case-title">{item.title}</h3>
          <p className="case-desc">{item.description}</p>
        </div>
        <span className="case-tag" data-tag={item.tag}>
          <span className="case-tag__text">{item.tag}</span>
          <span className="case-tag__arrow" aria-hidden>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M5 12 H19 M13 6 L19 12 L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </div>
    </a>
  );
}
