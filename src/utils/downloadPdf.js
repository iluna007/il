import { THEME_VARS } from "./themeColor";

const PAGE = { width: 210, height: 297, margin: 14 };
const RENDER_WIDTH = 820;
// Keeps the full-page canvas under iOS Safari's ~16.7M pixel limit.
const SCALE = 1.6;
const BLOCK_SELECTOR = ".cv-header > *, .section-title, .subsection-title, .cv-entry";
const LINK_PROTOCOLS = ["http:", "https:", "mailto:", "tel:"];

function collectLayout(container) {
  const origin = container.getBoundingClientRect();

  const breaks = [...container.querySelectorAll(BLOCK_SELECTOR)]
    .map((el) => el.getBoundingClientRect().top - origin.top)
    .sort((a, b) => a - b);

  const links = [];
  container.querySelectorAll("a[href]").forEach((anchor) => {
    if (!LINK_PROTOCOLS.includes(anchor.protocol)) return;
    for (const rect of anchor.getClientRects()) {
      links.push({
        url: anchor.href,
        x: rect.left - origin.left,
        y: rect.top - origin.top,
        w: rect.width,
        h: rect.height,
      });
    }
  });

  return { breaks, links };
}

function paginate(totalHeight, pageHeight, breaks) {
  const pages = [];
  let start = 0;

  while (start < totalHeight - 1) {
    let end = start + pageHeight;
    if (end >= totalHeight) {
      end = totalHeight;
    } else {
      const candidate = breaks.filter((b) => b > start + pageHeight * 0.5 && b <= end).pop();
      if (candidate) end = candidate;
    }
    pages.push([start, end]);
    start = end;
  }

  return pages;
}

function prepareClone(doc) {
  const style = doc.createElement("style");
  style.textContent = "*, *::before, *::after { transition: none !important; animation: none !important; }";
  doc.head.appendChild(style);

  const root = doc.documentElement;
  root.setAttribute("data-theme", "light");
  THEME_VARS.forEach((key) => root.style.removeProperty(key));
  doc.querySelector(".app")?.setAttribute("data-theme", "light");

  const content = doc.getElementById("cv-content");
  Object.assign(content.style, {
    width: `${RENDER_WIDTH}px`,
    maxWidth: "none",
    margin: "0",
    padding: "0",
  });

  return content;
}

export async function downloadCvPdf(lang) {
  const source = document.getElementById("cv-content");
  if (!source) return;

  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas-pro"),
    import("jspdf"),
  ]);

  let layout = { breaks: [], links: [] };

  const canvas = await html2canvas(source, {
    scale: SCALE,
    backgroundColor: "#ffffff",
    useCORS: true,
    logging: false,
    windowWidth: 1400,
    scrollX: 0,
    scrollY: -window.scrollY,
    onclone: (doc) => {
      layout = collectLayout(prepareClone(doc));
    },
  });

  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  const contentWidth = PAGE.width - PAGE.margin * 2;
  const contentHeight = PAGE.height - PAGE.margin * 2;
  const mmPerPx = contentWidth / RENDER_WIDTH;
  const pxRatio = canvas.width / RENDER_WIDTH;
  const totalHeight = canvas.height / pxRatio;

  const pages = paginate(totalHeight, contentHeight / mmPerPx, layout.breaks);

  pages.forEach(([start, end], index) => {
    if (index > 0) pdf.addPage();

    const sourceY = Math.round(start * pxRatio);
    const sliceHeight = Math.min(Math.ceil((end - start) * pxRatio), canvas.height - sourceY);

    const slice = document.createElement("canvas");
    slice.width = canvas.width;
    slice.height = sliceHeight;
    const ctx = slice.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, slice.width, slice.height);
    ctx.drawImage(canvas, 0, sourceY, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);

    pdf.addImage(
      slice.toDataURL("image/jpeg", 0.92),
      "JPEG",
      PAGE.margin,
      PAGE.margin,
      contentWidth,
      (sliceHeight / pxRatio) * mmPerPx
    );

    layout.links
      .filter((link) => link.y >= start && link.y + link.h <= end + 1)
      .forEach((link) => {
        pdf.link(
          PAGE.margin + link.x * mmPerPx,
          PAGE.margin + (link.y - start) * mmPerPx,
          link.w * mmPerPx,
          link.h * mmPerPx,
          { url: link.url }
        );
      });
  });

  pdf.save(`IkerLuna_CV_${lang.toUpperCase()}.pdf`);
}
