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
heroImg.src = 'https://via.placeholder.com/600x400?text=Mockup+Sistema+Gimnasio';
heroImg.alt = 'Mockup Sistema Gimnasio';
heroImageDiv.appendChild(heroImg);

heroSection.appendChild(heroContent);
heroSection.appendChild(heroImageDiv);
root.appendChild(heroSection);

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

const techLogos = ['JavaScript', 'HTML5', 'CSS3', 'React', 'Node.js', 'MySQL', 'Git'];
const techList = document.createElement('div');
techList.classList.add('tech-list');
techLogos.forEach(tech => {
    const span = document.createElement('span');
    span.textContent = tech;
    span.classList.add('tech-item');
    techList.appendChild(span);
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
