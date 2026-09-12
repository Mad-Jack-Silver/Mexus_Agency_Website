/**
 * Mexus Agency — Luxury Real Estate Web Application
 * Comprehensive Interactive Controller & State Management
 */

// Exchange rate constant for approximate USD conversion (1 USD ≈ 17.50 MXN)
const USD_RATE = 17.5;

// Complete curated property collection
const properties = [
  {
    id: "prop-1",
    title: "Terreno en Renta — Excelente Ubicación Comercial",
    location: "Santa María, San Francisco del Rincón, GTO",
    priceMxn: 52500,
    priceMxnFormatted: "$52,500 MXN / mes",
    isRent: true,
    type: "Land",
    categoryLabel: "Commercial Land",
    details: "1,500 m²",
    badge: "For Rent",
    image: "assets/inmuebles24/01-commercial-land-rent.jpg",
    description: "Excelente oportunidad comercial en una zona de alto flujo vehicular, cerca de Gasolinera Shell. Superficie flexible con gran frente, documentación en regla, servicios a pie de lote y libre de gravamen. Ideal para franquicias, patios de maniobras o desarrollo comercial."
  },
  {
    id: "prop-2",
    title: "Terreno en Santo Domingo",
    location: "El Mayorazgo, León, GTO",
    priceMxn: 1450000,
    priceMxnFormatted: "$1,450,000 MXN",
    isRent: false,
    type: "Land",
    categoryLabel: "Residential Land",
    details: "240 m²",
    badge: "For Sale",
    image: "assets/inmuebles24/02-santo-domingo-land.jpg",
    description: "Terreno irregular con 26 metros de frente en fraccionamiento privado con control de acceso y seguridad 24/7. Excelente conectividad a vías rápidas, cercanía inmediata a centros comerciales de primer nivel, colegios y zonas de alta plusvalía."
  },
  {
    id: "prop-3",
    title: "Terreno Habitacional de 6 Ha — Zona Sur de León",
    location: "Fraccionamiento El Encanto, León, GTO",
    priceMxn: 93000000,
    priceMxnFormatted: "$93,000,000 MXN",
    isRent: false,
    type: "Land",
    categoryLabel: "Macro Development",
    details: "60,000 m² (6 Hectáreas)",
    badge: "Prime Investment",
    image: "assets/inmuebles24/03-six-hectares-leon.jpg",
    description: "Macro-lote dentro de la mancha urbana con uso de suelo habitacional de media y alta densidad. Cuenta con factibilidad de servicios y futuro acceso estratégico por Boulevard Valtierra. Escrituras en regla, libre de todo gravamen; ideal para desarrolladores inmobiliarios institucionales."
  },
  {
    id: "prop-4",
    title: "Terreno en Mayorazgo La Gavia",
    location: "El Mayorazgo, León, GTO",
    priceMxn: 1649000,
    priceMxnFormatted: "$1,649,000 MXN",
    isRent: false,
    type: "Land",
    categoryLabel: "Residential Lot",
    details: "161 m² (7 × 23 m)",
    badge: "Exclusive",
    image: "assets/inmuebles24/04-la-gavia-land.jpg",
    description: "Lote 32, Manzana 59. Terreno plano y regular de 7 × 23 m, ideal para proyecto arquitectónico contemporáneo de dos o tres niveles. Ubicado en una de las secciones más consolidadas y cotizadas de El Mayorazgo."
  },
  {
    id: "prop-5",
    title: "Casa con Local Comercial o Bodega Adaptable",
    location: "Santa Rita, San Francisco del Rincón, GTO",
    priceMxn: 3100000,
    priceMxnFormatted: "$3,100,000 MXN",
    isRent: false,
    type: "Commercial",
    categoryLabel: "Mixed Use",
    details: "2 rec. · 3 baños · 119 m²",
    badge: "Mixed Use",
    image: "assets/inmuebles24/05-san-francisco-commercial-house.jpg",
    description: "Versátil propiedad de tres niveles construidos con local/bodega de gran altura en planta baja, cochera amplia y área residencial superior. Perfecta para consultorios, oficinas corporativas, centro de distribución o inversión de renta mixta."
  },
  {
    id: "prop-6",
    title: "14 Lotes Campestres en Jalpa de Cánovas",
    location: "Pueblo Mágico Purísima del Rincón, GTO",
    priceMxn: 1680000,
    priceMxnFormatted: "$1,680,000 MXN / lote",
    isRent: false,
    type: "Land",
    categoryLabel: "Country Estates",
    details: "1,200 m² c/u",
    badge: "Eco-Luxury",
    image: "assets/inmuebles24/06-jalpa-lots.jpg",
    description: "Catorce exclusivos lotes campestres con escritura individual registrada. Entorno natural privilegiado rodeado de nogales centenarios; ideal para residencias de descanso, proyectos de hospedaje boutique, bienestar holístico o instalaciones ecuestres."
  },
  {
    id: "prop-7",
    title: "Propiedad Comercial sobre Av. Mariano Escobedo",
    location: "León II, León, GTO",
    priceMxn: 14000000,
    priceMxnFormatted: "$14,000,000 MXN",
    isRent: false,
    type: "Commercial",
    categoryLabel: "Commercial Plaza",
    details: "816 m² · 6 baños",
    badge: "High Yield",
    image: "assets/inmuebles24/07-mariano-escobedo-commercial.jpg",
    description: "Inmueble comercial de alto rendimiento: cinco locales comerciales totalmente rentados, casa habitación independiente, departamento y estructura espectacular para publicidad exterior. Genera ingresos inmediatos mensuales superiores a $55,000 MXN más publicidad; precio negociable."
  },
  {
    id: "prop-8",
    title: "Granja Campestre en Colinas del Sur",
    location: "Silao, Guanajuato",
    priceMxn: 950000,
    priceMxnFormatted: "$950,000 MXN",
    isRent: false,
    type: "Land",
    categoryLabel: "Ranch / Land",
    details: "1,000 m²",
    badge: "Opportunity",
    image: "assets/inmuebles24/08-colinas-sur-farm.jpg",
    description: "Propiedad bardeada en su totalidad con fosa séptica instalada, construcción en obra negra avanzada, materiales incluidos en sitio y área arbolada. Conexión rápida a la autopista León-Silao y Puerto Interior. Precio negociable."
  },
  {
    id: "prop-9",
    title: "7 Hectáreas en San José de La Calera",
    location: "San Francisco del Rincón, GTO",
    priceMxn: 2450000,
    priceMxnFormatted: "$2,450,000 MXN",
    isRent: false,
    type: "Land",
    categoryLabel: "Rural Land",
    details: "70,000 m² (7 Ha)",
    badge: "Development",
    image: "assets/inmuebles24/09-seven-hectares.jpg",
    description: "Extensión de siete hectáreas limpias con topografía semiplana e irregular. Escrituración inmediata en orden, libre de gravamen. Oportunidad idónea para agricultura tecnificada, granjas solares o desarrollo de casas de campo."
  },
  {
    id: "prop-10",
    title: "Casa de Lujo en Mayorazgo Santa Elena",
    location: "Mayorazgo Santa Elena, León, GTO",
    priceMxn: 5300000,
    priceMxnFormatted: "$5,300,000 MXN",
    isRent: false,
    type: "House",
    categoryLabel: "Luxury Residence",
    details: "3 rec. · 3 baños · 183.5 m² T (216 m² C)",
    badge: "Featured House",
    image: "assets/inmuebles24/10-santa-elena-house.jpg",
    description: "Imponente residencia contemporánea de 216 m² de construcción. Consta de home office privado, balcón panorámico, cocina integral con cubierta de granito, bodega, acabados en maderas nobles, acceso a casa club con gimnasio y alberca climatizada."
  },
  {
    id: "prop-11",
    title: "Casa Nueva en Mayorazgo Santa Lucía",
    location: "El Mayorazgo, León, GTO",
    priceMxn: 5200000,
    priceMxnFormatted: "$5,200,000 MXN",
    isRent: false,
    type: "House",
    categoryLabel: "Modern Residence",
    details: "3 rec. · 3 baños · 161 m² T (205 m² C)",
    badge: "Brand New",
    image: "assets/inmuebles24/11-santa-lucia-4650.jpg",
    description: "Residencia nueva a estrenar con techos de 3.0 m de altura libre, cochera techada para dos autos, cocina de diseño equipada, jardín privado con terraza, recámara principal con vestidor de gran formato y sala de televisión familiar."
  },
  {
    id: "prop-12",
    title: "Residencia a Estrenar en Santa Lucía",
    location: "El Mayorazgo, León, GTO",
    priceMxn: 5200000,
    priceMxnFormatted: "$5,200,000 MXN",
    isRent: false,
    type: "House",
    categoryLabel: "Turnkey Residence",
    details: "3 rec. · 2.5 baños · 192 m² T",
    badge: "Turnkey",
    image: "assets/inmuebles24/12-santa-lucia-5100.jpg",
    description: "Arquitectura moderna con excelente orientación y luz natural. Amplia estancia con ventanales de piso a techo, cocina integral con isla, jardín posterior, vestidor en recámara máster y seguridad 24/7 en clúster exclusivo."
  },
  {
    id: "prop-13",
    title: "Terreno Frente a Área Verde — Santo Domingo",
    location: "El Mayorazgo, León, GTO",
    priceMxn: 1331625,
    priceMxnFormatted: "$1,331,625 MXN",
    isRent: false,
    type: "Land",
    categoryLabel: "Premium Lot",
    details: "198.8 m² (8 × 24.5 m)",
    badge: "Green View",
    image: "assets/inmuebles24/13-santo-domingo-green.jpg",
    description: "Excelente lote de 8 metros de frente por 24.5 metros de fondo con vista directa y despejada a las áreas verdes del fraccionamiento. Máxima privacidad, barda perimetral electrificada y alta plusvalía garantizada."
  },
  {
    id: "prop-14",
    title: "Residencia Signature en Mayorazgo Corralejo",
    location: "El Mayorazgo, León, GTO",
    priceMxn: 11300000,
    priceMxnFormatted: "$11,300,000 MXN",
    isRent: false,
    type: "House",
    categoryLabel: "Signature Estate",
    details: "4 rec. · 4.5 baños · 622 m² C",
    badge: "Luxury Estate",
    image: "assets/inmuebles24/14-corralejo-house.jpg",
    description: "Residencia de gran lujo con 622 m² de construcción sobre amplio terreno. Cuatro espaciosas recámaras con baño privado y vestidor, doble altura en área social, cochera para tres camionetas, cuarto de servicio y acabados premium en mármol y encino."
  },
  {
    id: "prop-15",
    title: "Casa en Venta o Renta — Mayorazgo La Gavia",
    location: "Mayorazgo La Gavia, León, GTO",
    priceMxn: 4200000,
    priceMxnFormatted: "$4,200,000 MXN",
    isRent: false,
    type: "House",
    categoryLabel: "Sale / Rent",
    details: "3 rec. · 2.5 baños · 161 m² T (248 m² C)",
    badge: "Sale / Rent",
    image: "assets/inmuebles24/15-la-gavia-house.jpg",
    description: "Casa contemporánea de 248 m² construidos con doble altura, cocina equipada con barra desayunadora, jardín, terraza techada y carpintería fina. Opción de renta: $18,000 MXN sin amueblar o $24,000 MXN totalmente amueblada."
  }
];

// App State
let currentType = "All";
let currentCurrency = "MXN"; // "MXN" or "USD"
let currentProperty = null;

// Helpers
function formatCurrency(amountMxn, isRent = false) {
  if (currentCurrency === "USD") {
    const usdAmount = Math.round(amountMxn / USD_RATE);
    const formatted = "$" + usdAmount.toLocaleString("en-US") + " USD";
    return isRent ? `${formatted} / mo` : formatted;
  }
  const formatted = "$" + amountMxn.toLocaleString("es-MX") + " MXN";
  return isRent ? `${formatted} / mes` : formatted;
}

function getSecondaryCurrencyText(amountMxn, isRent = false) {
  if (currentCurrency === "USD") {
    const formatted = "$" + amountMxn.toLocaleString("es-MX") + " MXN";
    return `Approx. ${isRent ? formatted + ' / mes' : formatted}`;
  }
  const usdAmount = Math.round(amountMxn / USD_RATE);
  const formatted = "$" + usdAmount.toLocaleString("en-US") + " USD";
  return `Approx. ${isRent ? formatted + ' / mo' : formatted}`;
}

// Toast Notification
function showToast(message, icon = "✓") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.querySelector(".toast-icon").textContent = icon;
  toast.querySelector(".toast-message").textContent = message;
  toast.classList.add("show");
  
  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// Page Navigation Controller
function showPage(pageId) {
  const targetPage = document.getElementById(pageId);
  if (!targetPage) return;

  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === pageId));
  document.querySelectorAll("[data-page]").forEach(b => {
    if (b.classList.contains("gold-btn") || b.classList.contains("ghost-btn") || b.classList.contains("brand") || b.classList.contains("link-btn")) return;
    b.classList.toggle("active", b.dataset.page === pageId);
  });

  // Close mobile navigation drawer if open
  const headerNav = document.querySelector(".header-nav");
  const menuBtn = document.querySelector(".mobile-menu-btn");
  if (headerNav) headerNav.classList.remove("open");
  if (menuBtn) menuBtn.classList.remove("open");

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Update URL hash without reload
  if (history.pushState) {
    history.pushState(null, null, `#${pageId}`);
  } else {
    location.hash = `#${pageId}`;
  }
}

// Card Template Builder
function createPropertyCard(p) {
  const article = document.createElement("article");
  article.className = "card";
  article.tabIndex = 0;
  article.setAttribute("role", "button");
  article.setAttribute("aria-label", `View details for ${p.title}`);

  const formattedPrice = formatCurrency(p.priceMxn, p.isRent);

  article.innerHTML = `
    <div class="card-img-wrap">
      <img src="${p.image}" alt="${p.title}" loading="lazy">
      <span class="card-badge">${p.badge || p.type}</span>
      <span class="card-arrow">↗</span>
    </div>
    <div class="card-body">
      <p class="eyebrow dark">${p.location}</p>
      <h3>${p.title}</h3>
      <div class="card-meta">
        <strong class="card-price">${formattedPrice}</strong>
        <span class="card-specs">${p.details}</span>
      </div>
    </div>
  `;

  article.addEventListener("click", () => openModal(p));
  article.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(p);
    }
  });

  return article;
}

// Render Collection & Featured
function renderProperties() {
  const searchInput = document.getElementById("search");
  const query = (searchInput?.value || "").trim().toLowerCase();
  const clearBtn = document.getElementById("search-clear");
  const emptyState = document.getElementById("empty-state");
  const box = document.querySelector(".cards.all");
  const countLabel = document.getElementById("results-count");
  const currencyLabel = document.getElementById("active-currency-label");

  if (clearBtn) {
    clearBtn.classList.toggle("visible", query.length > 0);
  }

  if (currencyLabel) {
    currencyLabel.textContent = currentCurrency === "USD" ? "Currency: US Dollars (USD)" : "Currency: Mexican Pesos (MXN)";
  }

  const filtered = properties.filter(p => {
    const matchesType = (currentType === "All" || p.type === currentType);
    const searchTarget = `${p.title} ${p.location} ${p.type} ${p.description}`.toLowerCase();
    const matchesQuery = !query || searchTarget.includes(query);
    return matchesType && matchesQuery;
  });

  // Render Collection
  if (box) {
    box.innerHTML = "";
    filtered.forEach(p => box.appendChild(createPropertyCard(p)));
  }

  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} curated ${filtered.length === 1 ? 'property' : 'properties'}`;
  }

  if (emptyState) {
    emptyState.classList.toggle("show", filtered.length === 0);
  }

  // Render Featured on Home
  const featuredBox = document.querySelector(".cards.featured");
  if (featuredBox) {
    featuredBox.innerHTML = "";
    properties.slice(0, 3).forEach(p => featuredBox.appendChild(createPropertyCard(p)));
  }

  // Update dynamic filter counts
  updateFilterCounts();
}

function updateFilterCounts() {
  const total = properties.length;
  const houseCount = properties.filter(p => p.type === "House").length;
  const landCount = properties.filter(p => p.type === "Land").length;
  const commCount = properties.filter(p => p.type === "Commercial").length;

  const countAll = document.getElementById("count-all");
  const countHouse = document.getElementById("count-house");
  const countLand = document.getElementById("count-land");
  const countComm = document.getElementById("count-comm");

  if (countAll) countAll.textContent = total;
  if (countHouse) countHouse.textContent = houseCount;
  if (countLand) countLand.textContent = landCount;
  if (countComm) countComm.textContent = commCount;
}

// Modal Controller
function openModal(p) {
  currentProperty = p;
  const modal = document.getElementById("property-modal");
  if (!modal) return;

  const modalImg = modal.querySelector(".modal-image");
  const modalTitle = modal.querySelector(".modal-title");
  const modalType = modal.querySelector(".modal-type");
  const modalPrice = modal.querySelector(".modal-price");
  const modalPriceAlt = modal.querySelector(".modal-price-alt");
  const modalLocation = modal.querySelector(".modal-location");
  const modalSpecs = modal.querySelector(".modal-specs");
  const modalCategory = modal.querySelector(".modal-category");
  const modalDesc = modal.querySelector(".modal-description");

  modalImg.src = p.image;
  modalImg.alt = p.title;
  modalTitle.textContent = p.title;
  modalType.textContent = `${p.type.toUpperCase()} · ${p.badge || 'EXCLUSIVE'}`;
  modalPrice.textContent = formatCurrency(p.priceMxn, p.isRent);
  modalPriceAlt.textContent = getSecondaryCurrencyText(p.priceMxn, p.isRent);
  modalLocation.textContent = p.location;
  modalSpecs.textContent = p.details;
  modalCategory.textContent = p.categoryLabel || p.type;
  modalDesc.textContent = p.description;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Lock scroll
}

function closeModal() {
  const modal = document.getElementById("property-modal");
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Currency Switcher
function setCurrency(curr) {
  currentCurrency = curr;
  document.getElementById("curr-mxn")?.classList.toggle("active", curr === "MXN");
  document.getElementById("curr-usd")?.classList.toggle("active", curr === "USD");
  
  renderProperties();

  if (currentProperty) {
    const modalPrice = document.querySelector(".modal-price");
    const modalPriceAlt = document.querySelector(".modal-price-alt");
    if (modalPrice) modalPrice.textContent = formatCurrency(currentProperty.priceMxn, currentProperty.isRent);
    if (modalPriceAlt) modalPriceAlt.textContent = getSecondaryCurrencyText(currentProperty.priceMxn, currentProperty.isRent);
  }

  showToast(`Currency switched to ${curr === 'USD' ? 'US Dollars (USD)' : 'Mexican Pesos (MXN)'}`);
}

// Event Listeners Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Hash Routing
  const initialHash = window.location.hash.replace("#", "");
  if (initialHash && document.getElementById(initialHash)) {
    showPage(initialHash);
  }

  // Navigation Links
  document.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal();
      showPage(btn.dataset.page);
    });
  });

  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const headerNav = document.querySelector(".header-nav");
  if (menuBtn && headerNav) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      headerNav.classList.toggle("open");
    });
  }

  // Currency Toggle Listeners
  document.getElementById("curr-mxn")?.addEventListener("click", () => setCurrency("MXN"));
  document.getElementById("curr-usd")?.addEventListener("click", () => setCurrency("USD"));

  // Search and Filters
  const searchInput = document.getElementById("search");
  const clearBtn = document.getElementById("search-clear");
  const resetBtn = document.getElementById("reset-filters-btn");

  searchInput?.addEventListener("input", renderProperties);
  clearBtn?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    renderProperties();
    searchInput?.focus();
  });

  resetBtn?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    currentType = "All";
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.type === "All"));
    renderProperties();
  });

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentType = btn.dataset.type;
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b === btn));
      renderProperties();
    });
  });

  // Modal Close Listeners
  document.querySelector(".modal-close")?.addEventListener("click", closeModal);
  
  const modal = document.getElementById("property-modal");
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Property Enquiry Button from Modal
  document.querySelector(".property-enquiry")?.addEventListener("click", () => {
    if (!currentProperty) return;
    closeModal();
    showPage("contact");

    // Pre-fill contact form
    const interestSelect = document.getElementById("interest");
    const messageField = document.getElementById("message");
    
    if (interestSelect) {
      if (currentProperty.type === "Land") interestSelect.value = "Investment Land / Development";
      else if (currentProperty.type === "Commercial") interestSelect.value = "Commercial Real Estate";
      else interestSelect.value = "Buying a Luxury Residence";
    }

    if (messageField) {
      messageField.value = `I am interested in acquiring details for: "${currentProperty.title}" (${currentProperty.location}) — ${currentProperty.priceMxnFormatted}. Please provide documentation and arrange a private consultation.`;
    }

    showToast("Property enquiry details loaded into contact form");
  });

  // Share Property Link
  document.querySelector(".property-share")?.addEventListener("click", async () => {
    if (!currentProperty) return;
    const shareData = {
      title: `MEXUS Agency — ${currentProperty.title}`,
      text: `${currentProperty.title} (${currentProperty.location}) — ${currentProperty.priceMxnFormatted}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showToast("Property shared successfully!");
      } catch (err) {
        // User cancelled share
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        showToast("Property summary copied to clipboard!");
      } catch (err) {
        showToast("Unable to copy to clipboard", "✕");
      }
    }
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const firstName = data.get("first_name") || "";
    const lastName = data.get("last_name") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const interest = data.get("interest") || "General Private Enquiry";
    const budget = data.get("budget") || "Not Specified";
    const message = data.get("message") || "";

    const subject = encodeURIComponent(`MEXUS Private Client Enquiry — ${interest} (${firstName} ${lastName})`);
    const body = encodeURIComponent(
      `MEXUS AGENCY PRIVATE ENQUIRY\n` +
      `=============================\n\n` +
      `Client: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Interest: ${interest}\n` +
      `Target Capital: ${budget}\n\n` +
      `Message & Objectives:\n${message}\n\n` +
      `Sent via MEXUS Agency Portfolio Platform`
    );

    // Trigger email client
    window.location.href = `mailto:aidi@mexusagency.com?subject=${subject}&body=${body}`;

    // Show luxury feedback toast
    showToast("Opening email client to send your encrypted enquiry...");
    
    const note = contactForm.querySelector(".form-note");
    if (note) {
      note.innerHTML = `<span style="color: #2e7d32; font-weight: 600;">✓ Enquiry generated.</span> Your mail client was opened addressed to <strong>aidi@mexusagency.com</strong>.`;
    }
  });

  // Initial render
  renderProperties();
});
