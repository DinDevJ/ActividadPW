const root = document.getElementById('root');

const navbar = document.createElement('nav');

const menuList = document.createElement('ul')


const links = [
    { texto: 'Nosotros', url: '#' },
    { texto: 'Proyectos', url: '#proyectos' },
    { texto: 'Stack', url: '#stack' },
    { texto: 'Precios', url: '#precios' }
];

const logo = document.createElement('img');
logo.src = 'images/puro.png';
logo.classList.add("logo");

links.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.texto;
    a.href = item.url;
    li.appendChild(a);
    menuList.appendChild(li);
    menuList.classList.add("menuList");
});

navbar.appendChild(logo);
navbar.appendChild(menuList);
navbar.classList.add("navbar");
root.appendChild(navbar);