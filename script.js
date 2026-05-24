const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const filterButtons = document.querySelectorAll(".filter-button");
const albumCards = document.querySelectorAll(".album-card");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-lightbox-close]");

const albums = {
  "photo-portrait": {
    title: "人像攝影",
    category: "Photography / Portrait",
    year: "2026",
    type: "攝影",
    scope: "拍攝企劃、修圖、色調整理",
    description: "以自然光和低飽和色彩捕捉人物狀態，保留安靜、柔和且帶有生活感的情緒。",
    covers: ["cover-01", "cover-02", "cover-03", "cover-04", "cover-05", "cover-06"],
  },
  banner: {
    title: "Banner",
    category: "Design / Campaign",
    year: "2026",
    type: "設計",
    scope: "網站橫幅、社群視覺、活動主圖",
    description: "為不同品牌活動製作高級感 Banner，注重文字層級、留白與視覺焦點。",
    covers: ["cover-02", "cover-03", "cover-04", "cover-05", "cover-06", "cover-01"],
  },
  poster: {
    title: "海報設計",
    category: "Design / Poster",
    year: "2025",
    type: "設計",
    scope: "主視覺、字體編排、印刷版面",
    description: "以精簡資訊和穩定構圖完成海報系列，適合展覽、活動與品牌宣傳。",
    covers: ["cover-03", "cover-05", "cover-01", "cover-06", "cover-02", "cover-04"],
  },
  graphic: {
    title: "平面設計",
    category: "Design / Graphic",
    year: "2025",
    type: "設計",
    scope: "版面設計、品牌延伸、視覺規範",
    description: "整理品牌訊息與視覺素材，讓版面呈現乾淨、成熟且容易閱讀的狀態。",
    covers: ["cover-04", "cover-01", "cover-06", "cover-02", "cover-03", "cover-05"],
  },
  package: {
    title: "包裝設計",
    category: "Design / Package",
    year: "2024",
    type: "設計",
    scope: "包裝外觀、標籤、商品視覺",
    description: "以材質、色彩與品牌語氣為核心，建立適合商品上架與拍攝的包裝系統。",
    covers: ["cover-05", "cover-04", "cover-02", "cover-01", "cover-06", "cover-03"],
  },
  logo: {
    title: "LOGO 設計",
    category: "Design / Identity",
    year: "2024",
    type: "設計",
    scope: "標誌設計、識別應用、比例規劃",
    description: "從品牌個性出發，設計可延伸於名片、包裝、社群與網站的識別標誌。",
    covers: ["cover-06", "cover-03", "cover-05", "cover-01", "cover-04", "cover-02"],
  },
  dm: {
    title: "DM 傳單",
    category: "Design / Print",
    year: "2024",
    type: "設計",
    scope: "宣傳物、資訊編排、印刷輸出",
    description: "將活動資訊與品牌質感整合在小版面裡，讓讀者快速理解重點。",
    covers: ["cover-01", "cover-03", "cover-02", "cover-04", "cover-06", "cover-05"],
  },
  card: {
    title: "名片設計",
    category: "Design / Card",
    year: "2024",
    type: "設計",
    scope: "個人品牌、商業名片、印刷細節",
    description: "以簡潔版面呈現個人與品牌資訊，保留紙材與留白帶來的精緻感。",
    covers: ["cover-02", "cover-04", "cover-06", "cover-03", "cover-05", "cover-01"],
  },
  icon: {
    title: "圖示設計",
    category: "Design / Icon",
    year: "2024",
    type: "設計",
    scope: "圖示系統、社群素材、介面元素",
    description: "建立簡約一致的圖示語言，可應用於網站、貼文、簡報與品牌素材。",
    covers: ["cover-03", "cover-06", "cover-01", "cover-05", "cover-02", "cover-04"],
  },
  handdrawn: {
    title: "手繪作品",
    category: "Illustration / Hand Drawn",
    year: "2025",
    type: "手繪",
    scope: "插畫、線稿、手感素材",
    description: "以溫柔線條和日常觀察作為出發點，呈現帶有手感的插畫作品。",
    covers: ["cover-04", "cover-05", "cover-03", "cover-02", "cover-01", "cover-06"],
  },
  unboxing: {
    title: "商品開箱",
    category: "Unboxing / Product",
    year: "2024",
    type: "開箱",
    scope: "產品紀錄、細節拍攝、使用情境",
    description: "用乾淨構圖呈現產品細節與使用感，適合部落格、社群與品牌介紹。",
    covers: ["cover-05", "cover-01", "cover-04", "cover-06", "cover-03", "cover-02"],
  },
  "sewing-bag": {
    title: "手作包款",
    category: "Sewing / Handmade Bag",
    year: "2024",
    type: "縫紉",
    scope: "版型、布料搭配、成品紀錄",
    description: "記錄包款從布料選擇到成品細節的過程，呈現手作作品的溫度。",
    covers: ["cover-06", "cover-02", "cover-05", "cover-04", "cover-01", "cover-03"],
  },
  "sewing-design": {
    title: "縫紉設計",
    category: "Sewing / Textile",
    year: "2024",
    type: "縫紉",
    scope: "打版、布品設計、客製製作",
    description: "收錄不同布品與縫紉設計，包含尺寸規劃、材質搭配與完成品展示。",
    covers: ["cover-01", "cover-06", "cover-04", "cover-02", "cover-05", "cover-03"],
  },
};

function updateHeader() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 18);
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    albumCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

function renderAlbumPage() {
  const titleNode = document.querySelector("[data-album-title]");
  const galleryGrid = document.querySelector("[data-gallery-grid]");

  if (!titleNode || !galleryGrid) return;

  const params = new URLSearchParams(window.location.search);
  const albumId = params.get("id") || "photo-portrait";
  const album = albums[albumId] || albums["photo-portrait"];

  document.title = `${album.title} | Atelier Mori`;
  titleNode.textContent = album.title;
  document.querySelector("[data-album-category]").textContent = album.category;
  document.querySelector("[data-album-description]").textContent = album.description;
  document.querySelector("[data-album-year]").textContent = album.year;
  document.querySelector("[data-album-type]").textContent = album.type;
  document.querySelector("[data-album-scope]").textContent = album.scope;

  const feature = document.querySelector("[data-gallery-feature]");
  feature.className = `gallery-feature ${album.covers[0]}`;
  feature.setAttribute("aria-label", `${album.title} 主視覺`);

  galleryGrid.innerHTML = album.covers
    .map(
      (cover, index) => `
        <figure class="gallery-item">
          <button
            class="gallery-thumb"
            type="button"
            data-cover="${cover}"
            data-caption="${album.title} / ${String(index + 1).padStart(2, "0")}"
            aria-label="放大檢視 ${album.title} 圖片 ${index + 1}"
          >
            <span class="gallery-image ${cover}"></span>
          </button>
          <figcaption>${album.title} / ${String(index + 1).padStart(2, "0")}</figcaption>
        </figure>
      `
    )
    .join("");
}

function openLightbox(cover, caption) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;

  lightboxImage.className = `lightbox-image ${cover}`;
  lightboxImage.setAttribute("aria-label", caption);
  lightboxCaption.textContent = caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-lightbox-open");
}

function closeLightbox() {
  if (!lightbox) return;

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-lightbox-open");
}

document.addEventListener("click", (event) => {
  const thumb = event.target.closest("[data-cover]");

  if (thumb) {
    openLightbox(thumb.dataset.cover, thumb.dataset.caption);
    return;
  }

  if (event.target === lightbox || event.target === lightboxClose) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
renderAlbumPage();
