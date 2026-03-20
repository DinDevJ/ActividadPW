const root = document.getElementById('root');
root.innerHTML = '';

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
heroImg.src = 'https://via.placeholder.com/600x400?text=Mockup+Sistema+Gimnasio';
heroImg.alt = 'Mockup Sistema Gimnasio';
heroImageDiv.appendChild(heroImg);

heroSection.appendChild(heroContent);
heroSection.appendChild(heroImageDiv);
root.appendChild(heroSection);

// --- SECCION DE SERVICIOS ---
let servicios = JSON.parse(localStorage.getItem('servicios'));
if (!servicios || servicios.length === 0) {
    servicios = [
        { nombre: 'Página Web (HTML/CSS)', descripcion: 'Desarrollo de página web estática para portafolios o pequeños negocios.', precio: 1500, fotografia: 'https://via.placeholder.com/400x250/2563EB/FFFFFF?text=Html+Css' },
        { nombre: 'Formateo de PC', descripcion: 'Instalación de Windows, drivers esenciales y paquetería de oficina.', precio: 300, fotografia: 'https://via.placeholder.com/400x250/00C4A7/FFFFFF?text=Formateo' },
        { nombre: 'Mantenimiento de Laptop', descripcion: 'Limpieza interna, cambio de pasta térmica y revisión de ventiladores.', precio: 400, fotografia: 'https://via.placeholder.com/400x250/2563EB/FFFFFF?text=Laptop' },
        { nombre: 'Instalación de Red Doméstica', descripcion: 'Mapeo, cableado y configuración de repetidores WiFi para extender señal.', precio: 600, fotografia: 'https://via.placeholder.com/400x250/F8BD24/111827?text=Redes' },
        { nombre: 'Desarrollo de API Escolar', descripcion: 'Ayuda/asesoría en creación de APIs REST con Node.js para tareas.', precio: 1200, fotografia: 'https://via.placeholder.com/400x250/00C4A7/FFFFFF?text=API' },
        { nombre: 'Recuperación de Archivos', descripcion: 'Extracción de documentos borrados o corrompidos de memorias USB.', precio: 500, fotografia: 'https://via.placeholder.com/400x250/2563EB/FFFFFF?text=Recuperacion' },
        { nombre: 'Punto de Venta Básico', descripcion: 'Sistema de escritorio simple en Java para tiendas locales.', precio: 2500, fotografia: 'https://via.placeholder.com/400x250/F07167/FFFFFF?text=Punto+Venta' },
        { nombre: 'Armado de PC Desktop', descripcion: 'Asesoría en compra de piezas y ensamblado completo paso a paso.', precio: 450, fotografia: 'https://via.placeholder.com/400x250/2563EB/FFFFFF?text=Armado+PC' },
        { nombre: 'Limpieza de Malware', descripcion: 'Desinfección de virus del sistema operativo sin formatear.', precio: 250, fotografia: 'https://via.placeholder.com/400x250/00C4A7/FFFFFF?text=Antivirus' },
        { nombre: 'Soporte Remoto', descripcion: 'Atención a distancia para solucionar problemas de Windows y aplicaciones.', precio: 150, fotografia: 'https://via.placeholder.com/400x250/111827/FFFFFF?text=Remoto' }
    ];
    localStorage.setItem('servicios', JSON.stringify(servicios));
}

const sectionServicios = document.createElement('section');
sectionServicios.id = 'servicios';
sectionServicios.classList.add('catalog-section'); // Según el nuevo CSS

const serviciosTitle = document.createElement('h2');
serviciosTitle.textContent = 'Catálogo de Servicios';

const carouselWrapper = document.createElement('div');
carouselWrapper.classList.add('carousel-wrapper');

const btnLeft = document.createElement('button');
btnLeft.classList.add('carousel-btn', 'left');
btnLeft.innerHTML = '&#10094;';

const carouselTrack = document.createElement('div');
carouselTrack.classList.add('carousel-track');

servicios.forEach((servicio) => {
    const card = document.createElement('div');
    card.classList.add('service-card');

    if (servicio.precio > 1000) {
        card.classList.add('premium');
    }

    const img = document.createElement('img');
    img.src = servicio.fotografia;
    img.alt = servicio.nombre;

    const catInfo = document.createElement('span');
    catInfo.classList.add('service-category');
    catInfo.textContent = 'Hardware / Web';

    const h3 = document.createElement('h3');
    h3.textContent = servicio.nombre;

    const p = document.createElement('p');
    p.textContent = servicio.descripcion;

    const priceBox = document.createElement('div');
    priceBox.classList.add('price-box', 'service-price');
    priceBox.textContent = `$${servicio.precio} MXN`;

    card.appendChild(img);
    card.appendChild(catInfo);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(priceBox);

    carouselTrack.appendChild(card);
});

const btnRight = document.createElement('button');
btnRight.classList.add('carousel-btn', 'right');
btnRight.innerHTML = '&#10095;';

carouselWrapper.appendChild(btnLeft);
carouselWrapper.appendChild(carouselTrack);
carouselWrapper.appendChild(btnRight);

sectionServicios.appendChild(serviciosTitle);
sectionServicios.appendChild(carouselWrapper);

// Lógica de desplazamiento simple para el carrusel
btnLeft.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: -320, behavior: 'smooth' });
});
btnRight.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: 320, behavior: 'smooth' });
});

root.appendChild(sectionServicios);

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
root.appendChild(sectionNosotros);

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

const sectionContacto = document.createElement('section');
sectionContacto.id = 'contacto';
sectionContacto.classList.add('contact-section');

const contactTitle = document.createElement('h2');
contactTitle.textContent = '¿Tienes un proyecto en mente?';
sectionContacto.appendChild(contactTitle);

const contactForm = document.createElement('form');
contactForm.classList.add('contact-form');
contactForm.innerHTML = `
    <div class="form-group">
        <input type="text" placeholder="Tu Nombre o el de tu Empresa" required />
    </div>
    <div class="form-group">
        <input type="email" placeholder="Tu Correo Electrónico" required />
    </div>
    <div class="form-group">
        <textarea placeholder="Cuéntanos un poco de qué trata tu proyecto..." rows="4" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
`;
contactForm.addEventListener('submit', (e) => e.preventDefault());

sectionContacto.appendChild(contactForm);
root.appendChild(sectionContacto);

const footer = document.createElement('footer');
footer.classList.add('footer');

const footerContainer = document.createElement('div');
footerContainer.classList.add('footer-container');

const footerText = document.createElement('p');
footerText.innerHTML = '© 2026 <strong class="brand-text">Etéreo Software</strong> - Desarrollado por Ingenieros en Sistemas Computacionales.';
footerContainer.appendChild(footerText);

footer.appendChild(footerContainer);
root.appendChild(footer);

