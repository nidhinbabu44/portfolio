export default function Section({ id, index, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <header className="section-head reveal">
          <span className="section-index">{index}</span>
          <h2>{title}</h2>
          <span className="section-rule" aria-hidden="true" />
        </header>
        {children}
      </div>
    </section>
  );
}
