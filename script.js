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
    covers: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCDpFbgPM2-cGIIAOkhy991MZ-NWHjv5BBMkhKvBXFJiiHpfSjCZzrlHt4NI25_V0FkPMPWwGy6o2jL5CRhGQkYl2fpgRGFVnBfjjrDAFThK-cTefhKxly1X2wcl5PsLknDEoO7uWAlSo/s0/DSC_0665_00001.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK8nFv5S_5s1QbBZBiFifO7X5p8UyzbBKLYv38gdsoiZcBnq4oWOwrH3LLgmFRUdxXJBafmvAI0d7uNig25cnX9QgGJVJ5meLH3yUPcJV4eePdDDDPrv3qvhRhnUFF903IA0kLM-n0NB0/s0/DSC_2524_01.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkkgoqfDo0dhia3vZXhWM-J-Gj-0RHzJ0Jr4hWnpotwn2NKRuVDglqDY9fRrKKSs8oCJkA6DsLFC49wxxO5ZWDdBHk6E99zHa4snOLzTS9lSovVxWpfINFbFxVR1B0s0pCm7ay8PC8DFU/s0/DSC00397.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaPG32aa1dTJ2Tds26X-8v7QyevoZnH0R9ey1WnAx94UW0_Bcz_CKnOzkimgOS-WqHF7jpbsnKKtdNuf8Ev2IfVtUOmjPqAdSEsEO48yhuiZ-4_sxI80VDCvk2G8QAKVfLMw_1lVTEHyt7MREgm3BnMEFJqlWM9TeOkWPXgSXv4pwmaqnJOmzh04s/s16000/DSC_2189.JPG",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqsuYLnusJKirs5Z0ontTAEdvfuuDVx9R_oB3yq0vB0rKm7adPSv5ODIP-nxXeUlI1MJZIoCEMg7Lp5Hi-wmR7LJslKG8HWddl_mL-B6mp6OW-ZCqkljwhJgG88SzveqOer_MWZsWLjhOIy3XgVNZqqLLSOkPaDcdmFSX2jK51d9kuM1Jy4uvlOZ0/s16000/DSC_2273.JPG",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSyI1B73TKA19-xiHgxRGeZTcy3g9T5qIG6z4XvUpJozd5ZSwukXGXXqmbuuviJRLbQlqLxTB2ZYlYnW2-y3TDxX7H6NgpO2kO94k1fc2fduEX4DsuGi9vhAArPj-hBNDtzNWcUcNg4xNLcrYopLKdsIxkyNvdPVjm94LYyOaGsTWZE80vQX_R6-s/s16000/DSC_2285.JPG",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPw1K8e0k4nB-SKHo_wJLJCsMDSe3zlAeVBKXXWipgH_0_j9DuSdYEzIlmKsD4DZUgRHmy07hKj-U6iY_U-Bq0Z1ICazBrrPBvyCw55Rk3p2NOq5-mUZMzg2-1uGYwOJi9q7j_CZgXDVa1P0t6s3Qln5sanOA4obhL67WCr00gxnvCi_PE6uIuT5E/s16000/DSC_2348.JPG",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoZrioYmkK_3jt0SJPuG61d8PQaDZfoM9IzJBvA5UPxHkqA3pqnRN4EUYJJ4zr9jl81caBWmZwx1-vw6rtAybDoiVUz7MJEwBw7tN1qSbQlbpJwvno32kYVDWd4o54uXRl7zfuuEe1Ea0wjfOHUevab9To4QKDrPPq-UZnMHV4PxgWqVuXxoUKuno/s16000/DSC_2953.JPG",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_2T807XZ9ZdXTOcQi_jcqlZvFvG3Ni0J8Lrq71oOWyTQm-PCFk7-hSS9EGlkZdrJEs16rhf-5ZS-SXCt1W0e1QWz-5ChF-L7mdlSRSRICB4l57Oy9W5bGY-V606EawaHElKkcDiusXR8TRLc5XWCTSSyWF6rxu0dCextyH-zgJgvRpdJ_en_1okk/s16000/DSC_1659.JPG",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisY_RlU7BQhfssuTwNybpSMWwz_Z-ZIsRBe6n7GOzgarZig0MpEUaSCgyYvXJvm0AAfD7xPR10OzznTBDV86a9HVOE30vWiX-C3CkC_1ksDAY-Y1yA_NQuacgjsR1Ra_MI6MFQy8J2ofc/s0/DSC_0885_00001.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuH2vl8_iP0VipGly0BR76Xj7Z66MUGEMN2xcMo5lt32IpUP2aba_bxA1W3uBFVA1PSa1fxLEdO4lQ2sb08y5TRiFb3rcP4KeGrvTid4ydynxXEPevKFFtle4h55__cEwUJelauoQ900k/s0/DSC_1149_00001.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBIXLvpAV_0YN7wg7GuCi1S7S7Psfpcf-K4jdltia9OIfRjRmJEIpC595mdG4py3JJC75jzAy3hiTfbUy3KLXBme10Zf3qkwwiMmqfSxOCGRvEfjcHbQJ5TGlPZujpLP8bSdko_eciEbM/s0/DSC_1167_00004.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivVgqFhjOE4EPz1BzGEHzCeH5fv6FJrPpetBBlt09lVQ-8PVF64VGIrIjT7sLGhncrPL2_Z84hATgqRstljNKYhpM05Sp-n5z31h6wH48caEdQQH6II24LarThZL0DsQNZY612I-V1e-g/s0/DSC_2471_00006.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCSKsy7bfJ6WGfEwujpKg2GehuF4jo0ku5KhNYPUAWQzftOHop421R50J1A6YB8XtZI_95TNrxAeo7GMpplb1jtlvqX6KG1NrjTJM9bTPFID5w3bh_KSDgxFLO8RyzckMixAP-vxv585I/s0/DSC_2573.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibAGLjrCpYsXVZ2eQKx5AzzEJ57j3xlT-Qf0HAaRVM86FK9fclGQJtskYubr5L1CJ5vmNlVpcuJLKEpp31HH87ummPJR-IG0MpgcO3iG0Fj8sBSNBOPt9oxlfFWBgkKQN7aXoWpAnmC9cyAfWRsWGZqaBNOpnSmHOujV9sdZxcVCkIlD6wHM7muB0/s16000/DSC_1730.JPG",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-GfleO7ZoCE_OU5TbmSomC4-MaOZmJueGbmCjkhfQAUD6EsJZGlmbsgLSehTkUaVYbOJnbfb-B9qxNElH3-UD32TXVfEShrMJ-bfuCAYpEvNlYfTETW85bVx-RW_C4-hhwhVZPYwZaU3u_luVdvVZovq43rOGuyvkUr25dHOYUoBx9-PieqW9ZKc/s16000/%E4%BA%AE%E5%BD%A4%20(3).jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCQNmnZyIRUQIRFTJE6aMmv-GuHgfwfM5xB-xl7ALZt17teHzseIzY1ecEejj7ZFdASATrqydubsfk84kiq0ha_W8P0740rE60t7E1_C7psvUSJZV4tkm1N6mJbor-iAVb-2NQPYM_EYE/s0/20-A004-2.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUX7HsZNnf_C9wPSf3cwJsPaisKMr7rJlUtrbFn_tR5kBT_UIzkRP0VBEHCa2od1TCeRkjUQX-dsDgnc1_RrqmKxBX2_OxJobRP2cluleQD_4hNTaktbgP5nggRwtQDKuo2EVOnCRkkQA/s0/30-A003-2.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEn6ga2UH2SvSlPjZtjuTd107641R0gsiqpLmdPUPY0-1l6cxXO2GH2ZAldxLH7xnAY6XYZMy0CApMFNEPo2Yg7yN6odY4UhDa8H_0Tbnjt2Gf1bWjfOcJ4w6edX1316v33yUa_P2QFnA/s0/30-A011-0.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvrp6kh_VP_tZOTR1xTDIDSF-HmMbHuBlm2__vfGs1AbHR0hOC1NaPhcHbHV67MGOt5Nb3xb_rLycxyJHaUwYJ2LHL-ktON87TZeyLkn3H9DJ0UW4COQ6Z0piRbmg0irC-N-aGbtQD8oo/s0/40-B004-2.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy-eD5aiLiw3z92U_4ocz5hNtB3zqEcAUG0tfDcOCed0YS6QluUHtwwkMoroxsWVcgsM8zenPHzXwfXb27UriPxrdA5aK0gW1J1xeSO5Oa8XIM3wnoCzRKzhD2igi_7rdGMxo_LTvnoHs/s0/50-A003-2.jpg",
    ],
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
            data-cover="${escapeAttribute(cover)}"
            data-caption="${album.title} / ${String(index + 1).padStart(2, "0")}"
            aria-label="放大檢視 ${album.title} 圖片 ${index + 1}"
          >
            <span class="gallery-image${isImageUrl(cover) ? "" : ` ${cover}`}"></span>
          </button>
          <figcaption>${album.title} / ${String(index + 1).padStart(2, "0")}</figcaption>
        </figure>
      `
    )
    .join("");

  galleryGrid.querySelectorAll("[data-cover]").forEach((button) => {
    const cover = button.dataset.cover;
    const image = button.querySelector(".gallery-image");

    if (isImageUrl(cover)) {
      image.style.backgroundImage = `url("${cover}")`;
    }
  });
}

function isImageUrl(value) {
  return /^https?:\/\//.test(value);
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function openLightbox(cover, caption) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;

  lightboxImage.className = `lightbox-image${isImageUrl(cover) ? "" : ` ${cover}`}`;
  lightboxImage.style.backgroundImage = isImageUrl(cover) ? `url("${cover}")` : "";
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
