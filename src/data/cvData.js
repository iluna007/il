// src/data/cvData.js

const contact = {
  phone: { text: "+(506) 63613101", url: "tel:+50663613101" },
  location: { text: "San José, Costa Rica", url: "https://maps.google.com/?q=San+José,+Costa+Rica" },
  email1: { text: "arquitectoikerluna@gmail.com", url: "mailto:arquitectoikerluna@gmail.com" },
  email2: { text: "iker.luna@ucr.ac.cr", url: "mailto:iker.luna@ucr.ac.cr" },
};

const socialLinks = [
  {
    id: "instagram",
    url: "https://www.instagram.com/paisajevibracional/",
    label: { es: "Instagram — Paisaje Vibracional", en: "Instagram — Paisaje Vibracional" },
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/iker-l-05484b80/?skipRedirect=true",
    label: { es: "LinkedIn — Iker Luna", en: "LinkedIn — Iker Luna" },
  },
];

const skillsSectionShared = {
  software: [
    { text: "Rhinoceros", url: "https://www.rhino3d.com/" },
    { text: "Grasshopper", url: "https://www.grasshopper3d.com/" },
    { text: "Revit", url: "https://www.autodesk.com/products/revit/" },
    { text: "Blender", url: "https://www.blender.org/" },
    { text: "QGIS", url: "https://qgis.org/" },
    { text: "Unreal Engine", url: "https://www.unrealengine.com/" },
    { text: "Twinmotion", url: "https://www.twinmotion.com/" },
    { text: "Photoshop", url: "https://www.adobe.com/products/photoshop.html" },
    { text: "Premiere Pro", url: "https://www.adobe.com/products/premiere.html" },
    { text: "Illustrator", url: "https://www.adobe.com/products/illustrator.html" },
    { text: "InDesign", url: "https://www.adobe.com/products/indesign.html" },
  ],
  code: [
    { text: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { text: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { text: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { text: "React", url: "https://react.dev/" },
    { text: "Three.js", url: "https://threejs.org/" },
    { text: "Python", url: "https://www.python.org/" },
  ],
};

export const cvData = {
  es: {
    name: "Iker Luna",
    contact,
    socialLinks,
    bio: {
      text: "Arquitecto e investigador con posgrados en Research Architecture ({Goldsmiths, University of London}) y en Advanced Architecture ({IAAC, Barcelona}). Su práctica constituye uno de los primeros desarrollos sistemáticos de la investigación arquitectónica forense con base institucional en Centroamérica. Ha trabajado como asistente de investigación en {Forensic Architecture} e investigador en {Re/Presentare}, aplicando análisis geoespaciales, fotogrametría y fuentes abiertas a casos de violencia política en {Nicaragua}, {Honduras} y {Gaza}. Docente visitante en la {Escuela de Arquitectura de la Universidad de Costa Rica}.",
      links: {
        "Goldsmiths, University of London": "https://www.gold.ac.uk/",
        "IAAC, Barcelona": "https://iaac.net/",
        "Forensic Architecture": "https://forensic-architecture.org/",
        "Re/Presentare": "https://re-presentare.org/",
        "Nicaragua": "https://es.wikipedia.org/wiki/Nicaragua",
        "Honduras": "https://es.wikipedia.org/wiki/Honduras",
        "Gaza": "https://es.wikipedia.org/wiki/Franja_de_Gaza",
        "Escuela de Arquitectura de la Universidad de Costa Rica": "https://arquis.ucr.ac.cr/",
      },
    },
    sections: {
      intro: "PERFIL",
      education: "EDUCACIÓN",
      academicExp: "EXPERIENCIAS ACADÉMICAS",
      teaching: "DOCENCIA",
      research: "INVESTIGACIÓN",
      publications: "PUBLICACIONES",
      peerReviewed: "REVISADAS POR PARES",
      bookChapters: "CAPÍTULOS DE LIBRO Y ENSAYOS",
      conferences: "CONGRESOS ACADÉMICOS",
      platforms: "PLATAFORMAS DIGITALES",
      social: "ACCIÓN SOCIAL",
      exhibitions: "EXHIBICIONES",
      awards: "PREMIOS Y BECAS",
      professional: "EXPERIENCIA PROFESIONAL",
      communities: "COMUNIDADES INVESTIGATIVAS",
      skills: "IDIOMAS Y HABILIDADES",
    },
    education: [
      {
        year: "2025",
        title: "Master of Arts — Research Architecture",
        institution: {
          text: "Centre for Research Architecture, Department of Visual Cultures, Goldsmiths, University of London",
          url: "https://www.gold.ac.uk/architecture/",
        },
        details: [
          {
            text: 'Tesis: "Counter-logistical Landscapes: The Nicaraguan Case" — investigación espacial, archivos, cartografía',
          },
          {
            text: "Tutores: Dr. Susan Schuppli y Dr. Christina Varvia",
            links: {
              "Dr. Susan Schuppli": "https://susanschuppli.com/",
              "Dr. Christina Varvia": "https://research-architecture.org/Christina-Varvia",
            },
          },
        ],
      },
      {
        year: "2013",
        title: "Master in Advanced Architecture",
        institution: {
          text: "Institute for Advanced Architecture of Catalonia (IAAC), Barcelona",
          url: "https://iaac.net/",
        },
        details: [
          {
            text: "Proyecto final: [BCS] Bio Ceramic System — prototipos cerámicos biorreceptivos; imágenes NIR/NDVI; propiedades térmicas y acústicas",
          },
          {
            text: "Tutor: MA.Arch. Luis Fraguada",
            links: { "Luis Fraguada": "https://iaac.net/people/luis-fraguada/" },
          },
        ],
      },
      {
        year: "2009",
        title: "Arquitectura",
        institution: {
          text: "Universidad Americana (UAM), Managua, Nicaragua",
          url: "https://uam.edu.ni/",
        },
        details: [
          {
            text: "Reconocimiento y Equiparación: Tecnológico de Costa Rica",
            links: { "Tecnológico de Costa Rica": "https://www.tec.ac.cr/" },
          },
        ],
      },
    ],
    teachingExp: [
      {
        period: "2023 – presente",
        title: "Docente Visitante",
        place: {
          text: "Escuela de Arquitectura, Universidad de Costa Rica (UCR)",
          url: "https://arquis.ucr.ac.cr/",
        },
        details: [
          "Talleres de diseño 3, 4, 5, 6, 7 y 8: Seminarios sobre representación espacial, análisis urbano e investigación proyectual, integrando la cartografía y la interpretación crítica de las condiciones sociales y políticas del territorio costarricense.",
          "Cursos avanzados sobre el uso de la inteligencia artificial en la arquitectura.",
          "Cursos avanzados: Ciudad y violencia: una perspectiva contraforense.",
          { text: "Comisión del Nuevo plan de Estudio", url: "https://pdearquis.wordpress.com/" },
          "Comisión de docencia.",
          "Director y lector de tesis.",
        ],
      },
      {
        period: "2016 – 2020",
        title: "Docente parcial",
        place: {
          text: "Escuela de Arquitectura, Universidad Americana (UAM), Managua",
          url: "https://uam.edu.ni/",
        },
      },
      {
        period: "2018 – 2020",
        title: "Docente parcial",
        place: {
          text: "Escuela de Arquitectura, Universidad Centroamericana (UCA), Managua",
          url: "https://www.uca.edu.ni/",
        },
      },
    ],
    researchExp: [
      {
        period: "2026 – presente",
        title: "Investigador principal",
        place: { text: "Escuela de Arquitectura, UCR", url: "https://arquis.ucr.ac.cr/" },
        details: [
          "(Pry01-88-2027) Arquitectura forense y análisis de visibilidad: estudio experimental del Edificio de Arquitectura de la UCR ante escenarios de atacante activo.",
        ],
      },
      {
        period: "2025 – presente",
        title: "Investigador",
        place: { text: "Re/Presentare, San José", url: "https://re-presentare.org/" },
        details: [
          "Investigación e interpretación de materiales de archivo y datos geoespaciales; desarrollo de plataformas digitales públicas. Formación técnica para los equipos de Forensic Architecture.",
        ],
      },
      {
        period: "2025",
        title: "Asistente de Investigación",
        place: {
          text: "Forensic Architecture, Goldsmiths, University of London",
          url: "https://forensic-architecture.org/",
        },
        details: [
          {
            text: "Verificación de datos satelitales; geolocalización de incidentes; análisis de patrones mediante dibujo; implementación de filtros e interfaz de usuario.",
            url: "https://forensic-architecture.org/investigation/aid-in-gaza",
          },
        ],
      },
    ],
    publications: {
      peerReviewed: [
        {
          status: "En revisión",
          title: '"Disruptive Technical Objects and Counter Logistical Landscapes: The Nicaraguan Case"',
          journal: {
            text: "Architecture and Culture, vol. 14. Submission ID 255096835.",
            url: "https://www.tandfonline.com/journals/rfac20",
          },
        },
        {
          year: "2024",
          title: '"Arquitectura, violencia y memoria: El caso del ataque paraestatal a la UNAN-Managua en julio del 2018."',
          journal: {
            text: "Revista de Arquitectura, vol. 13, no. 2.",
            url: "https://doi.org/10.15517/ra.v13i2.60182",
          },
          doi: {
            text: "DOI: https://doi.org/10.15517/ra.v13i2.60182",
            url: "https://doi.org/10.15517/ra.v13i2.60182",
          },
        },
        {
          year: "2024",
          title: '"El uso de MidJourney como herramienta en las etapas iniciales del diseño arquitectónico."',
          journal: {
            text: "Bitácora Arquitectura, no. 54.",
            url: "https://doi.org/10.22201/fa.14058901p.2024.54.89984",
          },
          doi: {
            text: "DOI: https://doi.org/10.22201/fa.14058901p.2024.54.89984",
            url: "https://doi.org/10.22201/fa.14058901p.2024.54.89984",
          },
        },
      ],
      bookChapters: [
        {
          year: "2025",
          title: '"Becoming Güegüense."',
          publisher: {
            text: "En Echoes, Programa de Maestría CRA. Goldsmiths, University of London. ISBN 978-1-0369-3576-4.",
            url: "https://www.gold.ac.uk/architecture/",
          },
        },
        {
          year: "2015",
          title: "Contribución.",
          publisher: {
            text: "En Schwarz, E. (ed.), Fourth Holcim Awards – Sustainable Construction 2014/2015. Zúrich: Holcim Sustainable Construction Press. ISBN 978-3-033-05095-2.",
            url: "https://www.holcimfoundation.org/awards",
          },
        },
      ],
    },
    conferences: [
      {
        year: "2026",
        role: "Expositor",
        event: { text: "LASA Central America 2026", url: "https://lasaweb.org/" },
        paper: '"Entre el mandato y la búsqueda: la investigación visual y espacial sobre el asesinato de Berta Cáceres Flores en acompañamiento del GIEI-Honduras."',
        panel: "Mesa: Violencias y Derechos Humanos",
      },
    ],
    platforms: [
      {
        period: "2026",
        title: "Portafolio web personal",
        org: { text: "Sitio de portafolio profesional", url: "https://ikerluna.netlify.app/" },
        desc: "Sitio web responsivo de portafolio arquitectónico e investigación. Diseño, front-end y despliegue en producción.",
        link: { text: "ikerluna.netlify.app", url: "https://ikerluna.netlify.app/" },
      },
      {
        period: "2024 – 2026",
        title: "Plataforma Interactiva Berta Cáceres",
        org: { text: "Re/Presentare / GIEI-Honduras", url: "https://re-presentare.org/" },
        desc: "Encargado del Frontend y Backend. Plataforma cartográfica e interactiva para visualizar miles de eventos del expediente del GIEI-Honduras, revelando patrones y estructuras de operación en el tiempo y en el territorio.",
        link: { text: "bertaceres.re-presentare.org", url: "https://bertacaceres.re-presentare.org/" },
      },
      {
        period: "2025",
        title: "Sounding Ice",
        org: { text: "Plataforma de grabación de campo", url: "https://sounding-ice.ca/" },
        desc: "Encargado del Frontend y Backend. Plataforma web para navegar grabaciones de campo por categorías temáticas, orientada al acceso público e investigación ecológica.",
        link: { text: "sounding-ice.ca", url: "https://sounding-ice.ca/" },
      },
      {
        period: "2024",
        title: "Finnja Willner",
        org: { text: "Sitio de portafolio artístico", url: "https://finnjawillner.de/" },
        desc: "Sitio web responsivo que traduce una práctica artística audiovisual en arquitectura de información clara. Front-end, estructura de contenidos y despliegue en producción.",
        link: { text: "finnjawillner.de", url: "https://finnjawillner.de/" },
      },
    ],
    social: [
      {
        period: "2026 – presente",
        title: "Co-responsable y creador del archivo web",
        place: { text: "Vice-rectorado de Investigación UCR", url: "https://arquis.ucr.ac.cr/accion-social/proyectos-accion-social/ec-640.html" },
        desc: "EC-640 | Memorias vivas: preservación de la identidad local y del patrimonio cultural de Golfito y Puerto Jiménez.",
      },
      {
        period: "2021 – 2022",
        title: "Modelado 3D y Desarrollo VR",
        place: { text: "Sé Humano, Costa Rica", url: "https://sehumano.org/" },
        desc: "Instalación de realidad virtual que reconstruye espacios de detención política en Nicaragua como testimonio público.",
      },
      {
        period: "2005 – 2009",
        title: "Coordinador de Construcción",
        place: { text: "TECHO, Nicaragua / Costa Rica / Haití", url: "https://www.techo.org/" },
        desc: "Vivienda de emergencia; análisis de asentamientos informales; redacción de manual de construcción; coordinación de voluntarios.",
      },
    ],
    exhibitions: [
      {
        year: "2025",
        title: "Reverberations",
        subtitle: "(Cohorte MA Research Architecture)",
        venue: {
          text: "St James Church, Londres, Reino Unido",
          url: "https://www.gold.ac.uk/calendar/?id=15619",
        },
        desc: "Artista participante; redacción de textos de sala; logística, montaje y configuración espacial.",
      },
      {
        year: "2023",
        title: "Latinoamérica sin presos políticos",
        subtitle: "Sé Humano",
        venue: {
          text: "Fundación Carlos de Amberes, Madrid, España",
          url: "https://www.fcamberes.org/",
        },
        desc: "Artista participante: experiencia de realidad virtual que reconstruye una celda de detención política en Nicaragua.",
      },
    ],
    awards: [
      {
        year: "2025",
        award: "1er Premio",
        event: {
          text: "Mirage Thread Costa Rica — Salone del Mobile Milano, Italia.",
          url: "https://www.salonemilano.it/",
        },
      },
      {
        year: "2023 – 2024",
        award: "Beca",
        event: {
          text: "Central America Campus for Academic Freedom — Universidad de Costa Rica (UCR)",
          url: "https://www.ucr.ac.cr/noticias/2022/11/30/el-campus-centroamerica-por-la-libertad-de-catedra-abre-su-primera-convocatoria.html",
        },
      },
      {
        year: "2022",
        award: "Subvención",
        event: { text: "El Flotador — TEOR/ética", url: "https://teoretica.org/2022/05/23/anuncio-seleccionades-beca-el-flotador-2022/" },
      },
      {
        year: "2014 – 2015",
        award: "3er Premio",
        event: {
          text: "Europe Next Generation — Holcim Lafarge Foundation",
          url: "https://www.holcimfoundation.org/",
        },
      },
    ],
    professional: [
      {
        period: "2022 – 2024",
        title: "Arquitecto de proyecto",
        place: "Casa Komorebi (Studio Saxe) — Costa Rica. Vivienda.",
        links: { "Studio Saxe": "https://studiosaxe.com/" },
      },
      { period: "2023", title: "Arquitecto de proyecto", place: "Cabinas Riccelli — Nicaragua. Vivienda." },
      { period: "2022", title: "Arquitecto de proyecto", place: "Cabinas Machete — Nicaragua. Vivienda." },
      {
        period: "2018",
        title: "Arquitecto de proyecto",
        place: "Jardín Comunitario y Laboratorio de Mariposas (Fundación Apapachoa) — Nicaragua.",
        links: { "Fundación Apapachoa": "https://apapachoa.net/" },
      },
      {
        period: "2015",
        title: "Arquitecto de proyecto",
        place: "Earth Office (Rancho Santana) — Nicaragua. Oficina Rural.",
        links: { "Rancho Santana": "https://ranchosantana.com/" },
      },
    ],
    communities: [
      {
        period: "2025 – presente",
        role: "Alumni / Miembro General",
        org: { text: "Goldsmiths University of London, Londres.", url: "https://www.gold.ac.uk/" },
      },
      {
        period: "2025 – presente",
        role: "Investigador",
        org: {
          text: "Re/Presentare. Red miembro de Investigative Commons.",
          url: "https://re-presentare.org/",
        },
      },
      {
        period: "2024 – presente",
        role: "Investigador",
        org: {
          text: "RIAAD — Red de Investigación Aplicada y Alternativas al Desarrollo",
          url: "https://riaad.org/",
        },
      },
      {
        period: "2014 – presente",
        role: "Alumni / Miembro General",
        org: { text: "IAAC, Barcelona.", url: "https://iaac.net/" },
      },
    ],
    skillsSection: {
      languages: "Español (nativo) · Inglés C1 · Italiano (básico)",
      ...skillsSectionShared,
    },
  },

  en: {
    name: "Iker Luna",
    contact,
    socialLinks,
    bio: {
      text: "Architect and researcher with postgraduate degrees in Research Architecture ({Goldsmiths, University of London}) and Advanced Architecture ({IAAC, Barcelona}). His practice is one of the first systematic developments of institutionally grounded forensic architectural research in Central America. He has worked as a research assistant at {Forensic Architecture} and as a researcher at {Re/Presentare}, applying geospatial analysis, photogrammetry, and open-source investigation to cases of political violence in {Nicaragua}, {Honduras}, and {Gaza}. Visiting lecturer at the {School of Architecture, University of Costa Rica}.",
      links: {
        "Goldsmiths, University of London": "https://www.gold.ac.uk/",
        "IAAC, Barcelona": "https://iaac.net/",
        "Forensic Architecture": "https://forensic-architecture.org/",
        "Re/Presentare": "https://re-presentare.org/",
        "Nicaragua": "https://en.wikipedia.org/wiki/Nicaragua",
        "Honduras": "https://en.wikipedia.org/wiki/Honduras",
        "Gaza": "https://en.wikipedia.org/wiki/Gaza_Strip",
        "School of Architecture, University of Costa Rica": "https://arquitectura.ucr.ac.cr/",
      },
    },
    sections: {
      intro: "PROFILE",
      education: "EDUCATION",
      academicExp: "ACADEMIC EXPERIENCE",
      teaching: "TEACHING",
      research: "RESEARCH",
      publications: "PUBLICATIONS",
      peerReviewed: "PEER-REVIEWED",
      bookChapters: "BOOK CHAPTERS & ESSAYS",
      conferences: "ACADEMIC CONFERENCES",
      platforms: "DIGITAL PLATFORMS",
      social: "SOCIAL ACTION",
      exhibitions: "EXHIBITIONS",
      awards: "AWARDS & GRANTS",
      professional: "PROFESSIONAL EXPERIENCE",
      communities: "RESEARCH COMMUNITIES",
      skills: "LANGUAGES & SKILLS",
    },
    education: [
      {
        year: "2025",
        title: "Master of Arts — Research Architecture",
        institution: {
          text: "Centre for Research Architecture, Department of Visual Cultures, Goldsmiths, University of London",
          url: "https://www.gold.ac.uk/architecture/",
        },
        details: [
          {
            text: 'Thesis: "Counter-logistical Landscapes: The Nicaraguan Case" — spatial research, archives, cartography',
          },
          {
            text: "Supervisors: Dr. Susan Schuppli and Dr. Christina Varvia",
            links: {
              "Dr. Susan Schuppli": "https://susanschuppli.com/",
              "Dr. Christina Varvia": "https://research-architecture.org/Christina-Varvia",
            },
          },
        ],
      },
      {
        year: "2013",
        title: "Master in Advanced Architecture",
        institution: {
          text: "Institute for Advanced Architecture of Catalonia (IAAC), Barcelona",
          url: "https://iaac.net/",
        },
        details: [
          {
            text: "Final project: [BCS] Bio Ceramic System — bioreceptive ceramic prototypes; NIR/NDVI imagery; thermal and acoustic properties",
          },
          {
            text: "Supervisor: MA.Arch. Luis Fraguada",
            links: { "Luis Fraguada": "https://iaac.net/people/luis-fraguada/" },
          },
        ],
      },
      {
        year: "2009",
        title: "Architecture",
        institution: {
          text: "Universidad Americana (UAM), Managua, Nicaragua",
          url: "https://uam.edu.ni/",
        },
        details: [
          {
            text: "Recognition and Equivalency: Tecnológico de Costa Rica",
            links: { "Tecnológico de Costa Rica": "https://www.tec.ac.cr/" },
          },
        ],
      },
    ],
    teachingExp: [
      {
        period: "2023 – present",
        title: "Visiting Lecturer",
        place: {
          text: "School of Architecture, University of Costa Rica (UCR)",
          url: "https://arquitectura.ucr.ac.cr/",
        },
        details: [
          "Design studios 3, 4, 5, 6, 7, and 8: Seminars on spatial representation, urban analysis, and project-based research, integrating cartography and critical interpretation of the social and political conditions of Costa Rican territory.",
          "Advanced courses on the use of artificial intelligence in architecture.",
          "Advanced courses: City and violence: a counter-forensic perspective.",
          { text: "New Curriculum Commission", url: "https://pdearquis.wordpress.com/" },
          "Teaching commission.",
          "Thesis director and reader.",
        ],
      },
      {
        period: "2016 – 2020",
        title: "Part-time Lecturer",
        place: {
          text: "School of Architecture, Universidad Americana (UAM), Managua",
          url: "https://uam.edu.ni/",
        },
      },
      {
        period: "2018 – 2020",
        title: "Part-time Lecturer",
        place: {
          text: "School of Architecture, Universidad Centroamericana (UCA), Managua",
          url: "https://www.uca.edu.ni/",
        },
      },
    ],
    researchExp: [
      {
        period: "2026 – present",
        title: "Principal Researcher",
        place: { text: "School of Architecture, UCR", url: "https://arquitectura.ucr.ac.cr/" },
        details: [
          "(Pry01-88-2027) Forensic architecture and visibility analysis: experimental study of the UCR Architecture Building under active shooter scenarios.",
        ],
      },
      {
        period: "2025 – present",
        title: "Researcher",
        place: { text: "Re/Presentare, San José", url: "https://re-presentare.org/" },
        details: [
          "Research and interpretation of archival materials and geospatial data; development of public digital platforms. Technical training for Forensic Architecture teams.",
        ],
      },
      {
        period: "2025",
        title: "Research Assistant",
        place: {
          text: "Forensic Architecture, Goldsmiths, University of London",
          url: "https://forensic-architecture.org/",
        },
        details: [
          {
            text: "Satellite data verification; incident geolocation; pattern analysis through drawing; filter and user interface implementation.",
            url: "https://forensic-architecture.org/investigation/aid-in-gaza",
          },
        ],
      },
    ],
    publications: {
      peerReviewed: [
        {
          status: "Under review",
          title: '"Disruptive Technical Objects and Counter Logistical Landscapes: The Nicaraguan Case"',
          journal: {
            text: "Architecture and Culture, vol. 14. Submission ID 255096835.",
            url: "https://www.tandfonline.com/journals/raac20",
          },
        },
        {
          year: "2024",
          title: '"Architecture, violence and memory: The case of the paramilitary attack on UNAN-Managua in July 2018."',
          journal: {
            text: "Revista de Arquitectura, vol. 13, no. 2.",
            url: "https://doi.org/10.15517/ra.v13i2.60182",
          },
          doi: {
            text: "DOI: https://doi.org/10.15517/ra.v13i2.60182",
            url: "https://doi.org/10.15517/ra.v13i2.60182",
          },
        },
        {
          year: "2024",
          title: '"The use of MidJourney as a tool in the early stages of architectural design."',
          journal: {
            text: "Bitácora Arquitectura, no. 54.",
            url: "https://doi.org/10.22201/fa.14058901p.2024.54.89984",
          },
          doi: {
            text: "DOI: https://doi.org/10.22201/fa.14058901p.2024.54.89984",
            url: "https://doi.org/10.22201/fa.14058901p.2024.54.89984",
          },
        },
      ],
      bookChapters: [
        {
          year: "2025",
          title: '"Becoming Güegüense."',
          publisher: {
            text: "In Echoes, CRA Master's Programme. Goldsmiths, University of London. ISBN 978-1-0369-3576-4.",
            url: "https://www.gold.ac.uk/architecture/",
          },
        },
        {
          year: "2015",
          title: "Contribution.",
          publisher: {
            text: "In Schwarz, E. (ed.), Fourth Holcim Awards – Sustainable Construction 2014/2015. Zurich: Holcim Sustainable Construction Press. ISBN 978-3-033-05095-2.",
            url: "https://www.holcimfoundation.org/awards",
          },
        },
      ],
    },
    conferences: [
      {
        year: "2026",
        role: "Presenter",
        event: { text: "LASA Central America 2026", url: "https://lasaweb.org/" },
        paper: '"Between mandate and inquiry: visual and spatial research on the murder of Berta Cáceres Flores in accompaniment of the GIEI-Honduras."',
        panel: "Panel: Violence and Human Rights",
      },
    ],
    platforms: [
      {
        period: "2026",
        title: "Personal web portfolio",
        org: { text: "Professional portfolio site", url: "https://ikerluna.netlify.app/" },
        desc: "Responsive architectural and research portfolio website. Design, front-end, and production deployment.",
        link: { text: "ikerluna.netlify.app", url: "https://ikerluna.netlify.app/" },
      },
      {
        period: "2024 – 2026",
        org: { text: "Re/Presentare / GIEI-Honduras", url: "https://re-presentare.org/" },
        desc: "Frontend and Backend lead. Cartographic and interactive platform to visualize thousands of events from the GIEI-Honduras case file, revealing patterns and operational structures across time and territory.",
        link: { text: "bertaceres.re-presentare.org", url: "https://bertaceres.re-presentare.org/" },
      },
      {
        period: "2025",
        title: "Sounding Ice",
        org: { text: "Field recording platform", url: "https://sounding-ice.ca/" },
        desc: "Frontend and Backend lead. Web platform to browse field recordings by thematic categories, oriented toward public access and ecological research.",
        link: { text: "sounding-ice.ca", url: "https://sounding-ice.ca/" },
      },
      {
        period: "2024",
        title: "Finnja Willner",
        org: { text: "Artistic portfolio site", url: "https://finnjawillner.de/" },
        desc: "Responsive website translating an audiovisual artistic practice into clear information architecture. Front-end, content structure, and production deployment.",
        link: { text: "finnjawillner.de", url: "https://finnjawillner.de/" },
      },
    ],
    social: [
      {
        period: "2026 – present",
        title: "Co-lead and web archive creator",
        desc: "EC-640 | Living memories: preservation of local identity and cultural heritage of Golfito and Puerto Jiménez.",
      },
      {
        period: "2021 – 2022",
        title: "3D Modeling and VR Development",
        place: { text: "Sé Humano, Costa Rica", url: "https://libertadtraslasrejas.netlify.app/" },
        desc: "Virtual reality installation reconstructing political detention spaces in Nicaragua as public testimony.",
      },
      {
        period: "2005 – 2009",
        title: "Construction Coordinator",
        place: { text: "TECHO, Nicaragua / Costa Rica / Haiti", url: "https://www.techo.org/" },
        desc: "Emergency housing; informal settlement analysis; construction manual authoring; volunteer coordination.",
      },
    ],
    exhibitions: [
      {
        year: "2025",
        title: "Reverberations",
        subtitle: "(MA Research Architecture Cohort)",
        venue: {
          text: "St James Church, London, United Kingdom",
          url: "https://maps.google.com/?q=St+James+Church+London",
        },
        desc: "Participating artist; gallery text authoring; logistics, installation, and spatial configuration.",
      },
      {
        year: "2023",
        title: "Latin America without political prisoners",
        subtitle: "Sé Humano",
        venue: {
          text: "Fundación Carlos de Amberes, Madrid, Spain",
          url: "https://www.fcamberes.org/",
        },
        desc: "Participating artist: virtual reality experience reconstructing a political detention cell in Nicaragua.",
      },
    ],
    awards: [
      {
        year: "2025",
        award: "1st Prize",
        event: {
          text: "Mirage Thread Costa Rica — Salone del Mobile Milano, Italy.",
          url: "https://www.salonemilano.it/",
        },
      },
      {
        year: "2023 – 2024",
        award: "Scholarship",
        event: {
          text: "Central America Campus for Academic Freedom — University of Costa Rica (UCR)",
          url: "https://www.ucr.ac.cr/",
        },
      },
      {
        year: "2022",
        award: "Grant",
        event: { text: "El Flotador — TEOR/ética", url: "https://www.teorética.org/" },
      },
      {
        year: "2014 – 2015",
        award: "3rd Prize",
        event: {
          text: "Europe Next Generation — Holcim Lafarge Foundation",
          url: "https://www.holcimfoundation.org/",
        },
      },
    ],
    professional: [
      {
        period: "2022 – 2024",
        title: "Project Architect",
        place: "Casa Komorebi (Studio Saxe) — Costa Rica. Residential.",
        links: { "Studio Saxe": "https://studiosaxe.com/" },
      },
      { period: "2023", title: "Project Architect", place: "Cabinas Riccelli — Nicaragua. Residential." },
      { period: "2022", title: "Project Architect", place: "Cabinas Machete — Nicaragua. Residential." },
      {
        period: "2018",
        title: "Project Architect",
        place: "Community Garden and Butterfly Laboratory (Fundación Apapachoa) — Nicaragua.",
        links: { "Fundación Apapachoa": "https://apapachoa.net/" },
      },
      {
        period: "2015",
        title: "Project Architect",
        place: "Earth Office (Rancho Santana) — Nicaragua. Rural Office.",
        links: { "Rancho Santana": "https://ranchosantana.com/" },
      },
    ],
    communities: [
      {
        period: "2025 – present",
        role: "Alumni / General Member",
        org: { text: "Goldsmiths University of London, London.", url: "https://www.gold.ac.uk/" },
      },
      {
        period: "2025 – present",
        role: "Researcher",
        org: {
          text: "Re/Presentare. Member network of Investigative Commons.",
          url: "https://re-presentare.org/",
        },
      },
      {
        period: "2024 – present",
        role: "Researcher",
        org: {
          text: "RIAAD — Network of Applied Research and Alternatives to Development",
          url: "https://riaad.org/",
        },
      },
      {
        period: "2014 – present",
        role: "Alumni / General Member",
        org: { text: "IAAC, Barcelona.", url: "https://iaac.net/" },
      },
    ],
    skillsSection: {
      languages: "Spanish (native) · English C1 · Italian (basic)",
      ...skillsSectionShared,
    },
  },
};
