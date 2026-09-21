const COLOR_PALETTE = [
  [
    { name: "Dark Magenta", hex: "#51204B", usage: "Background / text on neutrals" },
    { name: "Medium Magenta", hex: "#7B2B80", usage: "Background / text on neutrals" },
    { name: "Magenta", hex: "#D653DC", usage: "Graphics / text on dark" },
    { name: "Light Magenta", hex: "#FFA9FF", usage: "Graphics / text on dark" },
  ],
  [
    { name: "Dark Blue", hex: "#003F73", usage: "Background / text on neutrals" },
    { name: "Medium Blue", hex: "#0062A8", usage: "Background / text on neutrals" },
    { name: "Blue", hex: "#00A9FF", usage: "Graphics / text on dark" },
    { name: "Light Blue", hex: "#7FF5F3", usage: "Graphics / text on dark" },
  ],
  [
    { name: "Dark Green", hex: "#004A50", usage: "Background / text on neutrals" },
    { name: "Medium Green", hex: "#007370", usage: "Background / text on neutrals" },
    { name: "Orange", hex: "#F1402D", usage: "Graphics / accent" },
  ],
];

const GRADIENT_PRESETS = [
  {
    id: "gradient-01",
    label: "High contrast",
    type: "high",
    css: "linear-gradient(180deg, #DFFF42 -12.71%, #00A9FF 29.39%, #00A9FF 69.49%, #007370 108.03%)",
    colors: ["#DFFF42", "#00A9FF", "#007370"],
    stops: [
      { color: "#DFFF42", position: -12.71 },
      { color: "#00A9FF", position: 29.39 },
      { color: "#00A9FF", position: 69.49 },
      { color: "#007370", position: 108.03 },
    ],
  },
  {
    id: "gradient-02",
    label: "High contrast",
    type: "high",
    css: "linear-gradient(180deg, #FFA9FF -14.86%, #00A9FF 28.71%, #00A9FF 66.17%, #7B2B80 113.51%)",
    colors: ["#FFA9FF", "#00A9FF", "#7B2B80"],
    stops: [
      { color: "#FFA9FF", position: -14.86 },
      { color: "#00A9FF", position: 28.71 },
      { color: "#00A9FF", position: 66.17 },
      { color: "#7B2B80", position: 113.51 },
    ],
  },
  {
    id: "gradient-03",
    label: "Low contrast",
    type: "low",
    css: "linear-gradient(181deg, #E3F1FB -24.84%, #0062A8 18%, #0062A8 80.8%, #411A3C 116.01%)",
    colors: ["#E3F1FB", "#0062A8", "#411A3C"],
    stops: [
      { color: "#E3F1FB", position: -24.84 },
      { color: "#0062A8", position: 18 },
      { color: "#0062A8", position: 80.8 },
      { color: "#411A3C", position: 116.01 },
    ],
  },
  {
    id: "gradient-04",
    label: "High contrast",
    type: "high",
    css: "linear-gradient(180deg, #7B2B80 -15.29%, #F1402D 24.13%, #F1402D 73.12%, #FFA9FF 110.35%)",
    colors: ["#7B2B80", "#F1402D", "#FFA9FF"],
    stops: [
      { color: "#7B2B80", position: -15.29 },
      { color: "#F1402D", position: 24.13 },
      { color: "#F1402D", position: 73.12 },
      { color: "#FFA9FF", position: 110.35 },
    ],
  },
  {
    id: "gradient-05",
    label: "High contrast",
    type: "high",
    css: "linear-gradient(180deg, #004A50 -22.05%, #411A3C 7.12%, #7B2B80 44.62%, #7B2B80 69.39%, #FFA9FF 114.23%)",
    colors: ["#004A50", "#411A3C", "#7B2B80", "#FFA9FF"],
    stops: [
      { color: "#004A50", position: -22.05 },
      { color: "#411A3C", position: 7.12 },
      { color: "#7B2B80", position: 44.62 },
      { color: "#7B2B80", position: 69.39 },
      { color: "#FFA9FF", position: 114.23 },
    ],
  },
  {
    id: "gradient-06",
    label: "Low contrast",
    type: "low",
    css: "linear-gradient(180deg, #D4C7FF -3.96%, #00A9FF 33.27%, #00A9FF 68.17%, #D4C7FF 105.73%)",
    colors: ["#D4C7FF", "#00A9FF", "#D4C7FF"],
    stops: [
      { color: "#D4C7FF", position: -3.96 },
      { color: "#00A9FF", position: 33.27 },
      { color: "#00A9FF", position: 68.17 },
      { color: "#D4C7FF", position: 105.73 },
    ],
  },
  {
    id: "gradient-07",
    label: "High contrast",
    type: "high",
    css: "linear-gradient(180deg, #D653DC -12.71%, #007370 29.39%)",
    colors: ["#D653DC", "#007370"],
    stops: [
      { color: "#D653DC", position: -12.71 },
      { color: "#007370", position: 29.39 },
    ],
  },
];

const COLORS = {
  accent: [
    { name: "Lilac", hex: "#D4C7FF" },
    { name: "Yellow", hex: "#DFFF42" },
  ],
  neutral: [
    { name: "Pastel Blue", hex: "#E3F1FB" },
    { name: "Pastel Yellow", hex: "#F8F9EF" },
    { name: "Grey", hex: "#F1F3F5" },
    { name: "Pastel Magenta", hex: "#F1EAF3" },
  ],
};

const STANFORD_RED_EXAMPLES = [
  "assets/stanford-red/stanford-red-01.png",
  "assets/stanford-red/stanford-red-02.png",
  "assets/stanford-red/stanford-red-03.png",
  "assets/stanford-red/stanford-red-04.png",
  "assets/stanford-red/stanford-red-05.png",
  "assets/stanford-red/stanford-red-06.png",
  "assets/stanford-red/stanford-red-07.png",
  "assets/stanford-red/stanford-red-08.png",
  "assets/stanford-red/stanford-red-09.png",
];

const STANFORD_RED_DONT_EXAMPLES = [
  "assets/stanford-red/stanford-red-dont-01.png",
  "assets/stanford-red/stanford-red-dont-02.png",
  "assets/stanford-red/stanford-red-dont-03.png",
];

/**
 * Graphic gradient rainbow order ù HAI brand swatches only (primary + Yellow accent).
 * Matches the brand-guidelines pairing matrix.
 */
const GRAPHIC_GRADIENT_COLORS = (() => {
  const [magenta, blue, green] = COLOR_PALETTE;
  return [
    green[2], // Orange
    COLORS.accent[1], // Yellow
    green[0], // Dark Green
    green[1], // Medium Green
    blue[3], // Light Blue
    blue[2], // Blue
    blue[1], // Medium Blue
    blue[0], // Dark Blue
    magenta[3], // Light Magenta
    magenta[2], // Magenta
    magenta[1], // Medium Magenta
    magenta[0], // Dark Magenta
  ];
})();

/** Allowed pairings by index in GRAPHIC_GRADIENT_COLORS (brand guideline matrix). */
const GRAPHIC_GRADIENT_INDEX_CONNECTIONS = [
  [8, 9, 10, 11],
  [8, 9],
  [4, 5, 7, 6],
  [1, 4, 5, 7],
  [1, 3, 5, 2, 7, 6],
  [10, 9, 4, 3, 2, 7, 6],
  [5, 2, 4, 7],
  [10, 9, 4, 3, 5, 2, 6, 11],
  [10, 9, 0, 1],
  [10, 8, 0, 1, 5, 11],
  [9, 8, 0, 5, 7, 11],
  [10, 9, 8, 0, 7],
];

function buildGraphicGradientConnections(colors, indexConnections) {
  const raw = {};

  indexConnections.forEach((targets, fromIndex) => {
    if (!targets.length) return;
    raw[normalizeHex(colors[fromIndex].hex)] = targets.map((toIndex) => normalizeHex(colors[toIndex].hex));
  });

  return buildSymmetricGradientConnections(raw);
}

function normalizeHex(hex) {
  return hex.trim().toUpperCase();
}

function buildSymmetricGradientConnections(raw) {
  const map = new Map();

  Object.entries(raw).forEach(([from, targets]) => {
    const fromHex = normalizeHex(from);
    if (!map.has(fromHex)) map.set(fromHex, new Set());

    targets.forEach((to) => {
      const toHex = normalizeHex(to);
      map.get(fromHex).add(toHex);
      if (!map.has(toHex)) map.set(toHex, new Set());
      map.get(toHex).add(fromHex);
    });
  });

  return map;
}

const GRAPHIC_GRADIENT_CONNECTIONS = buildGraphicGradientConnections(
  GRAPHIC_GRADIENT_COLORS,
  GRAPHIC_GRADIENT_INDEX_CONNECTIONS
);

function canPairGraphicGradient(hexA, hexB) {
  if (!hexA || !hexB) return false;
  const a = normalizeHex(hexA);
  const b = normalizeHex(hexB);
  if (a === b) return false;
  return GRAPHIC_GRADIENT_CONNECTIONS.get(a)?.has(b) ?? false;
}

function graphicGradientCss(hexA, hexB, angle = 180) {
  return `linear-gradient(${angle}deg, ${hexA} 0%, ${hexB} 100%)`;
}

const ALL_FONTS_DOWNLOAD = {
  href: "assets/fonts/hai-brand-fonts.zip",
  filename: "hai-brand-fonts.zip",
  label: "Download all fonts",
};

const GOOGLE_FONTS_EMBED = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,700;1,400&family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">`;

const GOOGLE_FONTS_CSS = `/* Circular fallbacks */
font-family: "Figtree", sans-serif;

/* Marist fallbacks */
font-family: "Crimson Pro", serif;`;

const FONT_FALLBACKS = [
  {
    primary: "Circular Bold",
    fallback: "Figtree Bold",
    primaryFamily: "var(--font-circular)",
    primaryWeight: 700,
    family: "var(--font-figtree)",
    weight: 700,
    googleUrl: "https://fonts.google.com/specimen/Figtree",
  },
  {
    primary: "Circular Medium",
    fallback: "Figtree Semibold",
    primaryFamily: "var(--font-circular)",
    primaryWeight: 500,
    family: "var(--font-figtree)",
    weight: 600,
    googleUrl: "https://fonts.google.com/specimen/Figtree",
  },
  {
    primary: "Circular Book",
    fallback: "Figtree Medium",
    primaryFamily: "var(--font-circular)",
    primaryWeight: 450,
    family: "var(--font-figtree)",
    weight: 500,
    googleUrl: "https://fonts.google.com/specimen/Figtree",
  },
  {
    primary: "Circular Regular",
    fallback: "Figtree Regular",
    primaryFamily: "var(--font-circular)",
    primaryWeight: 400,
    family: "var(--font-figtree)",
    weight: 400,
    googleUrl: "https://fonts.google.com/specimen/Figtree",
  },
  {
    primary: "Marist Bold",
    fallback: "Crimson Pro Bold",
    primaryFamily: "var(--font-marist)",
    primaryWeight: 700,
    family: "var(--font-serif)",
    weight: 700,
    googleUrl: "https://fonts.google.com/specimen/Crimson+Pro",
  },
  {
    primary: "Marist Medium",
    fallback: "Crimson Pro Medium",
    primaryFamily: "var(--font-marist)",
    primaryWeight: 500,
    family: "var(--font-serif)",
    weight: 500,
    googleUrl: "https://fonts.google.com/specimen/Crimson+Pro",
  },
  {
    primary: "Marist Book",
    fallback: "Crimson Pro Regular",
    primaryFamily: "var(--font-marist)",
    primaryWeight: 400,
    family: "var(--font-serif)",
    weight: 400,
    googleUrl: "https://fonts.google.com/specimen/Crimson+Pro",
  },
  { primary: "Prisma", fallback: "No equivalent", noEquiv: true },
];

const GENERATOR_BASE = "https://stanford-hai-generators.vercel.app/?template=";

const GENERATORS = [
  {
    name: "Intersecting Colors",
    id: "intersecting-colors",
    thumb: "assets/graphics/IS-THUMBNAIL.png",
    hero: true,
    background: true,
  },
  {
    name: "Gradient Tiles",
    id: "gradient-tiles",
    thumb: "assets/graphics/GT-THUMBNAIL.png",
    hero: true,
    background: true,
  },
  {
    name: "Moir\u00e9",
    id: "moire",
    thumb: "assets/graphics/moire-Thumbnail.png",
    hero: true,
    background: false,
  },
  {
    name: "Intersecting Lines",
    id: "intersecting-lines",
    thumb: "assets/graphics/depth.png",
    hero: true,
    background: false,
  },
  {
    name: "Cityscape",
    id: "cityscape",
    thumb: "assets/graphics/cityscape.png",
    hero: true,
    background: false,
  },
  {
    name: "Tiled Graphics",
    id: "tiled-graphics",
    thumb: "assets/graphics/TG-THUMBNAIL.png",
    hero: true,
    background: true,
  },
  {
    name: "Variable Lines",
    id: "variable-lines",
    thumb: "assets/graphics/VL-THUMBNAIL.png",
    hero: true,
    background: false,
  },
  {
    name: "Overlapping Lines",
    id: "overlapping-lines",
    thumb: "assets/graphics/OL-THUMBNAIL.png",
    hero: true,
    background: false,
  },
];

function renderUsageFlags({ hero, background }) {
  const rows = [
    {
      allowed: hero,
      yes: "Can be used as hero",
      no: "Cannot be used as hero",
    },
    {
      allowed: background,
      yes: "Can be used as background",
      no: "Cannot be used as background",
    },
  ];

  return rows
    .map(
      ({ allowed, yes, no }) =>
        `<div class="usage-flag ${allowed ? "usage-flag--yes" : "usage-flag--no"}">` +
        `<span class="usage-flag__mark" aria-hidden="true">${allowed ? "\u2713" : "\u00d7"}</span>` +
        `<span>${allowed ? yes : no}</span>` +
        `</div>`
    )
    .join("");
}

const TEMPLATE_USAGE = [
  {
    format: "LinkedIn / Instagram",
    ratio: "4:5 portrait",
    role: "hero",
    note: "Graphic anchors the lower half; headline, date, and logo sit in the solid upper field.",
  },
  {
    format: "LinkedIn / Instagram",
    ratio: "1:1 square",
    role: "background",
    note: "Graphic clusters on one side or corner; copy fills the remaining area on top.",
  },
  {
    format: "Twitter / X",
    ratio: "16:9 landscape",
    role: "hero",
    note: "Graphic occupies the right zone; type and logo stay left on a dark or flat field.",
  },
  {
    format: "Report or paper cover",
    ratio: "Vertical",
    role: "background",
    note: "Thin sidebar or edge strip behind title block; keeps long-form type readable.",
  },
  {
    format: "Presentation slide",
    ratio: "16:9",
    role: "hero",
    note: "Large accent in a corner or lower third; speaker name and title stay in open space.",
  },
  {
    format: "Event promo / seminar",
    ratio: "Varies",
    role: "either",
    note: "Full-bleed background for high-impact posts; hero placement when copy needs a clean field.",
  },
];

const CANVA_TEMPLATE_GROUPS = [
  {
    title: "Social media",
    desc: "Event promos, program announcements, and seminar posts in platform-native aspect ratios.",
    href: "https://www.canva.com/brand",
    cta: "Open Brand Kit",
    templates: [
      { name: "LinkedIn / Instagram", detail: "4:5 portrait" },
      { name: "LinkedIn / Instagram", detail: "1:1 square" },
      { name: "Twitter / X", detail: "16:9 landscape" },
    ],
  },
  {
    title: "Reports & papers",
    desc: "Covers for policy briefs, industry reports, and research publications with sidebar or edge graphics.",
    href: "https://www.canva.com/brand",
    cta: "Open Brand Kit",
    templates: [
      { name: "Report cover", detail: "Vertical layout with graphic accent" },
      { name: "Paper cover", detail: "Full-bleed or sidebar background graphic" },
    ],
  },
  {
    title: "Presentations",
    desc: "16:9 slide layouts for seminars, keynotes, and internal decks.",
    href: "https://www.canva.com/brand",
    cta: "Open Brand Kit",
    templates: [
      { name: "Presentation slide", detail: "16:9 with hero graphic placement" },
      { name: "Presentation cover", detail: "Title slide with focal graphic" },
    ],
  },
  {
    title: "Marketing & events",
    desc: "Additional Canva layouts for campaigns, carousels, and recurring program formats.",
    href: "https://www.canva.com/brand",
    cta: "Open Brand Kit",
    templates: [
      { name: "Blog carousel", detail: "Multi-slide social carousel" },
      { name: "Event promo", detail: "Registration and date-forward layouts" },
      { name: "Programs", detail: "Ongoing initiative promotion" },
      { name: "Event seminar", detail: "Speaker-forward event graphics" },
    ],
  },
];

const DOWNLOADS = [
  {
    title: "Brand color swatches (.ase)",
    desc: "Adobe Swatch Exchange file for the full palette",
    href: "https://drive.google.com/file/d/1r-Xydi-xZ27yYa-YcQNX86g302GKBKNt/view?usp=sharing",
    external: true,
  },
  {
    title: "Primary logomark (SVG)",
    desc: "Download bundled vector logomark",
    href: "assets/logomark.svg",
    download: "hai-logomark.svg",
  },
  {
    title: "Centers & labs lockups",
    desc: "Existing center and lab lockup exports",
    href: "https://drive.google.com/drive/folders/13ETftz1ioIaJODjHB91nXH-RfKzjBfmV?usp=sharing",
    external: true,
  },
  {
    title: "Pillar lockups",
    desc: "Existing pillar lockup exports",
    href: "https://drive.google.com/drive/folders/1L986_TqxBPnaHlDvTjCHWZiD04wkQx16?usp=sharing",
    external: true,
  },
  {
    title: "Logo lockup builder",
    desc: "Build custom center, lab, pillar, and collab lockups",
    href: "https://www.figma.com/design/Hb5tlyzlwA9RqqZSGF1GPs/-EXT--Refinements---Handoff?node-id=46-9367",
    external: true,
  },
  {
    title: "Full brand guidelines",
    desc: "Complete 2026 guidelines deck",
    href: "https://www.figma.com/design/i5oYzzmzESojGcp37stFCp/-HAI--Guidelines",
    external: true,
  },
  {
    title: "Circular (Lineto)",
    desc: "Primary sans-serif typeface",
    href: "https://lineto.com/typefaces/circular",
    external: true,
  },
  {
    title: "Marist (Dinamo)",
    desc: "Primary serif typeface",
    href: "https://abcdinamo.com/typefaces/marist",
    external: true,
  },
  {
    title: "Graphics generator",
    desc: "Create brand graphics for templates",
    href: "https://stanford-hai-generators.vercel.app/",
    external: true,
  },
  {
    title: "Canva Brand Kit",
    desc: "Social, report, and presentation templates",
    href: "https://www.canva.com/brand",
    external: true,
  },
];

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return { r, g, b };
}

function getTextColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.62 ? "#111" : "#fff";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove("is-visible"), 2000);
}

async function copyText(text, toastMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(toastMessage || `Copied ${text}`);
  } catch {
    showToast("Copy failed ù select manually");
  }
}

const COLOR_SWATCH_COPY_ICON = `<svg class="color-swatch__copy-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;

function renderColorSwatch(color) {
  const { r, g, b } = hexToRgb(color.hex);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "color-swatch";
  button.style.backgroundColor = color.hex;
  button.style.color = getTextColor(color.hex);
  button.innerHTML = `
    <span class="color-swatch__name">${color.name}</span>
    <span class="color-swatch__hex-row">
      <span class="color-swatch__hex">${color.hex}</span>
      ${COLOR_SWATCH_COPY_ICON}
    </span>
    <span class="color-swatch__rgb">${rgb}</span>
  `;
  button.title = color.usage || "Click to copy hex ù Shift+click for RGB";

  button.addEventListener("click", (event) => {
    copyText(event.shiftKey ? rgb : color.hex);
  });

  return button;
}

function renderColorPalette(containerId, rows) {
  const container = document.getElementById(containerId);
  container.className = "color-palette";
  const columnCount = Math.max(...rows.map((row) => row.length));

  rows.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.className = "color-palette__row";
    rowEl.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;
    row.forEach((color) => rowEl.appendChild(renderColorSwatch(color)));
    for (let i = row.length; i < columnCount; i++) {
      const spacer = document.createElement("div");
      spacer.className = "color-palette__spacer";
      spacer.setAttribute("aria-hidden", "true");
      rowEl.appendChild(spacer);
    }
    container.appendChild(rowEl);
  });
}

function renderColors(containerId, colors) {
  const container = document.getElementById(containerId);
  colors.forEach((color) => container.appendChild(renderColorSwatch(color)));
}

function renderTypefaceOverview() {
  const container = document.getElementById("typeface-overview");
  if (!container) return;

  const actions = document.createElement("div");
  actions.className = "typeface-overview__actions";
  actions.innerHTML = `<a class="btn btn--small" href="${ALL_FONTS_DOWNLOAD.href}" download="${ALL_FONTS_DOWNLOAD.filename}">${ALL_FONTS_DOWNLOAD.label}</a>`;
  container.replaceChildren(actions);
}

function renderFallbackKit() {
  const kit = document.getElementById("fallback-kit");
  kit.innerHTML = `
    <div class="fallback-kit__top">
      <p class="fallback-kit__label">Embed code in the <code>&lt;head&gt;</code> of your HTML</p>
      <div class="fallback-kit__actions">
        <button type="button" class="btn btn--small fallback-kit__copy" id="copy-embed-code">Copy embed code</button>
        <button type="button" class="btn btn--small btn--ghost" id="download-all-fonts">Download all fonts</button>
      </div>
    </div>
    <pre class="fallback-kit__code" id="fallback-embed-code"></pre>
    <p class="fallback-kit__label">CSS</p>
    <pre class="fallback-kit__code fallback-kit__code--css" id="fallback-css-code"></pre>
  `;

  document.getElementById("fallback-embed-code").textContent = GOOGLE_FONTS_EMBED;
  document.getElementById("fallback-css-code").textContent = GOOGLE_FONTS_CSS;
  document.getElementById("copy-embed-code").addEventListener("click", () => {
    copyText(GOOGLE_FONTS_EMBED, "Embed code copied");
  });
  document.getElementById("download-all-fonts").addEventListener("click", () => {
    window.open("https://fonts.google.com/specimen/Figtree", "_blank", "noopener,noreferrer");
    window.open("https://fonts.google.com/specimen/Crimson+Pro", "_blank", "noopener,noreferrer");
  });
}

function renderFallbacks() {
  renderFallbackKit();

  const container = document.getElementById("fallback-table");

  const header = document.createElement("div");
  header.className = "fallback-row fallback-row--header";
  header.innerHTML = `
    <span class="fallback-row__primary">HAI Primary Font</span>
    <span class="fallback-row__arrow" aria-hidden="true"></span>
    <span class="fallback-row__alt">Google Font Fallback</span>
    <span class="btn btn--small fallback-row__link fallback-row__link--placeholder" aria-hidden="true">Get this style</span>
  `;
  container.appendChild(header);

  FONT_FALLBACKS.forEach(({ primary, fallback, primaryFamily, primaryWeight, family, weight, noEquiv, googleUrl }) => {
    const row = document.createElement(googleUrl ? "a" : "div");
    row.className = googleUrl ? "fallback-row fallback-row--interactive" : "fallback-row";
    if (googleUrl) {
      row.href = googleUrl;
      row.target = "_blank";
      row.rel = "noopener noreferrer";
      row.setAttribute("aria-label", `Get ${fallback} on Google Fonts`);
    }

    const primaryEl = document.createElement("span");
    primaryEl.className = "fallback-row__primary";
    primaryEl.textContent = primary;
    if (primaryFamily && primaryWeight) {
      primaryEl.style.fontFamily = primaryFamily;
      primaryEl.style.fontWeight = String(primaryWeight);
    }

    const arrow = document.createElement("span");
    arrow.className = "fallback-row__arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="21" viewBox="0 0 27 21" fill="none" aria-hidden="true"><path d="M-4.3211e-07 10.2395L25.4198 10.2395M15.5343 0.353947L25.4198 10.2395L15.5343 20.125" stroke="currentColor"/></svg>`;

    const altEl = document.createElement("span");
    altEl.className = "fallback-row__alt";
    altEl.textContent = fallback;
    if (noEquiv) {
      altEl.classList.add("fallback-row__alt--none");
    } else if (family && weight) {
      altEl.style.fontFamily = family;
      altEl.style.fontWeight = String(weight);
    }

    row.append(primaryEl, arrow, altEl);

    if (googleUrl) {
      const action = document.createElement("span");
      action.className = "btn btn--small fallback-row__link";
      action.setAttribute("aria-hidden", "true");
      action.textContent = "Get this style";
      row.appendChild(action);
    } else {
      const spacer = document.createElement("span");
      spacer.setAttribute("aria-hidden", "true");
      row.appendChild(spacer);
    }

    container.appendChild(row);
  });
}

function renderGenerators() {
  const container = document.getElementById("generator-grid");
  if (!container) return;

  GENERATORS.forEach((tool) => {
    const link = document.createElement("a");
    link.className = "generator-card";
    link.href = `${GENERATOR_BASE}${tool.id}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML = `
      <img class="generator-card__thumb" src="${tool.thumb}" alt="${tool.name} example output" loading="lazy">
      <div class="generator-card__usage">${renderUsageFlags(tool)}</div>
      <div class="generator-card__body">
        <strong>${tool.name}</strong>
        <span class="generator-card__btn">Open tool</span>
      </div>
    `;
    container.appendChild(link);
  });
}

function renderTemplateUsage() {
  const container = document.getElementById("template-usage-table");
  if (!container) return;

  const header = document.createElement("div");
  header.className = "template-usage-row template-usage-row--header";
  header.innerHTML = "<span>Format</span><span>Role</span><span>Placement</span>";
  container.appendChild(header);

  TEMPLATE_USAGE.forEach(({ format, ratio, role, note }) => {
    const row = document.createElement("div");
    row.className = "template-usage-row";

    const badgeClass =
      role === "hero"
        ? "usage-badge--hero"
        : role === "background"
          ? "usage-badge--background"
          : "usage-badge--either";
    const badgeLabel =
      role === "hero" ? "Hero" : role === "background" ? "Background" : "Hero or background";

    row.innerHTML = `
      <div class="template-usage-row__format">
        <strong>${format}</strong>
        <span>${ratio}</span>
      </div>
      <div><span class="usage-badge ${badgeClass}">${badgeLabel}</span></div>
      <div class="template-usage-row__note">${note}</div>
    `;
    container.appendChild(row);
  });
}

function renderCanvaTemplates() {
  const container = document.getElementById("template-groups");
  if (!container) return;

  CANVA_TEMPLATE_GROUPS.forEach((group) => {
    const article = document.createElement("article");
    article.className = "template-group";

    const items = group.templates
      .map(
        (item) =>
          `<li>${item.name}${item.detail ? `<span>${item.detail}</span>` : ""}</li>`
      )
      .join("");

    article.innerHTML = `
      <div class="template-group__header">
        <h4>${group.title}</h4>
        <a class="btn btn--small" href="${group.href}" target="_blank" rel="noopener noreferrer">${group.cta}</a>
      </div>
      <p>${group.desc}</p>
      <ul class="template-list">${items}</ul>
    `;
    container.appendChild(article);
  });
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateBrandGradient() {
  return pickRandom(GRADIENT_PRESETS);
}

function drawGradientToCanvas(canvas, gradientData) {
  const ctx = canvas.getContext("2d");
  const positions = gradientData.stops.map((stop) => stop.position);
  const min = Math.min(...positions);
  const max = Math.max(...positions);
  const range = max - min;

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradientData.stops.forEach(({ color, position }) => {
    gradient.addColorStop((position - min) / range, color);
  });

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function downloadLogoLockupPng(svgSrc, filename) {
  const img = new Image();
  img.onload = () => {
    const scale = 2;
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth * scale;
    canvas.height = img.naturalHeight * scale;
    const ctx = canvas.getContext("2d");
    ctx.scale(scale, scale);
    ctx.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${filename}.png`;
      link.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  };
  img.src = svgSrc;
}

function initLogoLockupDownloads() {
  document.querySelectorAll(".logo-card__action[data-logo-src]").forEach((button) => {
    button.addEventListener("click", () => {
      downloadLogoLockupPng(button.dataset.logoSrc, button.dataset.logoFilename);
    });
  });
}

function downloadGradientPng(preset) {
  const filename = `${preset.id || "hai-gradient"}.png`;

  if (preset.png) {
    const link = document.createElement("a");
    link.href = preset.png;
    link.download = filename;
    link.click();
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 410;
  canvas.height = 478;
  drawGradientToCanvas(canvas, preset);

  canvas.toBlob((blob) => {
    if (!blob) {
      showToast("PNG export failed");
      return;
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
    showToast("PNG downloaded");
  }, "image/png");
}

function renderGradientStops(container, gradientData) {
  container.innerHTML = "";
  const labels = ["Top", "Middle", "Bottom"];

  gradientData.colors.forEach((color, index) => {
    const chip = document.createElement("span");
    chip.className = "gradient-stop";
    chip.innerHTML = `<span class="gradient-stop__dot" style="background:${color}"></span>${color}`;
    chip.title = labels[index] || "Stop";
    container.appendChild(chip);
  });
}

function rebuildGradientCss(stops, angle = 180) {
  const stopStr = stops.map(({ color, position }) => `${color} ${position}%`).join(", ");
  return `linear-gradient(${angle}deg, ${stopStr})`;
}

function replaceGradientColor(example, oldColor, newColor) {
  const normalizedOld = oldColor.toUpperCase();
  const normalizedNew = newColor.toUpperCase();
  if (normalizedOld === normalizedNew) return false;

  example.stops.forEach((stop) => {
    if (stop.color.toUpperCase() === normalizedOld) {
      stop.color = newColor;
    }
  });
  example.colors = example.colors.map((color) => (
    color.toUpperCase() === normalizedOld ? newColor : color
  ));

  const angleMatch = example.css.match(/linear-gradient\((\d+)deg/);
  const angle = angleMatch ? Number.parseInt(angleMatch[1], 10) : 180;
  example.css = rebuildGradientCss(example.stops, angle);
  return true;
}

const GRADIENT_STOP_COLOR_GROUPS = [
  { label: "Primary & secondary", colors: COLOR_PALETTE.flat() },
  { label: "Accents", colors: COLORS.accent },
  { label: "Neutral backgrounds", colors: COLORS.neutral },
];

let gradientStopPickerState = null;

function closeGradientStopPicker() {
  if (!gradientStopPickerState) return;

  const { picker, trigger } = gradientStopPickerState;
  picker.hidden = true;
  trigger?.setAttribute("aria-expanded", "false");
  gradientStopPickerState = null;
}

function positionGradientStopPicker(picker, trigger) {
  const margin = 8;
  const rect = trigger.getBoundingClientRect();
  picker.hidden = false;
  picker.style.visibility = "hidden";
  picker.style.left = "0";
  picker.style.top = "0";

  const pickerRect = picker.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - pickerRect.width / 2;
  let top = rect.bottom + margin;

  left = Math.max(margin, Math.min(left, window.innerWidth - pickerRect.width - margin));

  if (top + pickerRect.height > window.innerHeight - margin) {
    top = rect.top - pickerRect.height - margin;
  }
  top = Math.max(margin, Math.min(top, window.innerHeight - pickerRect.height - margin));

  picker.style.left = `${Math.round(left)}px`;
  picker.style.top = `${Math.round(top)}px`;
  picker.style.visibility = "";
}

function ensureGradientStopPicker() {
  let picker = document.getElementById("gradient-stop-picker");
  if (picker) return picker;

  picker = document.createElement("div");
  picker.id = "gradient-stop-picker";
  picker.className = "gradient-stop-picker";
  picker.hidden = true;
  picker.setAttribute("role", "dialog");
  picker.setAttribute("aria-modal", "true");
  picker.setAttribute("aria-label", "Choose a replacement color");

  const panel = document.createElement("div");
  panel.className = "gradient-stop-picker__panel";

  GRADIENT_STOP_COLOR_GROUPS.forEach((group) => {
    const section = document.createElement("section");
    section.className = "gradient-stop-picker__group";

    const heading = document.createElement("h4");
    heading.className = "gradient-stop-picker__heading";
    heading.textContent = group.label;

    const swatches = document.createElement("div");
    swatches.className = "gradient-stop-picker__swatches";

    group.colors.forEach((color) => {
      const swatch = document.createElement("button");
      swatch.type = "button";
      swatch.className = "gradient-stop-picker__swatch";
      swatch.style.backgroundColor = color.hex;
      swatch.title = `${color.name} (${color.hex})`;
      swatch.setAttribute("aria-label", `${color.name}, ${color.hex}`);
      swatch.addEventListener("click", () => {
        if (!gradientStopPickerState) return;

        const { example, color: currentColor, onReplace } = gradientStopPickerState;
        if (replaceGradientColor(example, currentColor, color.hex)) {
          onReplace(example);
          showToast(`Swapped in ${color.name}`);
        }
        closeGradientStopPicker();
      });
      swatches.appendChild(swatch);
    });

    section.append(heading, swatches);
    panel.appendChild(section);
  });

  picker.appendChild(panel);
  document.body.appendChild(picker);

  document.addEventListener("click", (event) => {
    if (!gradientStopPickerState || picker.hidden) return;
    if (picker.contains(event.target) || gradientStopPickerState.trigger?.contains(event.target)) return;
    closeGradientStopPicker();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeGradientStopPicker();
  });

  window.addEventListener("resize", () => {
    if (!gradientStopPickerState || picker.hidden) return;
    positionGradientStopPicker(picker, gradientStopPickerState.trigger);
  });

  return picker;
}

function openGradientStopPicker(trigger, example, color, onReplace) {
  const picker = ensureGradientStopPicker();

  if (gradientStopPickerState?.trigger === trigger) {
    closeGradientStopPicker();
    return;
  }

  closeGradientStopPicker();

  gradientStopPickerState = { picker, trigger, example, color, onReplace };
  trigger.setAttribute("aria-expanded", "true");
  positionGradientStopPicker(picker, trigger);
  picker.querySelector(".gradient-stop-picker__swatch")?.focus();
}

function updateGradientExampleView(example, preview, stopRow) {
  preview.style.background = example.css;
  stopRow.querySelectorAll(".gradient-example__stop").forEach((button, index) => {
    const nextColor = example.colors[index];
    button.style.backgroundColor = nextColor;
    button.dataset.color = nextColor;
    button.setAttribute("aria-label", `Replace ${nextColor} in gradient`);
  });
}

function renderGradientExamples() {
  const container = document.getElementById("gradient-examples");
  if (!container) return;

  GRADIENT_PRESETS.forEach((example) => {
    const article = document.createElement("article");
    article.className = "gradient-example";

    const previewWrap = document.createElement("div");
    previewWrap.className = "gradient-example__preview-wrap";

    const preview = document.createElement("div");
    preview.className = "gradient-example__preview";
    preview.style.background = example.css;

    const actions = document.createElement("div");
    actions.className = "gradient-example__actions";

    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "gradient-example__action";
    copyBtn.textContent = "Copy CSS";
    copyBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      copyText(`background: ${example.css};`, "Gradient CSS copied");
      copyBtn.blur();
    });

    const downloadBtn = document.createElement("button");
    downloadBtn.type = "button";
    downloadBtn.className = "gradient-example__action";
    downloadBtn.textContent = "Download PNG";
    downloadBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      downloadGradientPng(example);
      downloadBtn.blur();
    });

    actions.append(copyBtn, downloadBtn);
    previewWrap.append(preview, actions);

    const stopRow = document.createElement("div");
    stopRow.className = "gradient-example__stops";
    example.colors.forEach((color) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "gradient-example__stop";
      dot.style.backgroundColor = color;
      dot.dataset.color = color;
      dot.setAttribute("aria-label", `Replace ${color} in gradient`);
      dot.setAttribute("aria-haspopup", "dialog");
      dot.setAttribute("aria-expanded", "false");
      dot.addEventListener("click", (event) => {
        event.stopPropagation();
        openGradientStopPicker(dot, example, dot.dataset.color, () => {
          updateGradientExampleView(example, preview, stopRow);
        });
      });
      stopRow.appendChild(dot);
    });

    article.append(previewWrap, stopRow);
    container.appendChild(article);
  });
}

function renderGradientPairingMatrix() {
  const container = document.getElementById("gradient-pairing-matrix");
  if (!container) return;

  const colors = GRAPHIC_GRADIENT_COLORS;
  const size = colors.length;
  const columnColors = [...colors].reverse();
  const fragment = document.createDocumentFragment();

  const corner = document.createElement("div");
  corner.className = "gradient-pairing-matrix__corner";
  corner.setAttribute("aria-hidden", "true");
  fragment.appendChild(corner);

  columnColors.forEach((color) => {
    const swatch = document.createElement("span");
    swatch.className = "gradient-pairing-matrix__swatch gradient-pairing-matrix__swatch--top";
    swatch.style.backgroundColor = color.hex;
    swatch.title = color.name;
    fragment.appendChild(swatch);
  });

  for (let row = 0; row < size; row += 1) {
    const rowColor = colors[size - 1 - row];

    const rowSwatch = document.createElement("span");
    rowSwatch.className = "gradient-pairing-matrix__swatch gradient-pairing-matrix__swatch--row";
    rowSwatch.style.backgroundColor = rowColor.hex;
    rowSwatch.title = rowColor.name;
    fragment.appendChild(rowSwatch);

    for (let col = 0; col < size; col += 1) {
      const colColor = columnColors[col];
      const isSameColor = normalizeHex(rowColor.hex) === normalizeHex(colColor.hex);
      const allowed = isSameColor || canPairGraphicGradient(rowColor.hex, colColor.hex);
      const cell = document.createElement("div");
      cell.className = `gradient-pairing-matrix__cell${allowed ? "" : " gradient-pairing-matrix__cell--forbidden"}`;
      cell.style.background = isSameColor
        ? rowColor.hex
        : graphicGradientCss(rowColor.hex, colColor.hex);
      cell.title = isSameColor
        ? `${rowColor.name} + ${colColor.name}: Same color`
        : `${rowColor.name} + ${colColor.name}: ${allowed ? "Allowed" : "Not allowed"}`;
      cell.setAttribute("aria-label", cell.title);

      if (!allowed) {
        const slash = document.createElement("span");
        slash.className = "gradient-pairing-matrix__slash";
        slash.setAttribute("aria-hidden", "true");
        cell.appendChild(slash);
      }

      fragment.appendChild(cell);
    }
  }

  container.replaceChildren(fragment);
}

function renderGradientCheckerSwatches(container, selectedHex, onSelect) {
  container.replaceChildren();

  GRAPHIC_GRADIENT_COLORS.forEach((color) => {
    const swatch = document.createElement("button");
    swatch.type = "button";
    swatch.className = "gradient-checker__swatch";
    swatch.style.backgroundColor = color.hex;
    swatch.dataset.hex = color.hex;
    swatch.title = `${color.name} (${color.hex})`;
    swatch.setAttribute("aria-label", color.name);
    swatch.setAttribute(
      "aria-pressed",
      normalizeHex(color.hex) === normalizeHex(selectedHex) ? "true" : "false"
    );
    swatch.addEventListener("click", () => onSelect(color.hex));
    container.appendChild(swatch);
  });
}

function syncGradientCheckerSwatches(container, selectedHex) {
  container.querySelectorAll(".gradient-checker__swatch").forEach((swatch) => {
    swatch.setAttribute(
      "aria-pressed",
      normalizeHex(swatch.dataset.hex) === normalizeHex(selectedHex) ? "true" : "false"
    );
  });
}

function syncSecondColorSwatches(container, hexA, selectedHexB) {
  container.querySelectorAll(".gradient-checker__swatch").forEach((swatch) => {
    const hex = swatch.dataset.hex;
    const isSelected = normalizeHex(hex) === normalizeHex(selectedHexB);
    const isSameAsFirst = normalizeHex(hex) === normalizeHex(hexA);
    const isAllowed = !isSameAsFirst && canPairGraphicGradient(hexA, hex);

    swatch.setAttribute("aria-pressed", isSelected ? "true" : "false");
    swatch.classList.toggle("gradient-checker__swatch--unavailable", !isAllowed);
  });
}

function bindGradientCheckerHover(container, onHover) {
  container.addEventListener("mouseover", (event) => {
    const swatch = event.target.closest(".gradient-checker__swatch");
    if (!swatch || !container.contains(swatch)) return;
    onHover(swatch.dataset.hex);
  });
}

function initGradientPairingChecker() {
  const swatchesA = document.getElementById("gradient-check-swatches-a");
  const swatchesB = document.getElementById("gradient-check-swatches-b");
  const controls = document.querySelector(".gradient-checker__controls");
  const preview = document.getElementById("gradient-check-preview");
  const slash = document.getElementById("gradient-check-slash");
  const verdict = document.getElementById("gradient-check-verdict");

  if (!swatchesA || !swatchesB || !preview || !slash || !verdict) return;

  let hexA = GRAPHIC_GRADIENT_COLORS[0].hex;
  let hexB = GRAPHIC_GRADIENT_COLORS[8].hex;
  let previewHexA = null;
  let previewHexB = null;

  function getActiveHexA() {
    return previewHexA ?? hexA;
  }

  function getActiveHexB() {
    return previewHexB ?? hexB;
  }

  function clearPreview() {
    previewHexA = null;
    previewHexB = null;
    updateChecker();
  }

  function updateChecker() {
    const activeA = getActiveHexA();
    const activeB = getActiveHexB();

    syncGradientCheckerSwatches(swatchesA, activeA);
    syncSecondColorSwatches(swatchesB, activeA, activeB);

    const colorA = GRAPHIC_GRADIENT_COLORS.find((color) => normalizeHex(color.hex) === normalizeHex(activeA));
    const colorB = GRAPHIC_GRADIENT_COLORS.find((color) => normalizeHex(color.hex) === normalizeHex(activeB));
    const isSameColor = normalizeHex(activeA) === normalizeHex(activeB);
    const allowed = !isSameColor && canPairGraphicGradient(activeA, activeB);

    preview.style.background = isSameColor ? activeA : graphicGradientCss(activeA, activeB);
    slash.hidden = allowed;

    if (!colorA || !colorB) {
      verdict.innerHTML = "";
      return;
    }

    const allowedIcon = `<svg class="gradient-checker__status-icon" width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0.707031 3.54072L3.91874 6.75228L9.96387 0.707153" stroke="#006E38" stroke-width="2"/></svg>`;
    const notAllowedIcon = `<svg class="gradient-checker__status-icon" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 1L10 10" stroke="currentColor" stroke-width="2"/><path d="M10 1L1 10" stroke="currentColor" stroke-width="2"/></svg>`;

    if (isSameColor) {
      verdict.innerHTML = `
        <p class="gradient-checker__status gradient-checker__status--invalid">
          <span class="gradient-checker__status-heading">
            ${notAllowedIcon}
            <strong class="gradient-checker__status-label">Not allowed</strong>
          </span>
          <span class="gradient-checker__status-detail">Choose two different colors.</span>
        </p>
      `;
      slash.hidden = false;
      return;
    }

    verdict.innerHTML = allowed
      ? `
        <p class="gradient-checker__status gradient-checker__status--allowed">
          <span class="gradient-checker__status-heading">
            ${allowedIcon}
            <strong class="gradient-checker__status-label">Allowed</strong>
          </span>
          <span class="gradient-checker__status-detail">${colorA.name} and ${colorB.name} can be combined in a graphic gradient.</span>
        </p>
      `
      : `
        <p class="gradient-checker__status gradient-checker__status--invalid">
          <span class="gradient-checker__status-heading">
            ${notAllowedIcon}
            <strong class="gradient-checker__status-label">Not allowed</strong>
          </span>
          <span class="gradient-checker__status-detail">${colorA.name} and ${colorB.name} sit too far apart on the brand rainbow to combine cleanly.</span>
        </p>
      `;
  }

  function selectColorA(hex) {
    hexA = hex;
    previewHexA = null;
    previewHexB = null;
    updateChecker();
  }

  function selectColorB(hex) {
    hexB = hex;
    previewHexA = null;
    previewHexB = null;
    updateChecker();
  }

  renderGradientCheckerSwatches(swatchesA, hexA, selectColorA);
  renderGradientCheckerSwatches(swatchesB, hexB, selectColorB);

  bindGradientCheckerHover(swatchesA, (hex) => {
    previewHexA = hex;
    previewHexB = null;
    updateChecker();
  });

  bindGradientCheckerHover(swatchesB, (hex) => {
    previewHexB = hex;
    previewHexA = null;
    updateChecker();
  });

  if (controls) {
    controls.addEventListener("mouseleave", clearPreview);
  }

  updateChecker();
}

function initGradientGenerator() {
  const canvas = document.getElementById("gradient-canvas");
  const generateBtn = document.getElementById("generate-gradient");
  const copyBtn = document.getElementById("copy-gradient-css");
  const cssOutput = document.getElementById("gradient-css-output");
  const typeBadge = document.getElementById("gradient-type-badge");
  const stopsContainer = document.getElementById("gradient-stops");

  if (!canvas || !generateBtn) return;

  let currentGradient = null;

  function applyGradient() {
    currentGradient = generateBrandGradient();
    drawGradientToCanvas(canvas, currentGradient);
    cssOutput.textContent = `background: ${currentGradient.css};`;
    typeBadge.textContent = currentGradient.type === "low" ? "Low contrast" : "High contrast";
    typeBadge.className = `gradient-badge gradient-badge--${currentGradient.type}`;
    renderGradientStops(stopsContainer, currentGradient);
  }

  generateBtn.addEventListener("click", applyGradient);
  copyBtn.addEventListener("click", () => {
    if (currentGradient) copyText(`background: ${currentGradient.css};`, "Gradient CSS copied");
  });
  canvas.addEventListener("click", () => {
    if (currentGradient) copyText(`background: ${currentGradient.css};`, "Gradient CSS copied");
  });

  applyGradient();
}

const STANFORD_CARDINAL_RED_HEX = "#8C1515";

function initStanfordCardinalRedSwatch() {
  const swatch = document.getElementById("stanford-cardinal-red-swatch");
  if (!swatch) return;

  swatch.addEventListener("click", () => {
    copyText(STANFORD_CARDINAL_RED_HEX);
  });
}

function renderStanfordRedSwatchRow(containerId, sources, altPrefix) {
  const container = document.getElementById(containerId);
  if (!container) return;

  sources.forEach((src, index) => {
    const figure = document.createElement("figure");
    figure.className = "stanford-red-example";

    const img = document.createElement("img");
    img.className = "stanford-red-example__img";
    img.src = src;
    img.alt = `${altPrefix} ${index + 1}`;
    img.loading = "lazy";
    img.width = 60;
    img.height = 38;

    figure.appendChild(img);
    container.appendChild(figure);
  });
}

function renderStanfordRedExamples() {
  renderStanfordRedSwatchRow(
    "stanford-red-examples",
    STANFORD_RED_EXAMPLES,
    "Stanford Cardinal Red mix example"
  );
  renderStanfordRedSwatchRow(
    "stanford-red-dont-examples",
    STANFORD_RED_DONT_EXAMPLES,
    "Stanford Cardinal Red combination to avoid"
  );
}

const RESOURCE_ICONS = {
  download: "assets/icons/resources/download.svg",
  generator: "assets/icons/resources/generator.svg",
  pdf: "assets/icons/resources/pdf.svg",
  figma: "assets/icons/resources/figma.png",
  adobe: "assets/icons/resources/adobe.png",
  drive: "assets/icons/resources/drive.png",
  canva: "assets/icons/resources/canva.png",
};

function resolveResourceIcon(source) {
  const href = source.href ?? source.getAttribute?.("href") ?? "";
  const label = (source.label ?? source.textContent ?? "").trim().toLowerCase();
  const hasDownload = Boolean(source.download) || Boolean(source.hasAttribute?.("download"));

  if (hasDownload) return "download";
  if (href.includes("figma.com")) return "figma";
  if (href.includes("canva.com")) return "canva";
  if (href.includes("stanford-hai-generators")) return "generator";
  if (label.includes(".ase") || href.includes("GKBKNt")) return "adobe";
  if (href.includes("drive.google.com")) return "drive";
  if (href.startsWith("#")) return "pdf";
  if (/\.(zip|svg)(\?|$)/i.test(href)) return "download";

  return "download";
}

function createResourceIconElement(iconType, classPrefix = "resource-chip") {
  const iconWrap = document.createElement("span");
  iconWrap.className = `${classPrefix}__icon-wrap`;

  const icon = document.createElement("img");
  icon.className = `${classPrefix}__icon`;
  if (iconType === "canva") {
    icon.classList.add(`${classPrefix}__icon--canva`);
  } else if (!["download", "generator", "pdf"].includes(iconType)) {
    icon.classList.add(`${classPrefix}__icon--brand`);
  }
  icon.src = RESOURCE_ICONS[iconType];
  icon.alt = "";
  icon.width = 20;
  icon.height = 20;
  icon.setAttribute("aria-hidden", "true");

  iconWrap.appendChild(icon);
  return iconWrap;
}

function initResourceLinks() {
  document.querySelectorAll(".section__resources-list a").forEach((link) => {
    const iconType = resolveResourceIcon(link);
    const label = link.textContent.trim();

    link.classList.add("resource-chip");
    link.textContent = "";

    const text = document.createElement("span");
    text.className = "resource-chip__label";
    text.textContent = label;

    link.append(createResourceIconElement(iconType), text);
  });
}

function renderDownloads() {
  const container = document.getElementById("download-grid");
  DOWNLOADS.forEach((item) => {
    const link = document.createElement("a");
    link.className = "download-card";
    link.href = item.href;
    if (item.external) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    if (item.download) {
      link.download = item.download;
    }

    const iconType = resolveResourceIcon({
      href: item.href,
      label: item.title,
      download: Boolean(item.download),
    });

    const body = document.createElement("span");
    body.className = "download-card__body";

    const title = document.createElement("strong");
    title.textContent = item.title;

    const desc = document.createElement("span");
    desc.textContent = item.desc;

    body.append(title, desc);
    link.append(createResourceIconElement(iconType, "download-card"), body);
    container.appendChild(link);
  });
}

renderColorPalette("primary-colors", COLOR_PALETTE);
renderColors("accent-colors", COLORS.accent);
renderColors("neutral-colors", COLORS.neutral);
initStanfordCardinalRedSwatch();
renderStanfordRedExamples();
renderGradientPairingMatrix();
initGradientPairingChecker();
renderGradientExamples();
initGradientGenerator();
renderTypefaceOverview();
renderFallbacks();
renderGenerators();
renderTemplateUsage();
renderCanvaTemplates();
renderDownloads();
initLogoLockupDownloads();
initResourceLinks();
