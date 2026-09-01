/**
 * MAIA COLETTO - SITIO WEB OFICIAL
 * Lógica interactiva: Carrusel, Mapas, Lightbox, Filtros, Menú Móvil y Animaciones
 */

// Base de datos de imágenes del proyecto
const projectImages = {
    deporte: [
        { src: "Fotos deporte/DSC_6552.JPG", caption: "Trail Running en Alta Montaña", category: "trail" },
        { src: "Fotos deporte/KILOMETRO VERTICAL-88.jpg", caption: "Subcampeona Nacional Kilómetro Vertical 2026", category: "trail" },
        { src: "Fotos deporte/052A3363.jpg", caption: "Triatlón Olímpico en Carrera", category: "triatlon" },
        { src: "Fotos deporte/UTMB-diegowinitzky-87.jpg", caption: "UTMB Series Patagonia", category: "trail" },
        { src: "Fotos deporte/LEKT-6643.jpg", caption: "Celebración en el Podio", category: "podios" },
        { src: "Fotos deporte/DSC_6562.JPG", caption: "Cumbre & Conexión Natural", category: "trail" },
        { src: "Fotos deporte/IMG-20260215-WA0062.jpg", caption: "Entrenamiento de Ciclismo", category: "triatlon" },
        { src: "Fotos deporte/LEKT-6651.jpg", caption: "Campeona Triatlón", category: "podios" },
        { src: "Fotos deporte/JCR-6704.jpg", caption: "Descenso Técnico en Montaña", category: "trail" },
        { src: "Fotos deporte/UTMB-diegowinitzky-88.jpg", caption: "Desafío en Carrera", category: "trail" },
        { src: "Fotos deporte/_MVP5489.jpg", caption: "Velocidad en Senderos", category: "trail" },
        { src: "Fotos deporte/IMG-20260310-WA0064.jpg", caption: "Ciclismo de Ruta", category: "triatlon" },
        { src: "Fotos deporte/@jpgarcia.photo-2357.jpg", caption: "Exigencia y Concentración", category: "trail" },
        { src: "Fotos deporte/@jpgarcia.photo-2358.jpg", caption: "Paso Firme en la Senda", category: "trail" },
        { src: "Fotos deporte/DSC_0024.JPG", caption: "Paisaje Patagónico", category: "trail" },
        { src: "Fotos deporte/IMG-20260111-WA0107.jpg", caption: "Entrenamiento en Altura", category: "trail" },
        { src: "Fotos deporte/IMG-20260125-WA0021.jpg", caption: "Preparación Física en Ruta", category: "triatlon" },
        { src: "Fotos deporte/IMG-20260223-WA0065.jpg", caption: "Pedaleando en la Patagonia", category: "triatlon" },
        { src: "Fotos deporte/IMG-20260304-WA0076.jpg", caption: "Sesión Matutina", category: "trail" },
        { src: "Fotos deporte/IMG-20260310-WA0065.jpg", caption: "Kilómetros de Fondo", category: "triatlon" },
        { src: "Fotos deporte/IMG-20260310-WA0069.jpg", caption: "Ruta y Montañas", category: "triatlon" },
        { src: "Fotos deporte/IMG-20260416-WA0097.jpg", caption: "Competencia Oficial", category: "podios" },
        { src: "Fotos deporte/IMG-20260804-WA0095.jpg", caption: "Esfuerzo en Carrera", category: "trail" },
        { src: "Fotos deporte/IMG-20260804-WA0177.jpg", caption: "Llegada y Meta", category: "podios" },
        { src: "Fotos deporte/IMG-20260804-WA0199.jpg", caption: "Celebración y Alegría", category: "podios" },
        { src: "Fotos deporte/IMG_3408.jpg", caption: "Entrenamiento de Fondo", category: "trail" },
        { src: "Fotos deporte/IMG_5339.JPG", caption: "Concentración antes de largar", category: "trail" },
        { src: "Fotos deporte/PSC_0088.jpg", caption: "Ritmo en Subida", category: "trail" },
        { src: "Fotos deporte/Photolab_image53178.jpg", caption: "Cuerpo y Mente en Carrera", category: "trail" },
        { src: "Fotos deporte/Photolab_image53995.jpg", caption: "Ascenso a la Cumbre", category: "trail" },
        { src: "Fotos deporte/Photolab_image53996.jpg", caption: "Paisaje de Montaña", category: "trail" },
        { src: "Fotos deporte/Photolab_image54000.jpg", caption: "Desafío Vertical", category: "trail" },
        { src: "Fotos deporte/_MVP5805.jpg", caption: "Trail en Bosque Nativo", category: "trail" },
        { src: "Fotos deporte/_MVP5808.jpg", caption: "Fluidez en Senda", category: "trail" },
        { src: "Fotos deporte/_MVP5887.jpg", caption: "Velocidad y Técnica", category: "trail" },
        { src: "Fotos deporte/utbtdesifadyaerhztne7eq0.jpg", caption: "Superación Constante", category: "podios" }
    ],
    cocina: [
        { src: "Fotos cocina/IMG-20260730-WA0083.jpg", caption: "Pastelería con Amor en La Nave de las Delicias" },
        { src: "Fotos cocina/IMG-20251223-WA0001.jpg", caption: "Alfajores de Maicena Artesanales" },
        { src: "Fotos cocina/IMG-20251223-WA0002.jpg", caption: "Horneado con Texturas Únicas" },
        { src: "Fotos cocina/IMG-20260115-WA0052.jpg", caption: "Selección Dulce" },
        { src: "Fotos cocina/IMG-20260115-WA0053.jpg", caption: "Cheesecake Japonés Soufflé" },
        { src: "Fotos cocina/IMG-20260115-WA0054.jpg", caption: "Opciones Sin TACC Exquisitas" },
        { src: "Fotos cocina/IMG-20260115-WA0055.jpg", caption: "Creaciones de Autor" },
        { src: "Fotos cocina/IMG-20260115-WA0056.jpg", caption: "Detalles que Enamoran" },
        { src: "Fotos cocina/IMG-20260115-WA0061.jpg", caption: "Pastelería Plant-Based y Vegana" },
        { src: "Fotos cocina/IMG-20260405-WA0028.jpg", caption: "Mesa Dulce para Festejos" },
        { src: "Fotos cocina/IMG-20260418-WA0031.jpg", caption: "Brownie Saludable de Remolacha" },
        { src: "Fotos cocina/IMG-20260418-WA0034.jpg", caption: "Babas al Ron Clásicas" },
        { src: "Fotos cocina/IMG-20260418-WA0035.jpg", caption: "Bocados Especiales" },
        { src: "Fotos cocina/IMG-20260730-WA0045.jpg", caption: "Recetas Integrales y Nutritivas" },
        { src: "Fotos cocina/IMG-20260824-WA0086.jpg", caption: "Tortas y Encargos Personalizados" }
    ],
    periodismo: [
        { src: "Fotos periodismo y libro/DSC_6708-Mejorado-NR.jpg", caption: "Sesión de Estudio & Retratos" },
        { src: "Fotos periodismo y libro/DSC_6821-Mejorado-NR (1).jpg", caption: "Conducción y Locución en Estudio" },
        { src: "Fotos periodismo y libro/DSC_6625-Mejorado-NR.jpg", caption: "Fotografía Editorial" },
        { src: "Fotos periodismo y libro/SMANDES_FedericoSoto Maia Coletto _DSC0693.jpg", caption: "Entrevista en San Martín de los Andes" },
        { src: "Fotos periodismo y libro/DSC_6715-Mejorado-NR.jpg", caption: "Producción y Escritura" },
        { src: "Fotos periodismo y libro/@girasol.ph-14.jpg", caption: "Naturaleza & Letras" },
        { src: "Fotos periodismo y libro/1000088396.jpg", caption: "El Mundo Oculto: La Estufa, el Fuego, las Hadas" },
        { src: "Fotos periodismo y libro/1000125796.jpg", caption: "El Mundo Oculto: El Rayo, las Aguas, el Todo, la Nada" },
        { src: "Fotos periodismo y libro/@girasol.ph-13.jpg", caption: "Retrato Editorial Maia Coletto" },
        { src: "Fotos periodismo y libro/DSC_6623-Mejorado-NR.jpg", caption: "Expresión & Comunicación" },
        { src: "Fotos periodismo y libro/DSC_6637-Mejorado-NR.jpg", caption: "Producción Periodística" },
        { src: "Fotos periodismo y libro/DSC_6709-Mejorado-NR.jpg", caption: "Sesión Fotográfica" },
        { src: "Fotos periodismo y libro/DSC_6860-Mejorado-NR.jpg", caption: "Espacio de Reflexión y Letras" }
    ],
    garra: [
        { src: "Fotos personal GARRA/DSC_2104-Mejorado-NR.jpg", caption: "Fuerza & Enfoque" },
        { src: "Fotos personal GARRA/DSC_2444-Mejorado-NR.jpg", caption: "Técnica Funcional" },
        { src: "Fotos personal GARRA/DSC_2149-Mejorado-NR.jpg", caption: "Acompañamiento Personalizado" },
        { src: "Fotos personal GARRA/DSC_2270-Mejorado-NR.jpg", caption: "Control & Movilidad" },
        { src: "Fotos personal GARRA/DSC_2426-Mejorado-NR.jpg", caption: "Disciplina & Hábitos" },
        { src: "Fotos personal GARRA/IMG-20260429-WA0064.jpg", caption: "Rutina & Constancia" },
        { src: "Fotos personal GARRA/DSC_2112-Mejorado-NR.jpg", caption: "Trabajo Muscular" },
        { src: "Fotos personal GARRA/DSC_2227-Mejorado-NR.jpg", caption: "Planificación de Entrenamiento" },
        { src: "Fotos personal GARRA/IMG-20260429-WA0062.jpg", caption: "Superación en el Gimnasio" },
        { src: "Fotos personal GARRA/IMG-20260507-WA0047.jpg", caption: "Sesión GARRA" },
        { src: "Fotos personal GARRA/IMG-20260518-WA0069.jpg", caption: "Entrenamiento Específico" },
        { src: "Fotos personal GARRA/IMG-20260603-WA0138.jpg", caption: "Energía y Vitalidad" },
        { src: "Fotos personal GARRA/IMG-20260603-WA0139.jpg", caption: "Comunidad GARRA" }
    ]
};

// Array plano para Lightbox global
let activeLightboxList = [];
let currentLightboxIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initHeroCarousel();
    initInteractiveMap();
    initSportsFilters();
    initLightbox();
    initScrollReveal();
    initBackToTop();
    initParallaxBubbles();
});

/* --------------------------------------------------------------------------
   1. NAVBAR & MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initNavbar() {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const navToggle = document.getElementById("navToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const drawerClose = document.getElementById("drawerClose");
    const drawerBackdrop = document.getElementById("drawerBackdrop");
    const drawerLinks = document.querySelectorAll(".drawer-link");

    // Scroll Blur
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        highlightActiveNavLink();
    });

    // Mobile Drawer Handlers
    function openDrawer() {
        mobileDrawer.classList.add("open");
        drawerBackdrop.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
        mobileDrawer.classList.remove("open");
        drawerBackdrop.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (navToggle) navToggle.addEventListener("click", openDrawer);
    if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener("click", closeDrawer);
    });

    // Active link highlighting on scroll
    function highlightActiveNavLink() {
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }
}

/* --------------------------------------------------------------------------
   2. HERO CAROUSEL AUTOMÁTICO
   -------------------------------------------------------------------------- */
function initHeroCarousel() {
    const slides = document.querySelectorAll(".hero-slide");
    const indicatorsContainer = document.getElementById("heroIndicators");
    if (!slides.length || !indicatorsContainer) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Crear dots indicadores
    indicatorsContainer.innerHTML = "";
    slides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.className = `indicator-dot ${index === 0 ? "active" : ""}`;
        dot.setAttribute("aria-label", `Ir a slide ${index + 1}`);
        dot.addEventListener("click", () => goToSlide(index));
        indicatorsContainer.appendChild(dot);
    });

    const dots = indicatorsContainer.querySelectorAll(".indicator-dot");

    function goToSlide(index) {
        slides[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");
        
        currentIndex = (index + totalSlides) % totalSlides;
        
        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // Auto rotación suave cada 5.5 segundos
    let carouselInterval = setInterval(nextSlide, 5500);

    // Pausar con hover en hero
    const heroSection = document.getElementById("hero");
    heroSection.addEventListener("mouseenter", () => clearInterval(carouselInterval));
    heroSection.addEventListener("mouseleave", () => {
        carouselInterval = setInterval(nextSlide, 5500);
    });
}

/* --------------------------------------------------------------------------
   3. MAPA INTERACTIVO (San Martín, Bariloche, Caburgua, Tailandia)
   -------------------------------------------------------------------------- */
const mapLocationsData = {
    sma: {
        title: "San Martín de los Andes, Neuquén",
        badge: "Hogar & Cuna de Entrenamiento",
        description: "El punto de partida de todos los sueños. Entre lagos glaciares, bosques de lenga y cumbres de la cordillera, Maia forja día a día su disciplina en trail running, triatlón y entrenamiento de fuerza.",
        achievement: '<i class="fa-solid fa-medal"></i> Subcampeona Nacional Kilómetro Vertical 2026'
    },
    bariloche: {
        title: "Bariloche, Río Negro",
        badge: "Victoria Olímpica",
        description: "En el majestuoso lago Nahuel Huapi, Maia conquistó la cima del podio en el histórico Triatlón Escape Isla Huemul en distancia olímpica (nado de aguas abiertas, ciclismo técnico y pedestrismo).",
        achievement: '<i class="fa-solid fa-crown"></i> Campeona Triatlón Escape Isla Huemul'
    },
    caburgua: {
        title: "Caburgua, Región de la Araucanía (Chile)",
        badge: "Triunfo Internacional",
        description: "Cruzando la cordillera, Maia se consagró campeona absoluta en el exigente Triatlón de Caburgua (Chile), demostrando solidez y potencia en una competencia de altísimo nivel.",
        achievement: '<i class="fa-solid fa-trophy"></i> Campeona Triatlón Caburgua (Distancia Olímpica)'
    },
    tailandia: {
        title: "Chiang Mai, Tailandia",
        badge: "Mundial Unificado U20",
        description: "Representando a la Selección Argentina, Maia compitió en el Campeonato Mundial Unificado de Trail Running en Tailandia (2022), midiéndose frente a las promesas y atletas de élite de todo el planeta.",
        achievement: '<i class="fa-solid fa-earth-asia"></i> Representante Selección Argentina U20 (2022)'
    }
};

function initInteractiveMap() {
    const markers = document.querySelectorAll(".map-marker");
    const mapBadge = document.getElementById("mapBadge");
    const mapTitle = document.getElementById("mapTitle");
    const mapDescription = document.getElementById("mapDescription");
    const mapAchievement = document.getElementById("mapAchievement");
    const mapInfoCard = document.getElementById("mapInfoCard");

    if (!markers.length || !mapTitle) return;

    markers.forEach(marker => {
        marker.addEventListener("click", () => {
            const locKey = marker.getAttribute("data-location");
            const data = mapLocationsData[locKey];

            if (!data) return;

            // Actualizar marcadores activos
            markers.forEach(m => m.classList.remove("active"));
            marker.classList.add("active");

            // Animación suave de la tarjeta
            mapInfoCard.style.opacity = "0";
            mapInfoCard.style.transform = "translateY(8px)";

            setTimeout(() => {
                mapBadge.textContent = data.badge;
                mapTitle.textContent = data.title;
                mapDescription.textContent = data.description;
                mapAchievement.innerHTML = data.achievement;

                mapInfoCard.style.opacity = "1";
                mapInfoCard.style.transform = "translateY(0)";
            }, 200);
        });
    });
}

/* --------------------------------------------------------------------------
   4. FILTROS Y CARGA DE FOTOS DE DEPORTE
   -------------------------------------------------------------------------- */
function initSportsFilters() {
    const filterButtons = document.querySelectorAll("#sportsFilters .filter-btn");
    const masonryGrid = document.getElementById("sportsMasonry");

    if (!filterButtons.length || !masonryGrid) return;

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");
            const items = masonryGrid.querySelectorAll(".masonry-item");

            items.forEach(item => {
                const category = item.getAttribute("data-category");
                if (filterValue === "all" || category === filterValue) {
                    item.style.display = "block";
                    setTimeout(() => item.classList.add("reveal-active"), 50);
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
}

function loadAllSportsPhotos() {
    const masonryGrid = document.getElementById("sportsMasonry");
    const btnMore = document.getElementById("btnMoreSports");
    if (!masonryGrid || !btnMore) return;

    // Obtener las fotos ya mostradas
    const existingSrcs = new Set(
        Array.from(masonryGrid.querySelectorAll("img")).map(img => img.getAttribute("src"))
    );

    let addedCount = 0;
    projectImages.deporte.forEach(photo => {
        if (!existingSrcs.has(photo.src)) {
            const item = document.createElement("div");
            item.className = "masonry-item reveal-active";
            item.setAttribute("data-category", photo.category);
            item.innerHTML = `
                <div class="gallery-card" onclick="openLightbox('${photo.src}', '${photo.caption}')">
                    <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
                    <div class="gallery-overlay">
                        <span class="gallery-icon"><i class="fa-solid fa-expand"></i></span>
                        <p class="gallery-caption">${photo.caption}</p>
                    </div>
                </div>
            `;
            masonryGrid.appendChild(item);
            addedCount++;
        }
    });

    btnMore.innerHTML = `<span>¡Colección completa cargada (${projectImages.deporte.length} fotos)!</span> <i class="fa-solid fa-check"></i>`;
    btnMore.disabled = true;
    btnMore.style.opacity = "0.7";
}

/* --------------------------------------------------------------------------
   5. LIGHTBOX MODAL UNIVERSAL
   -------------------------------------------------------------------------- */
function initLightbox() {
    const modal = document.getElementById("lightboxModal");
    const closeBtn = document.getElementById("lightboxClose");
    const prevBtn = document.getElementById("lightboxPrev");
    const nextBtn = document.getElementById("lightboxNext");

    if (!modal) return;

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", prevLightboxImage);
    nextBtn.addEventListener("click", nextLightboxImage);

    // Cerrar al click fuera de la imagen
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeLightbox();
        }
    });

    // Teclado
    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("active")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") prevLightboxImage();
        if (e.key === "ArrowRight") nextLightboxImage();
    });

    // Swipe táctil en móviles
    let touchStartX = 0;
    modal.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modal.addEventListener("touchend", (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) nextLightboxImage();
        if (touchEndX - touchStartX > 50) prevLightboxImage();
    }, { passive: true });
}

function openLightbox(src, caption) {
    const modal = document.getElementById("lightboxModal");
    const img = document.getElementById("lightboxImg");
    const captionBar = document.getElementById("lightboxCaption");

    if (!modal || !img) return;

    // Crear lista de imágenes actual basada en el elemento abierto
    const allGalleryImgs = Array.from(document.querySelectorAll(".gallery-card img")).map(i => ({
        src: i.getAttribute("src"),
        caption: i.alt || "Maia Coletto"
    }));

    activeLightboxList = allGalleryImgs.length ? allGalleryImgs : projectImages.deporte;
    currentLightboxIndex = activeLightboxList.findIndex(item => item.src === src);
    if (currentLightboxIndex === -1) {
        currentLightboxIndex = 0;
        activeLightboxList = [{ src, caption }];
    }

    img.src = src;
    img.alt = caption;
    captionBar.textContent = caption || "";

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const modal = document.getElementById("lightboxModal");
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function updateLightboxView() {
    const img = document.getElementById("lightboxImg");
    const captionBar = document.getElementById("lightboxCaption");
    if (!activeLightboxList.length) return;

    const current = activeLightboxList[currentLightboxIndex];
    img.style.opacity = "0.3";
    img.style.transform = "scale(0.97)";

    setTimeout(() => {
        img.src = current.src;
        img.alt = current.caption;
        captionBar.textContent = current.caption;
        img.style.opacity = "1";
        img.style.transform = "scale(1)";
    }, 150);
}

function prevLightboxImage() {
    if (!activeLightboxList.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + activeLightboxList.length) % activeLightboxList.length;
    updateLightboxView();
}

function nextLightboxImage() {
    if (!activeLightboxList.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % activeLightboxList.length;
    updateLightboxView();
}

/* --------------------------------------------------------------------------
   6. CONTACT FORM SIMULATION
   -------------------------------------------------------------------------- */
function handleFormSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("formSuccessMessage");

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = `<span>Enviando mensaje...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
    submitBtn.disabled = true;

    setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        successMsg.style.display = "flex";

        setTimeout(() => {
            successMsg.style.display = "none";
        }, 6000);
    }, 1200);
}

/* --------------------------------------------------------------------------
   7. SCROLL REVEAL & INTERSECTION OBSERVER
   -------------------------------------------------------------------------- */
function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");

    if (!("IntersectionObserver" in window)) {
        reveals.forEach(el => el.classList.add("reveal-active"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.1
    });

    reveals.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   8. BACK TO TOP
   -------------------------------------------------------------------------- */
function initBackToTop() {
    const backBtn = document.getElementById("backToTop");
    if (!backBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backBtn.classList.add("show");
        } else {
            backBtn.classList.remove("show");
        }
    });

    backBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* --------------------------------------------------------------------------
   9. PARALLAX SUTIL EN GLOBOS
   -------------------------------------------------------------------------- */
function initParallaxBubbles() {
    const globes = document.querySelectorAll(".globe-item");
    if (!globes.length || window.innerWidth < 768) return;

    window.addEventListener("mousemove", (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

        globes.forEach(globe => {
            const speed = parseFloat(globe.getAttribute("data-speed") || 1);
            globe.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
        });
    });
}
