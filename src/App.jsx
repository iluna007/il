import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import CVEntry, { LinkedText } from "./components/CVEntry";
import { cvData } from "./data/cvData";
import "./App.css";

export default function App() {
  const [lang] = useState("es");

  const data = cvData[lang];
  const s = data.sections;

  return (
    <div className="app" data-theme="dark">
      <Navbar />

      <main className="cv-main" id="cv-content">
        <Header lang={lang} />

        <Section title={s.education}>
          {cvData[lang].education.map((edu, i) => (
            <CVEntry
              key={i}
              period={edu.year}
              title={edu.title}
              place={edu.institution}
              details={edu.details}
            />
          ))}
        </Section>

        <Section title={s.academicExp}>
          <h3 className="subsection-title">{s.teaching}</h3>
          {cvData[lang].teachingExp.map((t, i) => (
            <CVEntry
              key={i}
              period={t.period}
              title={t.title}
              place={t.place}
              details={t.details || []}
            />
          ))}

          <h3 className="subsection-title">{s.research}</h3>
          {cvData[lang].researchExp.map((r, i) => (
            <CVEntry
              key={i}
              period={r.period}
              title={r.title}
              place={r.place}
              details={r.details || []}
            />
          ))}
        </Section>

        <Section title={s.publications}>
          <h3 className="subsection-title">{s.peerReviewed}</h3>
          {cvData[lang].publications.peerReviewed.map((p, i) => (
            <div key={i} className="cv-entry">
              <div className="entry-year">{p.year || p.status}</div>
              <div className="entry-content">
                <p className="pub-title">{p.title}</p>
                {p.journal && (
                  <p>
                    <a href={p.journal.url} target="_blank" rel="noopener noreferrer">
                      {p.journal.text}
                    </a>
                  </p>
                )}
                {p.doi && (
                  <p>
                    <a href={p.doi.url} target="_blank" rel="noopener noreferrer">
                      {p.doi.text}
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}

          <h3 className="subsection-title">{s.bookChapters}</h3>
          {cvData[lang].publications.bookChapters.map((b, i) => (
            <div key={i} className="cv-entry">
              <div className="entry-year">{b.year}</div>
              <div className="entry-content">
                <p className="pub-title">{b.title}</p>
                <p>
                  <a href={b.publisher.url} target="_blank" rel="noopener noreferrer">
                    {b.publisher.text}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </Section>

        <Section title={s.conferences}>
          {cvData[lang].conferences.map((c, i) => (
            <div key={i} className="cv-entry">
              <div className="entry-year">{c.year}</div>
              <div className="entry-content">
                <p>
                  <strong>{c.role}</strong> —{" "}
                  <a href={c.event.url} target="_blank" rel="noopener noreferrer">
                    {c.event.text}
                  </a>
                </p>
                <p className="entry-detail">{c.paper}</p>
                <p>{c.panel}</p>
              </div>
            </div>
          ))}
        </Section>

        <Section title={s.platforms}>
          {cvData[lang].platforms.map((p, i) => (
            <div key={i} className="cv-entry">
              <div className="entry-year">{p.period}</div>
              <div className="entry-content">
                <p>
                  <strong>{p.title}</strong> —{" "}
                  <a href={p.org.url} target="_blank" rel="noopener noreferrer">
                    {p.org.text}
                  </a>
                </p>
                <p className="entry-detail">{p.desc}</p>
                <p>
                  <a href={p.link.url} target="_blank" rel="noopener noreferrer">
                    {p.link.text}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </Section>

        <Section title={s.social}>
          {cvData[lang].social.map((s2, i) => (
            <CVEntry
              key={i}
              period={s2.period}
              title={s2.title}
              place={s2.place}
              details={[s2.desc]}
            />
          ))}
        </Section>

        <Section title={s.exhibitions}>
          {cvData[lang].exhibitions.map((e, i) => (
            <div key={i} className="cv-entry">
              <div className="entry-year">{e.year}</div>
              <div className="entry-content">
                <p>
                  <strong>{e.title}</strong> {e.subtitle && <em>{e.subtitle}</em>}
                </p>
                <p>
                  <a href={e.venue.url} target="_blank" rel="noopener noreferrer">
                    {e.venue.text}
                  </a>
                </p>
                <p className="entry-detail">{e.desc}</p>
              </div>
            </div>
          ))}
        </Section>

        <Section title={s.awards}>
          {cvData[lang].awards.map((a, i) => (
            <div key={i} className="cv-entry">
              <div className="entry-year">{a.year}</div>
              <div className="entry-content">
                <p>
                  <strong>{a.award}</strong>,{" "}
                  <a href={a.event.url} target="_blank" rel="noopener noreferrer">
                    {a.event.text}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </Section>

        <Section title={s.professional}>
          {cvData[lang].professional.map((p, i) => (
            <div key={i} className="cv-entry">
              <div className="entry-year">{p.period}</div>
              <div className="entry-content">
                <LinkedText text={`${p.title} — ${p.place}`} links={p.links || {}} />
              </div>
            </div>
          ))}
        </Section>

        <Section title={s.communities}>
          {cvData[lang].communities.map((c, i) => (
            <div key={i} className="cv-entry">
              <div className="entry-year">{c.period}</div>
              <div className="entry-content">
                <p>
                  <strong>{c.role}</strong>,{" "}
                  <a href={c.org.url} target="_blank" rel="noopener noreferrer">
                    {c.org.text}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </Section>

        <Section title={s.skills}>
          <div className="cv-entry">
            <div className="entry-year">{lang === "es" ? "Idiomas" : "Languages"}</div>
            <div className="entry-content">
              <p>{cvData[lang].skillsSection.languages}</p>
            </div>
          </div>
          <div className="cv-entry">
            <div className="entry-year">Software</div>
            <div className="entry-content">
              <p>
                {cvData.es.skillsSection.software.map((sw, i) => (
                  <span key={i}>
                    <a href={sw.url} target="_blank" rel="noopener noreferrer">
                      {sw.text}
                    </a>
                    {i < cvData.es.skillsSection.software.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="cv-entry">
            <div className="entry-year">{lang === "es" ? "Código" : "Code"}</div>
            <div className="entry-content">
              <p>
                {cvData.es.skillsSection.code.map((c, i) => (
                  <span key={i}>
                    <a href={c.url} target="_blank" rel="noopener noreferrer">
                      {c.text}
                    </a>
                    {i < cvData.es.skillsSection.code.length - 1 ? ",  " : ""}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
