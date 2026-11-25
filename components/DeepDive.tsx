import Link from 'next/link';
import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  kicker: string;
  heading: string;
  intro?: ReactNode;
  alt?: boolean;
};

function SectionHead({ id, kicker, heading, intro }: SectionProps) {
  return (
    <div className="text-center">
      <span className="badge">{kicker}</span>
      <h2 id={`${id}-heading`}>{heading}</h2>
      {intro ? <p style={{ maxWidth: 660, margin: '12px auto 0' }}>{intro}</p> : null}
    </div>
  );
}

/* =========================================================
   1. FIELD NOTES — long-form user write-ups (使用心得)
   ========================================================= */
export type FieldNote = {
  initials: string;
  name: string;
  role: string;
  device: string;
  footage: string;
  settings: string;
  quote: string;
  outcome: string;
};

export function FieldNotes({
  id,
  kicker,
  heading,
  intro,
  alt,
  items,
}: SectionProps & { items: FieldNote[] }) {
  return (
    <section id={id} className={`section${alt ? ' section-alt' : ''}`} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <SectionHead id={id} kicker={kicker} heading={heading} intro={intro} />
        <div className="dive-grid dive-grid-2" role="list">
          {items.map((n, i) => (
            <article className="fn-card" key={i} role="listitem">
              <div className="fn-head">
                <div className="fn-avatar" aria-hidden="true">{n.initials}</div>
                <div>
                  <span className="fn-name">{n.name}</span>
                  <span className="fn-role">{n.role}</span>
                </div>
              </div>
              <div className="fn-chips">
                <span className="fn-chip">{n.device}</span>
                <span className="fn-chip">{n.footage}</span>
              </div>
              <p className="fn-quote">&ldquo;{n.quote}&rdquo;</p>
              <div className="fn-setup">
                <span className="fn-setup-label">Settings that worked</span>
                <span className="fn-setup-value">{n.settings}</span>
              </div>
              <p className="fn-outcome">
                <span className="fn-check" aria-hidden="true">&#x2713;</span>
                {n.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   2. SCENARIOS — use cases with the actual setup (使用场景)
   ========================================================= */
export type Scenario = {
  icon: string;
  title: string;
  problem: string;
  fix: string;
  setup: string;
};

export function Scenarios({
  id,
  kicker,
  heading,
  intro,
  alt,
  items,
}: SectionProps & { items: Scenario[] }) {
  return (
    <section id={id} className={`section${alt ? ' section-alt' : ''}`} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <SectionHead id={id} kicker={kicker} heading={heading} intro={intro} />
        <div className="dive-grid dive-grid-3" role="list">
          {items.map((s, i) => (
            <article className="sc-card" key={i} role="listitem">
              <span className="sc-icon" aria-hidden="true">{s.icon}</span>
              <h3>{s.title}</h3>
              <p className="sc-text">{s.problem}</p>
              <p className="sc-text"><strong>What to do:</strong> {s.fix}</p>
              <span className="sc-setup">{s.setup}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   3. TUTORIALS — step-by-step walkthroughs (教程)
   ========================================================= */
export type Tutorial = {
  level: string;
  time: string;
  title: string;
  intro: string;
  steps: string[];
  href?: string;
  cta?: string;
};

export function Tutorials({
  id,
  kicker,
  heading,
  intro,
  alt,
  items,
}: SectionProps & { items: Tutorial[] }) {
  return (
    <section id={id} className={`section${alt ? ' section-alt' : ''}`} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <SectionHead id={id} kicker={kicker} heading={heading} intro={intro} />
        <div className="dive-grid dive-grid-2" role="list">
          {items.map((t, i) => (
            <article className="tut-card" key={i} role="listitem">
              <div className="tut-meta">
                <span className="tut-badge">{t.level}</span>
                <span className="tut-time">{t.time}</span>
              </div>
              <h3>{t.title}</h3>
              <p className="tut-intro">{t.intro}</p>
              <ol className="tut-steps">
                {t.steps.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ol>
              {t.href ? (
                <Link href={t.href} className="tut-cta">
                  {t.cta || 'Open the tool'} &rarr;
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   4. CAVEATS — honest limits and gotchas (注意事项)
   ========================================================= */
export type Caveat = {
  title: string;
  body: string;
};

export function Caveats({
  id,
  kicker,
  heading,
  intro,
  alt,
  items,
  checklist,
}: SectionProps & { items: Caveat[]; checklist?: { title: string; items: string[] } }) {
  return (
    <section id={id} className={`section${alt ? ' section-alt' : ''}`} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <SectionHead id={id} kicker={kicker} heading={heading} intro={intro} />
        <div className="dive-grid dive-grid-2" role="list">
          {items.map((c, i) => (
            <article className="cav-card" key={i} role="listitem">
              <span className="cav-icon" aria-hidden="true">!</span>
              <div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </article>
          ))}
        </div>
        {checklist ? (
          <div className="dive-callout">
            <h3>{checklist.title}</h3>
            <ul>
              {checklist.items.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
