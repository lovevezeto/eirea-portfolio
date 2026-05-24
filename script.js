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
    title: "情境攝影",
    category: "Photography / Lifestyle",
    year: "2026",
    type: "攝影",
    scope: "拍攝企劃、修圖、色調整理",
    description: "以自然光和低飽和色彩捕捉生活場景，保留安靜、柔和且帶有故事感的氛圍。",
    covers: ["photo-scene-image", "cover-02", "cover-03", "cover-04", "cover-05", "cover-06"],
  },
  "brand-website": {
    title: "形象網站",
    category: "Website / Brand Site",
    year: "2026",
    type: "網站設計",
    scope: "網站企劃、版面設計、響應式切版",
    description: "為個人品牌、服務介紹與作品集規劃形象網站，重視品牌質感、閱讀節奏與手機版體驗。",
    covers: ["website-brand-image", "cover-04", "cover-02", "cover-06", "cover-03", "cover-05"],
  },
  "ecommerce-website": {
    title: "電商網站",
    category: "Website / E-commerce",
    year: "2026",
    type: "網站設計",
    scope: "商品頁設計、平台版面、購物流程視覺",
    description: "整理商品資訊、活動視覺與購物動線，建立清楚好逛且符合品牌調性的電商網站頁面。",
    covers: ["website-shop-image", "cover-05", "cover-01", "cover-03", "cover-06", "cover-02"],
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
    title: "電商圖文",
    category: "Design / E-commerce Graphic",
    year: "2025",
    type: "設計",
    scope: "主視覺、字體編排、印刷版面",
    description: "以清楚資訊層級和穩定構圖完成電商圖文，適合商品頁、活動頁與社群宣傳。",
    covers: ["cover-03", "cover-05", "cover-01", "cover-06", "cover-02", "cover-04"],
  },
  graphic: {
    title: "產品設計",
    category: "Design / Product",
    year: "2025",
    type: "設計",
    scope: "版面設計、品牌延伸、視覺規範",
    description: "整理產品概念、視覺素材與使用情境，呈現乾淨、成熟且容易理解的設計方向。",
    covers: ["cover-04", "cover-01", "cover-06", "cover-02", "cover-03", "cover-05"],
  },
  package: {
    title: "包裝紙盒設計",
    category: "Design / Package",
    year: "2024",
    type: "設計",
    scope: "包裝外觀、標籤、商品視覺",
    description: "以材質、色彩與品牌語氣為核心，建立適合商品上架、拍攝與陳列的包裝紙盒設計。",
    covers: ["cover-05", "cover-04", "cover-02", "cover-01", "cover-06", "cover-03"],
  },
  logo: {
    title: "LOGO設計",
    category: "Design / Identity",
    year: "2024",
    type: "設計",
    scope: "標誌設計、識別應用、比例規劃",
    description: "從品牌個性出發，設計可延伸於名片、包裝、社群與網站的識別標誌。",
    covers: ["cover-06", "cover-03", "cover-05", "cover-01", "cover-04", "cover-02"],
  },
  dm: {
    title: "DM海報",
    category: "Design / Print",
    year: "2024",
    type: "設計",
    scope: "宣傳物、資訊編排、印刷輸出",
    description: "將活動資訊與品牌質感整合在版面裡，讓讀者快速理解宣傳重點。",
    covers: ["dm-image", "cover-03", "cover-02", "cover-04", "cover-06", "cover-05"],
  },
  card: {
    title: "貼紙設計",
    category: "Design / Sticker",
    year: "2024",
    type: "設計",
    scope: "貼紙版面、印刷細節、品牌小物",
    description: "以簡潔版面呈現品牌特色，保留紙材、刀模與留白帶來的精緻感。",
    covers: ["cover-02", "cover-04", "cover-06", "cover-03", "cover-05", "cover-01"],
  },
  icon: {
    title: "其他",
    category: "Design / Others",
    year: "2024",
    type: "設計",
    scope: "延伸設計、社群素材、品牌小物",
    description: "收錄其他延伸視覺作品，可應用於網站、貼文、簡報與品牌素材。",
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
    title: "產品開箱",
    category: "Unboxing / Product",
    year: "2024",
    type: "開箱",
    scope: "產品紀錄、細節拍攝、使用情境",
    description: "用乾淨構圖呈現產品細節與使用感，適合部落格、社群與品牌介紹。",
    covers: ["cover-05", "cover-01", "cover-04", "cover-06", "cover-03", "cover-02"],
  },
  "sewing-bag": {
    title: "拼布包",
    category: "Sewing / Handmade Bag",
    year: "2024",
    type: "縫紉",
    scope: "版型、布料搭配、成品紀錄",
    description: "記錄拼布包從布料選擇到成品細節的過程，呈現手作作品的溫度。",
    covers: ["cover-06", "cover-02", "cover-05", "cover-04", "cover-01", "cover-03"],
  },
  "sewing-design": {
    title: "服裝設計",
    category: "Sewing / Fashion Design",
    year: "2024",
    type: "縫紉",
    scope: "打版、服裝設計、客製製作",
    description: "收錄不同服裝與服裝縫紉作品，包含尺寸規劃、材質搭配與完成品展示。",
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

  document.title = `${album.title} | 張詠淇｜設計作品集`;
  titleNode.textContent = album.title;
  document.querySelector("[data-album-category]").textContent = album.category;
  document.querySelector("[data-album-description]").textContent = album.description;
  document.querySelector("[data-album-year]").textContent = album.year;
  document.querySelector("[data-album-type]").textContent = album.type;
  document.querySelector("[data-album-scope]").textContent = album.scope;

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
