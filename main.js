const root = document.getElementById('root');
root.innerHTML = '';

// =========================================
// NAVBAR
// =========================================
const navbar = document.createElement('nav');
const menuList = document.createElement('ul');
const links = [
    { texto: 'Inicio', url: '#' },
    { texto: 'Servicios', url: '#servicios' },
    { texto: 'Nosotros', url: '#nosotros' },
    { texto: 'Agregar Servicio', url: 'alta.html' },
    { texto: 'Contacto', url: '#contacto' }
];

const logo = document.createElement('img');
logo.src = 'images/puro.png';
logo.classList.add("logo");

const divSwitch = document.createElement('div');
divSwitch.classList.add("toggle-switch");

const switchLabel = document.createElement('label');
switchLabel.classList.add('switch-label');

const switchInput = document.createElement('input');
switchInput.type = 'checkbox';
switchInput.classList.add('checkbox');
switchInput.checked = true;

const switchSlider = document.createElement('span');
switchSlider.classList.add('slider');

divSwitch.appendChild(switchLabel);
switchLabel.appendChild(switchInput);
switchLabel.appendChild(switchSlider);

links.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.texto;
    a.href = item.url;
    li.appendChild(a);
    menuList.appendChild(li);
});
menuList.classList.add("menuList");

navbar.appendChild(logo);
navbar.appendChild(menuList);
navbar.appendChild(divSwitch);
navbar.classList.add("navbar");
root.appendChild(navbar);

// =========================================
// HERO SECTION
// =========================================
const heroSection = document.createElement('section');
heroSection.id = 'hero';
heroSection.classList.add('hero-section');

const heroContent = document.createElement('div');
heroContent.classList.add('hero-content');

const heroTitle = document.createElement('h1');
heroTitle.innerHTML = 'Desarrollo de software <span class="highlight-text">a tu medida</span>';

const heroSubtitle = document.createElement('p');
heroSubtitle.textContent = 'Somos un dúo de estudiantes de ingeniería enfocados en crear soluciones tecnológicas reales para negocios. Escalables, rápidas y modernas.';

const heroButtons = document.createElement('div');
heroButtons.classList.add('hero-buttons');

const btnCotizar = document.createElement('button');
btnCotizar.textContent = 'Cotizar proyecto';
btnCotizar.classList.add('btn', 'btn-primary');
btnCotizar.addEventListener('click', () => {
    window.location.hash = '#contacto';
});

const btnPortafolio = document.createElement('button');
btnPortafolio.textContent = 'Ver servicios';
btnPortafolio.classList.add('btn', 'btn-secondary');
btnPortafolio.addEventListener('click', () => {
    window.location.hash = '#servicios';
});

heroButtons.appendChild(btnCotizar);
heroButtons.appendChild(btnPortafolio);

heroContent.appendChild(heroTitle);
heroContent.appendChild(heroSubtitle);
heroContent.appendChild(heroButtons);

const heroImageDiv = document.createElement('div');
heroImageDiv.classList.add('hero-image');
const heroImg = document.createElement('img');
heroImg.src = 'images/mockup-gymsystem.png';
heroImg.alt = 'Mockup Sistema Gimnasio';
heroImageDiv.appendChild(heroImg);

// --- Presentación GymSystem ---
const gymCaption = document.createElement('div');
gymCaption.classList.add('gym-caption');

const gymTitle = document.createElement('h3');
gymTitle.textContent = 'Te presentamos GymSystem';

const gymDesc = document.createElement('p');
gymDesc.textContent = 'Nuestro software integral de gestión de gimnasios. Simplifica y automatiza el control de membresías, elevando la seguridad y modernizando las instalaciones con acceso biométrico avanzado.';

const btnCotizarGym = document.createElement('a');
btnCotizarGym.textContent = 'Mas sobre GymSystem';
btnCotizarGym.href = '#contacto';
btnCotizarGym.classList.add('btn', 'btn-primary');
btnCotizarGym.style.marginTop = '20px';
btnCotizarGym.style.display = 'inline-block';

gymCaption.appendChild(gymTitle);
gymCaption.appendChild(gymDesc);
gymCaption.appendChild(btnCotizarGym);

heroImageDiv.appendChild(gymCaption);

heroSection.appendChild(heroContent);
heroSection.appendChild(heroImageDiv);
root.appendChild(heroSection);

// =========================================
// DATOS DE CATÁLOGO
// =========================================
const productosSaaS = [
    { name: 'GymSystem: Licencia de Gestión', description: 'Control de membresías, pagos y acceso biométrico para gimnasios.', price: 1500, isMonthly: true, icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/dumbbell.svg' },
    { name: 'Monarca: Logística y Monitoreo', description: 'Generación de rutas y monitoreo de empleados para agencias.', price: 2500, isMonthly: true, icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/map.svg' },
    { name: 'FerreApp: Punto de Venta', description: 'Control de inventario, ventas y facturación para ferreterías.', price: 1200, isMonthly: true, icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/hammer.svg' }
];

let serviciosMedida = [
    { name: 'Desarrollo de Apps Móviles Nativas', description: 'Creación de aplicaciones para iOS y Android.', price: 20000, isMonthly: false, icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/smartphone.svg' },
    { name: 'Sistemas Web con Base de Datos', description: 'Plataformas web completas escalables.', price: 15000, isMonthly: false, icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/database.svg' },
    { name: 'Desarrollo Web Frontend', description: 'Landing pages estáticas y optimizadas.', price: 2500, isMonthly: false, icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/layout-template.svg' },
    { name: 'Aplicaciones de Escritorio', description: 'Software robusto para Windows y macOS.', price: 5000, isMonthly: false, icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/monitor.svg' },
    { name: 'Sistemas IoT y Seguridad', description: 'Hardware y software para monitoreo o control de accesos.', price: 10000, isMonthly: false, icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/cpu.svg' },
    { name: 'Diseño de Interfaces (UI/UX)', description: 'Prototipado e investigación de experiencia de usuario.', price: 950, isMonthly: false, icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/pen-tool.svg' },
    { name: 'Creación de APIs RESTful', description: 'Microservicios seguros de alto rendimiento.', price: 1300, isMonthly: false, icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/plug-2.svg' }
];

// Lógica de LocalStorage fusionada (Para los que agregues en alta.html)
const serviciosGuardados = JSON.parse(localStorage.getItem('serviciosNuevos')) || [];
serviciosMedida = [...serviciosMedida, ...serviciosGuardados];

// =========================================
// CATÁLOGO: PRODUCTOS Y SERVICIOS
// =========================================
const catalogSection = document.createElement('section');
catalogSection.id = 'servicios';
catalogSection.classList.add('catalog-section');

function crearCarrusel(titulo, datos) {
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = titulo;
    catalogSection.appendChild(sectionTitle);

    const wrapper = document.createElement('div');
    wrapper.classList.add('carousel-wrapper');

    const btnLeft = document.createElement('button');
    btnLeft.classList.add('carousel-btn', 'left');
    btnLeft.innerHTML = '&#10094;';

    const track = document.createElement('div');
    track.classList.add('carousel-track');

    const btnRight = document.createElement('button');
    btnRight.classList.add('carousel-btn', 'right');
    btnRight.innerHTML = '&#10095;';

    btnLeft.addEventListener('click', () => track.scrollBy({ left: -320, behavior: 'smooth' }));
    btnRight.addEventListener('click', () => track.scrollBy({ left: 320, behavior: 'smooth' }));

    datos.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('service-card');

        // CONDICIONAL RÚBRICA
        if (item.price > 1000) card.classList.add('premium');

        const icon = document.createElement('img');
        icon.src = item.icon;
        icon.classList.add('service-icon');
        icon.style.width = '50px';
        icon.style.height = '50px';
        icon.style.margin = '0 0 20px 0';
        icon.style.objectFit = 'contain';
        card.appendChild(icon);

        const priceContainer = document.createElement('div');
        priceContainer.classList.add('service-price');
        const formattedPrice = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(item.price);

        if (item.isMonthly) {
            priceContainer.innerHTML = `${formattedPrice} <span class="price-type">/ mes</span>`;
        } else {
            priceContainer.innerHTML = `+ ${formattedPrice} <span class="price-type">MXN</span>`;
        }
        card.appendChild(priceContainer);

        if (item.price >= 1000) {
            const badge = document.createElement('span');
            badge.classList.add('premium-badge');
            badge.textContent = 'Destacado';
            card.appendChild(badge);
        }

        const title = document.createElement('h3');
        title.textContent = item.name;
        card.appendChild(title);

        const desc = document.createElement('p');
        desc.textContent = item.description;
        card.appendChild(desc);

        // --- BOTONES DE LLAMADO A LA ACCIÓN ---
        const btnAction = document.createElement('a');
        btnAction.style.marginTop = '20px';
        btnAction.style.width = '100%';
        btnAction.style.textAlign = 'center';
        btnAction.style.padding = '10px 0';
        btnAction.style.borderRadius = '6px';
        btnAction.style.fontWeight = '600';
        btnAction.style.fontSize = '0.95rem';
        btnAction.style.display = 'block';
        btnAction.style.textDecoration = 'none';
        btnAction.style.transition = 'background-color 0.2s';

        if (item.isMonthly) {
            // Diseño SaaS (Mensualidad)
            btnAction.textContent = 'Adquirir Licencia';
            btnAction.style.backgroundColor = 'var(--color-primary)';
            btnAction.style.color = '#ffffff';
            btnAction.href = '#'; // Redirige a donde quieras después
        } else {
            // Diseño Desarrollo a Medida (Formulario)
            btnAction.textContent = 'Cotizar Proyecto';
            btnAction.style.backgroundColor = '#F3F4F6';
            btnAction.style.color = 'var(--text-main)';
            btnAction.href = '#contacto';

            // Autoseleccionar en el formulario
            btnAction.addEventListener('click', () => {
                const selectServicio = document.getElementById('select-servicio');
                if (selectServicio) {
                    selectServicio.value = item.name;
                }
            });
        }

        btnAction.addEventListener('mouseenter', () => btnAction.style.opacity = '0.8');
        btnAction.addEventListener('mouseleave', () => btnAction.style.opacity = '1');

        card.appendChild(btnAction);
        track.appendChild(card);
    });

    wrapper.appendChild(btnLeft);
    wrapper.appendChild(track);
    wrapper.appendChild(btnRight);
    catalogSection.appendChild(wrapper);
}

crearCarrusel('Nuestros Productos (SaaS)', productosSaaS);
crearCarrusel('Desarrollo a Medida', serviciosMedida);
root.appendChild(catalogSection);

// =========================================
// NOSOTROS Y TECNOLOGÍAS
// =========================================
const sectionNosotros = document.createElement('section');
sectionNosotros.id = 'nosotros';
sectionNosotros.classList.add('about-section');

const aboutContent = document.createElement('div');
aboutContent.classList.add('about-content');

const aboutTitle = document.createElement('h2');
aboutTitle.textContent = 'El factor humano detrás del código';

const aboutDesc = document.createElement('p');
aboutDesc.textContent = 'Nos enfocamos en entender tu negocio para crear soluciones tecnológicas reales, ágiles y funcionales.';

const teamContainer = document.createElement('div');
teamContainer.classList.add('team-container');

// Row Katia
const rowKatia = document.createElement('div');
rowKatia.classList.add('team-row');
const imgKatiaDiv = document.createElement('div');
imgKatiaDiv.classList.add('team-image');
const imgKatia = document.createElement('img');
imgKatia.src = 'https://via.placeholder.com/800x600/2563EB/FFFFFF?text=Katia+Aguilar';
imgKatia.alt = 'Katia Aguilar Calderón';
imgKatiaDiv.appendChild(imgKatia);
const infoKatia = document.createElement('div');
infoKatia.classList.add('team-info');
const nameKatia = document.createElement('h3');
nameKatia.textContent = 'Katia Aguilar Calderón';
const descKatia = document.createElement('p');
descKatia.textContent = 'Desarrolladora de software enfocada en la Ingeniería de Software, Frontend y Bases de Datos. Como responsable de la estructuración del trabajo, Katia asegura que cada proyecto se ejecute con precisión metodológica. A través de un trato directo e integral con el cliente, traduce requerimientos complejos en interfaces web creativas y arquitecturas de datos sólidas, garantizando plataformas intuitivas y altamente organizadas.';
infoKatia.appendChild(nameKatia);
infoKatia.appendChild(descKatia);
rowKatia.appendChild(imgKatiaDiv);
rowKatia.appendChild(infoKatia);

// Row Julio
const rowJulio = document.createElement('div');
rowJulio.classList.add('team-row');
const imgJulioDiv = document.createElement('div');
imgJulioDiv.classList.add('team-image');
const imgJulio = document.createElement('img');
imgJulio.src = 'https://via.placeholder.com/800x600/00C4A7/FFFFFF?text=Julio+Araujo';
imgJulio.alt = 'Julio César Araujo Hernández';
imgJulioDiv.appendChild(imgJulio);
const infoJulio = document.createElement('div');
infoJulio.classList.add('team-info');
const nameJulio = document.createElement('h3');
nameJulio.textContent = 'Julio César Araujo Hernández';
const descJulio = document.createElement('p');
descJulio.textContent = 'Desarrollador Full-Stack y arquitecto principal del Backend y la integración Hardware-Software. Con un enfoque analítico y una fuerte vocación para el diseño de nuevas soluciones técnicas, Julio construye el núcleo lógico y operativo de cada sistema. Su especialidad es el manejo de infraestructura de servidores y la comunicación con dispositivos físicos, creando herramientas escalables, seguras y de alto rendimiento para operaciones complejas.';
infoJulio.appendChild(nameJulio);
infoJulio.appendChild(descJulio);
rowJulio.appendChild(imgJulioDiv);
rowJulio.appendChild(infoJulio);

teamContainer.appendChild(rowKatia);
teamContainer.appendChild(rowJulio);
aboutContent.appendChild(aboutTitle);
aboutContent.appendChild(aboutDesc);
sectionNosotros.appendChild(aboutContent);
sectionNosotros.appendChild(teamContainer);

// Tecnologías que dominamos
const techStack = document.createElement('div');
techStack.classList.add('tech-stack');
techStack.style.marginTop = '4rem';

const stackTitle = document.createElement('h4');
stackTitle.textContent = 'Tecnologías que dominamos:';
stackTitle.style.textAlign = 'center';
stackTitle.style.fontSize = '1.5rem';
stackTitle.style.marginBottom = '2rem';
techStack.appendChild(stackTitle);

const techData = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' }
];

const techList = document.createElement('div');
techList.classList.add('tech-list');
techList.style.display = 'flex';
techList.style.flexWrap = 'wrap';
techList.style.justifyContent = 'center';
techList.style.gap = '35px';

techData.forEach(tech => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.gap = '10px';

    const span = document.createElement('span');
    span.textContent = tech.name;
    span.style.fontWeight = '600';
    span.style.fontSize = '0.9rem';
    span.style.color = 'var(--text-muted)';

    const img = document.createElement('img');
    img.src = tech.icon;
    img.alt = `Logo de ${tech.name}`;
    img.style.width = '50px';
    img.style.height = '50px';

    container.appendChild(img);
    container.appendChild(span);
    techList.appendChild(container);
});

techStack.appendChild(techList);
aboutContent.appendChild(techStack);
root.appendChild(sectionNosotros);

// =========================================
// ÚNETE SECTION
// =========================================
const sectionUnete = document.createElement('section');
sectionUnete.id = 'unete';
sectionUnete.classList.add('unete-section');

const uneteBg = document.createElement('div');
uneteBg.classList.add('unete-bg');

const shapeTypes = ['shape-circle', 'shape-square', 'shape-rounded-tr', 'shape-rounded-bl', 'shape-rounded-br', 'shape-rounded-tl'];
for (let i = 0; i < 40; i++) {
    const shape = document.createElement('div');
    shape.classList.add('bg-shape');

    const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    shape.classList.add(type);

    const randObj = Math.random();
    if (randObj > 0.8) {
        shape.classList.add('shape-primary');
    } else if (randObj > 0.6) {
        shape.classList.add('shape-accent');
    } else {
        shape.classList.add('shape-light');
    }
    uneteBg.appendChild(shape);
}
sectionUnete.appendChild(uneteBg);

const uneteContent = document.createElement('div');
uneteContent.classList.add('unete-content');

const uneteTitle = document.createElement('h2');
uneteTitle.innerHTML = 'Únete a los clientes que hacen crecer su negocio con <br/><span class="brand-text">Etéreo Software</span>.';

uneteContent.appendChild(uneteTitle);
sectionUnete.appendChild(uneteContent);
root.appendChild(sectionUnete);

// =========================================
// CONTACTO SECTION (CON MENÚ DESPLEGABLE)
// =========================================
const sectionContacto = document.createElement('section');
sectionContacto.id = 'contacto';
sectionContacto.classList.add('contact-section');

const contactTitle = document.createElement('h2');
contactTitle.textContent = '¿Tienes un proyecto en mente?';
sectionContacto.appendChild(contactTitle);

const contactForm = document.createElement('form');
contactForm.classList.add('contact-form');

// Generar las opciones del select dinámicamente
let opcionesSelect = `<option value="">Selecciona un servicio a cotizar...</option>`;
opcionesSelect += `<option value="Dudas Generales">Dudas generales / Otro proyecto</option>`;

serviciosMedida.forEach(servicio => {
    opcionesSelect += `<option value="${servicio.name}">${servicio.name}</option>`;
});

contactForm.innerHTML = `
    <div class="form-group">
        <select id="select-servicio" required style="width: 100%; padding: 1.2rem; border: 1px solid #D1D5DB; border-radius: 8px; font-size: 1.05rem; font-family: 'Inter', sans-serif; color: var(--text-main); background-color: #F9FAFB; appearance: none; cursor: pointer;">
            ${opcionesSelect}
        </select>
    </div>
    <div class="form-group">
        <input type="text" placeholder="Tu Nombre o el de tu Empresa" required />
    </div>
    <div class="form-group">
        <input type="email" placeholder="Tu Correo Electrónico" required />
    </div>
    <div class="form-group">
        <textarea placeholder="Cuéntanos un poco de los requerimientos de tu proyecto..." rows="4" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary" style="width: 100%;">Enviar Solicitud</button>
`;

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
    contactForm.reset();
});

sectionContacto.appendChild(contactForm);
root.appendChild(sectionContacto);

// =========================================
// FOOTER
// =========================================
const footer = document.createElement('footer');
footer.classList.add('footer');

const footerContainer = document.createElement('div');
footerContainer.classList.add('footer-container');

const footerText = document.createElement('p');
footerText.innerHTML = '© 2026 <strong class="brand-text">Etéreo Software</strong> - Desarrollado por Ingenieros en Sistemas Computacionales.';
footerContainer.appendChild(footerText);

footer.appendChild(footerContainer);
root.appendChild(footer);