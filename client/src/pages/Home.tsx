/**
 * Style reminder — Ground truth is the supplied Driftwatch reference: calm off-white monitor UI,
 * teal signal states, Space Grotesk hierarchy, mono metadata, rounded application panels, and a full dark mode.
 */
import { useEffect, useState } from "react";
import { ArrowRight, Moon, Sparkles, Sun, X } from "lucide-react";

type Focus = "uptime" | "latency" | "schema";

const monitorRows: Record<Focus, {
  order: string;
  focus: string;
  status: string;
  tone: "ok" | "watch" | "violet";
  trend: string;
  title: string;
  summary: string;
  moves: string[];
}> = {
  uptime: {
    order: "01",
    focus: "/v1/auth/session",
    status: "Operational",
    tone: "ok",
    trend: "M1 22 C13 22 17 20 29 20 S43 18 53 21 S67 16 79 16 S95 13 110 14",
    title: "Know the endpoint is reachable—before users have to ask.",
    summary: "An availability check records a lightweight response and preserves a clear trace when a route stops behaving like its normal baseline.",
    moves: ["Check response availability", "Compare expected headers", "Keep the last healthy trace"],
  },
  latency: {
    order: "02",
    focus: "/v1/checkout",
    status: "Watching",
    tone: "watch",
    trend: "M1 24 C14 25 19 23 27 22 S42 27 50 20 S64 15 72 21 S86 7 98 12 S105 8 110 4",
    title: "See latency move before it becomes a support thread.",
    summary: "Driftwatch compares the latest response window to the route’s normal shape, so a slow trend becomes a signal rather than an after-the-fact outage note.",
    moves: ["Track response-window change", "Mark a rising trend", "Open the relevant trace"],
  },
  schema: {
    order: "03",
    focus: "/v1/catalog/items",
    status: "Shape changed",
    tone: "violet",
    trend: "M1 17 C14 17 19 15 27 18 S44 12 55 13 S71 19 79 13 S91 10 100 8 S107 6 110 8",
    title: "Catch a response-shape change while it is still small.",
    summary: "The monitor makes it easier to spot when an expected field, type, or payload structure starts to differ from the sample your integration expects.",
    moves: ["Compare to a saved response", "Flag the changed field", "Share a concise diff"],
  },
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function LogoMark() {
  return <svg className="logo-mark" viewBox="0 0 28 16" aria-hidden="true"><path d="M1 12 L7 12 L9 4 L12 14 L14 8 L16 12 L22 12" /><circle cx="25" cy="12" r="2" /></svg>;
}

function Trend({ path, tone }: { path: string; tone: "ok" | "watch" | "violet" }) {
  return <svg className={`trend trend-${tone}`} viewBox="0 0 112 30" preserveAspectRatio="none" aria-label="Example response trend"><path d={path} /></svg>;
}

export default function Home() {
  const [focus, setFocus] = useState<Focus>("latency");
  const [isDark, setIsDark] = useState(false);
  const [eggOpen, setEggOpen] = useState(false);
  const active = monitorRows[focus];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const sequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let keys: string[] = [];
    const onKeyDown = (event: KeyboardEvent) => {
      keys = [...keys, event.key].slice(-sequence.length);
      if (keys.every((key, index) => key === sequence[index])) {
        setEggOpen(true);
        keys = [];
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="app-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="nav-inner">
          <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Driftwatch home">
            <LogoMark /><span>Driftwatch</span><small>MON/26</small>
          </button>
          <div className="nav-links">
            <a href="#product">Product</a>
            <a href="#method">How it works</a>
            <a href="#notes">Notes</a>
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={() => setIsDark(!isDark)} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="button button-ghost nav-signin" onClick={() => scrollTo("product")}>Sign in</button>
            <button className="button button-primary" onClick={() => scrollTo("product")}>Start monitoring</button>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />Endpoint monitoring for small teams</p>
            <h1 id="hero-title">Know when your API <em>drifts</em>, before your users do.</h1>
            <p className="hero-sub">Driftwatch watches endpoint availability, response windows, and payload shape—so a route that stops looking like itself is visible before it becomes a support ticket.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollTo("product")}>See live checks <ArrowRight size={16} /></button>
              <button className="button button-ghost" onClick={() => scrollTo("method")}>How monitoring works <ArrowRight size={16} /></button>
            </div>
            <p className="hero-note">Concept prototype · Example endpoint data only</p>
          </div>

          <div className="status-strip" aria-label="Endpoint monitor example">
            <div className="status-strip-head"><span className="signal-notation"><LogoMark />driftwatch / monitor / 26</span><span className="live-status"><i />Watching</span></div>
            <div className="signal-canvas" aria-hidden="true">
              <svg viewBox="0 0 940 180" preserveAspectRatio="none">
                <defs><linearGradient id="signalFill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="currentColor" stopOpacity=".22" /><stop offset="1" stopColor="currentColor" stopOpacity="0" /></linearGradient></defs>
                <path className="signal-fill" d="M0 150 C75 147 85 122 145 126 S215 105 279 128 S354 95 422 108 S505 70 573 97 S652 58 713 80 S793 20 862 57 S908 21 940 25 L940 180 L0 180 Z" />
                <path className="signal-line" d="M0 150 C75 147 85 122 145 126 S215 105 279 128 S354 95 422 108 S505 70 573 97 S652 58 713 80 S793 20 862 57 S908 21 940 25" />
              </svg>
              <span className="signal-callout signal-callout-one">Response window rising</span>
              <span className="signal-callout signal-callout-two">Payload shape changed</span>
            </div>
            <div className="status-summary">
              <div><span>Endpoint</span><strong>/v1/checkout</strong></div>
              <div><span>Signal</span><strong className="amber-text">Latency shift</strong></div>
              <div><span>Last check</span><strong>Example / 09:20</strong></div>
              <button onClick={() => scrollTo("product")}>Inspect checks <ArrowRight size={15} /></button>
            </div>
          </div>
        </section>

        <section className="honest-strip"><div className="wrap"><p>Built around a simple belief: <strong>early drift is easier to fix than a support thread.</strong></p></div></section>

        <section className="product-section wrap" id="product" aria-labelledby="product-title">
          <div className="section-head">
            <span className="kicker"><LogoMark />ENDPOINT.MONITOR / LIVE SURFACE</span>
            <h2 id="product-title">See what changed before it becomes a downtime report.</h2>
            <p>Switch the example checks to see how Driftwatch turns endpoint behavior into a readable, focused signal.</p>
          </div>

          <div className="brief-card" aria-label="Interactive endpoint monitor">
            <div className="brief-toolbar">
              <div className="toolbar-left"><LogoMark /><span className="toolbar-dots"><i /><i /><i /></span><span className="toolbar-path">driftwatch / endpoint monitor / 26</span></div>
              <span className="toolbar-state"><i />Live example</span>
            </div>
            <div className="brief-grid">
              <div className="brief-table">
                <div className="brief-row brief-table-head"><span>Endpoint</span><span>State</span><span>Trend</span><span>Open</span></div>
                {(Object.keys(monitorRows) as Focus[]).map((item) => {
                  const row = monitorRows[item];
                  return <button key={item} className={focus === item ? "brief-row active" : "brief-row"} onClick={() => setFocus(item)} aria-pressed={focus === item}>
                    <span className="focus-name"><b>{row.order}</b>{row.focus}</span>
                    <span className={`pill pill-${row.tone}`}><i />{row.status}</span>
                    <Trend path={row.trend} tone={row.tone} />
                    <ArrowRight size={16} className="row-arrow" />
                  </button>;
                })}
              </div>
              <article className="brief-detail" aria-live="polite">
                <div className="detail-kicker"><span className={`detail-status detail-${active.tone}`}><i />{active.status}</span><span>CHECK {active.order}</span></div>
                <h3>{active.title}</h3>
                <p>{active.summary}</p>
                <ol className="moves-list">
                  {active.moves.map((move, index) => <li key={move}><span>{String(index + 1).padStart(2, "0")}</span>{move}</li>)}
                </ol>
                <button className="detail-action" onClick={() => scrollTo("method")}>See how checks run <ArrowRight size={15} /></button>
              </article>
            </div>
          </div>
        </section>

        <section className="feature-section" aria-labelledby="feature-title"><div className="wrap">
          <div className="section-head"><span className="kicker"><LogoMark />SYSTEM.READOUT / 03</span><h2 id="feature-title">Monitor the changes that matter. Skip the dashboard theatre.</h2></div>
          <div className="feature-grid">
            <article className="feature"><div className="feature-meta"><span>01 / AVAILABILITY</span><span><i />CHECKED</span></div><h3>Reachability, with context</h3><p>Keep the response state, expected headers, and the last healthy trace connected to the same route.</p><div className="telemetry-rule"><span>response trace</span><b /></div></article>
            <article className="feature"><div className="feature-meta"><span>02 / LATENCY</span><span className="watch"><i />WATCHING</span></div><h3>Latency drift</h3><p>Notice a response window shifting away from its normal shape while there is still time to inspect it.</p><div className="telemetry-rule"><span>window delta</span><b /></div></article>
            <article className="feature"><div className="feature-meta"><span>03 / SCHEMA</span><span className="violet"><i />COMPARED</span></div><h3>Payload shape changes</h3><p>Surface a changed field or response structure without burying the useful difference in noisy logs.</p><div className="telemetry-rule"><span>shape diff</span><b /></div></article>
          </div>
        </div></section>

        <section className="method-section wrap" id="method" aria-labelledby="method-title">
          <div className="section-head"><span className="kicker"><LogoMark />CHECK.SEQUENCE / 03 STEPS</span><h2 id="method-title">Set a baseline. Let the change speak for itself.</h2><p>Driftwatch is designed around a small monitoring loop that is visible enough to act on and quiet enough to stay out of the way.</p></div>
          <div className="timeline" aria-label="Driftwatch monitoring sequence">
            <article className="timeline-step active"><span className="timeline-time">C-01 / SET A ROUTE</span><h3>Define what normal looks like.</h3><p>Choose the endpoint, the expected response characteristics, and a respectful schedule for an example monitor.</p><span className="timeline-readout"><i />BASELINE READY</span></article>
            <article className="timeline-step"><span className="timeline-time">C-02 / CHECK THE WINDOW</span><h3>Compare new behavior with the baseline.</h3><p>Watch availability, response time, and payload structure as one coherent signal rather than three disconnected graphs.</p><span className="timeline-readout watch"><i />WINDOW OBSERVED</span></article>
            <article className="timeline-step"><span className="timeline-time">C-03 / INVESTIGATE EARLY</span><h3>Open the trace while the change is still small.</h3><p>Keep the summary close to the underlying signal so the right person can start with context rather than a vague alert.</p><span className="timeline-readout violet"><i />TRACE LINKED</span></article>
          </div>
        </section>

        <section className="cta-section wrap" id="notes" aria-labelledby="cta-title">
          <div className="cta-band"><div className="cta-readout"><LogoMark /><span>DRIFTWATCH / ENDPOINT SIGNAL / MON-26</span><span><i />READY WHEN YOU ARE</span></div><Sparkles size={24} aria-hidden="true" /><h2 id="cta-title">Find drift before it reaches a support ticket.</h2><p>Driftwatch is a concept for small teams that want to understand API behavior before customers have to explain it back to them.</p><button className="button button-primary" onClick={() => scrollTo("product")}>Return to the checks <ArrowRight size={16} /></button></div>
        </section>
      </main>

      <footer><div className="wrap footer-inner"><div className="brand footer-brand"><LogoMark /><span>Driftwatch</span><small>MON/26</small></div><p>Endpoint monitoring for small teams, with less alert noise.</p><span>© 2026 DRIFTWATCH / CONCEPT PROJECT</span></div></footer>

      <div className={eggOpen ? "egg-overlay show" : "egg-overlay"} role="dialog" aria-modal="true" aria-label="Easter egg" aria-hidden={!eggOpen}>
        <div className="egg-card"><button className="egg-close" onClick={() => setEggOpen(false)} aria-label="Close easter egg"><X size={17} /></button><LogoMark /><h2>Signal found.</h2><p>You found an undocumented health check. Keep watching the small changes.</p><button className="button button-primary" onClick={() => setEggOpen(false)}>Back to checks</button></div>
      </div>
    </div>
  );
}
