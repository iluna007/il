import { cvData } from "../data/cvData";
import SocialLinks from "./SocialLinks";

function BioWithLinks({ text, links }) {
  const parts = text.split(/\{([^}]+)\}/g);
  return (
    <p className="bio">
      {parts.map((part, i) => {
        if (links[part]) {
          return (
            <a key={i} href={links[part]} target="_blank" rel="noopener noreferrer">
              {part}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

export default function Header({ lang }) {
  const data = cvData[lang];
  const { contact } = cvData.es;

  return (
    <header className="cv-header">
      <h1>{data.name}</h1>
      <div className="contact-line">
        <a href={contact.phone.url}>{contact.phone.text}</a>
        <span className="contact-sep" aria-hidden="true">·</span>
        <a href={contact.location.url} target="_blank" rel="noopener noreferrer">
          {contact.location.text}
        </a>
        <span className="contact-sep" aria-hidden="true">·</span>
        <a href={contact.email1.url}>{contact.email1.text}</a>
        <span className="contact-sep" aria-hidden="true">·</span>
        <a href={contact.email2.url}>{contact.email2.text}</a>
      </div>
      <SocialLinks links={data.socialLinks} lang={lang} />
      <div className="bio-box">
        <BioWithLinks text={data.bio.text} links={data.bio.links} />
      </div>
    </header>
  );
}
