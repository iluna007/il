export function LinkedText({ text, links = {} }) {
  if (!links || Object.keys(links).length === 0) return <span>{text}</span>;
  const pattern = new RegExp(
    `(${Object.keys(links)
      .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
    "g"
  );
  const parts = text.split(pattern);
  return (
    <span>
      {parts.map((part, i) =>
        links[part] ? (
          <a key={i} href={links[part]} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

export default function CVEntry({ period, title, place, details = [] }) {
  return (
    <div className="cv-entry">
      <div className="entry-year">{period}</div>
      <div className="entry-content">
        {title && (
          <div className="entry-title">
            {place?.url ? (
              <>
                <strong>{title}</strong>
                {" — "}
                <a href={place.url} target="_blank" rel="noopener noreferrer">
                  {place.text}
                </a>
              </>
            ) : (
              <strong>{title}</strong>
            )}
          </div>
        )}
        {details.map((d, i) => {
          if (typeof d === "string") return <p key={i} className="entry-detail">{d}</p>;
          if (d.url) return (
            <p key={i}>
              <a href={d.url} target="_blank" rel="noopener noreferrer">
                {d.text}
              </a>
            </p>
          );
          if (d.links) return (
            <p key={i}>
              <LinkedText text={d.text} links={d.links} />
            </p>
          );
          return <p key={i}>{d.text}</p>;
        })}
      </div>
    </div>
  );
}
