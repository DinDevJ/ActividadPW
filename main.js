const root = document.getElementById('root');
root.innerHTML = '';

const navbar = document.createElement('nav');
const menuList = document.createElement('ul');
const links = [
    { texto: 'Inicio', url: '#' },
    { texto: 'Servicios', url: '#servicios' },
    { texto: 'Nosotros', url: '#nosotros' },
    { texto: 'Portafolio', url: '#portafolio' },
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

const btnPortafolio = document.createElement('button');
btnPortafolio.textContent = 'Ver portafolio';
btnPortafolio.classList.add('btn', 'btn-secondary');

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

const gymCaption = document.createElement('div');
gymCaption.classList.add('gym-caption');

const gymTitle = document.createElement('h3');
gymTitle.textContent = 'Te presentamos GymSystem';

const gymDesc = document.createElement('p');
gymDesc.textContent = 'Nuestro software integral de gestión de gimnasios. Simplifica y automatiza el control de membresías, elevando la seguridad y modernizando las instalaciones con acceso biométrico avanzado.';

const btnCotizarGym = document.createElement('a'); 
btnCotizarGym.textContent = 'Cotizar GymSystem';
btnCotizarGym.href = '#contacto'; 
btnCotizarGym.classList.add('btn', 'btn-primary', 'btn-gym'); 

gymCaption.appendChild(gymTitle);
gymCaption.appendChild(gymDesc);
gymCaption.appendChild(btnCotizarGym);
heroImageDiv.appendChild(gymCaption);
// ---------------------------------------------

heroSection.appendChild(heroContent);
heroSection.appendChild(heroImageDiv);
root.appendChild(heroSection);

// =========================================
// CATÁLOGO: PRODUCTOS Y SERVICIOS
// =========================================

const catalogSection = document.createElement('section');
catalogSection.id = 'servicios';
catalogSection.classList.add('catalog-section');

// Función reutilizable para crear carruseles
function crearCarrusel(titulo, datos) {
    // Título de la sección
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = titulo;
    catalogSection.appendChild(sectionTitle);

    // Envoltura del carrusel
    const wrapper = document.createElement('div');
    wrapper.classList.add('carousel-wrapper');

    // Botón Izquierdo
    const btnLeft = document.createElement('button');
    btnLeft.classList.add('carousel-btn', 'left');
    btnLeft.innerHTML = '&#10094;'; // Entidad HTML para la flecha <

    // Pista del carrusel (donde van las tarjetas)
    const track = document.createElement('div');
    track.classList.add('carousel-track');

    // Botón Derecho
    const btnRight = document.createElement('button');
    btnRight.classList.add('carousel-btn', 'right');
    btnRight.innerHTML = '&#10095;'; // Entidad HTML para la flecha >

    // Lógica de los botones para hacer scroll
    btnLeft.addEventListener('click', () => {
        track.scrollBy({ left: -320, behavior: 'smooth' });
    });
    btnRight.addEventListener('click', () => {
        track.scrollBy({ left: 320, behavior: 'smooth' });
    });

    // Bucle para inyectar las tarjetas
    datos.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('service-card');

        // CONDICIONAL RÚBRICA: Diferenciar > $1000
        if (item.price >= 15000) {
            card.classList.add('premium');
        }

        const icon = document.createElement('img');
        icon.src = item.icon;
        icon.classList.add('service-icon');
        card.appendChild(icon);

        const priceContainer = document.createElement('div');
        priceContainer.classList.add('service-price');
        const formattedPrice = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(item.price);
        
        // Diferenciar visualmente si es pago mensual (SaaS) o pago único (Servicio)
        if (item.isMonthly) {
            priceContainer.innerHTML = `${formattedPrice} <span class="price-type">/ mes</span>`;
        } else {
            priceContainer.innerHTML = `+ ${formattedPrice} <span class="price-type">MXN</span>`;
        }
        card.appendChild(priceContainer);

        if (item.price > 1000) {
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

        track.appendChild(card);
    });

    wrapper.appendChild(btnLeft);
    wrapper.appendChild(track);
    wrapper.appendChild(btnRight);
    catalogSection.appendChild(wrapper);
}

// DATOS 1: Productos SaaS (Licencias / Mensualidades)
const productosSaaS = [
    {
        name: 'GymSystem: Licencia de Gestión',
        description: 'Control de membresías, pagos y acceso biométrico para gimnasios.',
        price: 1500,
        isMonthly: true,
        icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/dumbbell.svg'
    },
    {
        name: 'Monarca: Logística y Monitoreo',
        description: 'Generación de rutas y monitoreo de empleados para agencias de viaje.',
        price: 2500,
        isMonthly: true,
        icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/map.svg'
    },
    {
        name: 'FerreApp: Punto de Venta',
        description: 'Control de ventas para vendedores via AppMovil donde puedes rastrear los pedidos y generar notas.',
        price: 1200,
        isMonthly: true,
        icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/hammer.svg'
    }
];

// DATOS 2: Servicios a Medida (Pagos por proyecto)
const serviciosMedida = [
    {
        name: 'Desarrollo de Apps Móviles Nativas',
        description: 'Creación de aplicaciones para iOS y Android.',
        price: 20000,
        isMonthly: false,
        icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/smartphone.svg'
    },
    {
        name: 'Sistemas Web con Base de Datos',
        description: 'Plataformas web completas usando React y PostgreSQL.',
        price: 15000,
        isMonthly: false,
        icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/database.svg'
    },
    {
        name: 'Desarrollo Web Frontend',
        description: 'Landing pages estáticas y optimizadas.',
        price: 2500, 
        isMonthly: false,
        icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/layout-template.svg'
    },
    {
        name: 'Aplicaciones de Escritorio',
        description: 'Software robusto para Windows y macOS.',
        price: 2500,
        isMonthly: false,
        icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/monitor.svg'
    },
    {
        name: 'Sistemas IoT y Seguridad',
        description: 'Hardware y software para monitoreo o control de accesos.',
        price: 12000,
        isMonthly: false,
        icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/cpu.svg'
    },
    {
        name: 'Diseño de Interfaces (UI/UX)',
        description: 'Prototipado e investigación de experiencia de usuario.',
        price: 950, 
        isMonthly: false,
        icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/pen-tool.svg'
    },
    {
        name: 'Creación de APIs RESTful',
        description: 'Microservicios seguros con FastAPI o Node.js.',
        price: 1300,
        isMonthly: false,
        icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/plug-2.svg'
    }
];

// Ejecutamos la función para crear ambos carruseles (3 + 7 = 10 elementos en total)
crearCarrusel('Nuestros Productos (SaaS)', productosSaaS);
crearCarrusel('Desarrollo a Medida', serviciosMedida);

root.appendChild(catalogSection); // Inyectar al DOM

const sectionNosotros = document.createElement('section');
sectionNosotros.id = 'nosotros';
sectionNosotros.classList.add('about-section');

const aboutContent = document.createElement('div');
aboutContent.classList.add('about-content');

const aboutTitle = document.createElement('h2');
aboutTitle.textContent = 'El factor humano detrás del código';

const aboutDesc = document.createElement('p');
aboutDesc.textContent = 'Nos enfocamos en entender tu negocio para crear soluciones tecnológicas reales, ágiles y funcionales.';

const techStack = document.createElement('div');
techStack.classList.add('tech-stack');
const stackTitle = document.createElement('h4');
stackTitle.textContent = 'Tecnologías que dominamos:';
techStack.appendChild(stackTitle);

const techData = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
];

const techList = document.createElement('div');
techList.classList.add('tech-list');
// Estilos rápidos en línea para ordenar la lista principal
techList.style.display = 'flex';
techList.style.flexWrap = 'wrap';
techList.style.gap = '25px';
techList.style.marginTop = '15px';

techData.forEach(tech => {
    // Contenedor individual para cada tecnología
    const container = document.createElement('div');
    container.classList.add('tech-item-container');
    // Flexbox en columna para poner el texto arriba y la imagen abajito
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.gap = '8px';

    const span = document.createElement('span');
    span.textContent = tech.name;
    span.classList.add('tech-item');
    span.style.fontWeight = '500';

    const img = document.createElement('img');
    img.src = tech.icon;
    img.alt = `Logo de ${tech.name}`;
    // Ajusta estos valores si quieres los logos más grandes o pequeños
    img.style.width = '45px'; 
    img.style.height = '45px';

    container.appendChild(span);
    container.appendChild(img); 
    techList.appendChild(container);
});

techStack.appendChild(techList);

aboutContent.appendChild(aboutTitle);
aboutContent.appendChild(aboutDesc);
aboutContent.appendChild(techStack);

const aboutImage = document.createElement('div');
aboutImage.classList.add('about-image');
const imgNosotros = document.createElement('img');
imgNosotros.src = 'https://via.placeholder.com/500x500?text=Foto+Trabajando+Juntos';
imgNosotros.alt = 'Nosotros trabajando juntos';
aboutImage.appendChild(imgNosotros);

sectionNosotros.appendChild(aboutContent);
sectionNosotros.appendChild(aboutImage);
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
