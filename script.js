const COLORS = {
  primary: [
    { name: "Dark Magenta", hex: "#51204B", usage: "Background / text on neutrals" },
    { name: "Medium Magenta", hex: "#7B2B80", usage: "Background / text on neutrals" },
    { name: "Dark Blue", hex: "#003F73", usage: "Background / text on neutrals" },
    { name: "Medium Blue", hex: "#0062A8", usage: "Background / text on neutrals" },
    { name: "Dark Green", hex: "#004A50", usage: "Background / text on neutrals" },
    { name: "Medium Green", hex: "#007370", usage: "Background / text on neutrals" },
    { name: "Magenta", hex: "#D653DC", usage: "Graphics / text on dark" },
    { name: "Light Magenta", hex: "#FFA9FF", usage: "Graphics / text on dark" },
    { name: "Blue", hex: "#00A9FF", usage: "Graphics / text on dark" },
    { name: "Light Blue", hex: "#7FF5F3", usage: "Graphics / text on dark" },
    { name: "Orange", hex: "#F1402D", usage: "Graphics / accent" },
  ],
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

const FONT_FALLBACKS = [
  ["Circular Bold", "DM Sans Bold"],
  ["Circular Medium", "DM Sans Semibold"],
  ["Circular Book", "DM Sans Medium"],
  ["Circular Regular", "DM Sans Regular"],
  ["Marist Bold", "Crimson Pro Bold"],
  ["Marist Medium", "Crimson Pro Medium"],
  ["Marist Book", "Crimson Pro Regular"],
  ["Prisma", "No equivalent"],
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
    title: "Full brand guidelines (Figma)",
    desc: "Complete 2026 guidelines deck",
    href: "https://www.figma.com/design/i5oYzzmzESojGcp37stFCp/-HAI--Guidelines",
    external: true,
  },
  {
    title: "Circular — Lineto",
    desc: "Primary sans-serif typeface",
    href: "https://lineto.com/typefaces/circular",
    external: true,
  },
  {
    title: "Marist — Dinamo",
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

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(`Copied ${text}`);
  } catch {
    showToast("Copy failed — select manually");
  }
}

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
    <span class="color-swatch__hex">${color.hex}</span>
    <span class="color-swatch__rgb">${rgb}</span>
  `;
  button.title = color.usage || "Click to copy hex · Shift+click for RGB";

  button.addEventListener("click", (event) => {
    copyText(event.shiftKey ? rgb : color.hex);
  });

  return button;
}

function renderColors(containerId, colors) {
  const container = document.getElementById(containerId);
  colors.forEach((color) => container.appendChild(renderColorSwatch(color)));
}

function renderFallbacks() {
  const container = document.getElementById("fallback-table");
  FONT_FALLBACKS.forEach(([primary, fallback]) => {
    const row = document.createElement("div");
    row.className = "fallback-row";
    row.innerHTML = `<span>${primary}</span><span>${fallback}</span>`;
    container.appendChild(row);
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
    link.innerHTML = `<strong>${item.title}</strong><span>${item.desc}</span>`;
    container.appendChild(link);
  });
}

renderColors("primary-colors", COLORS.primary);
renderColors("accent-colors", COLORS.accent);
renderColors("neutral-colors", COLORS.neutral);
renderFallbacks();
renderDownloads();
