document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    // Navbar
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const logoLink = document.createElement('a');
    logoLink.href = '/';

    const logo = document.createElement('img');
    logo.src = '/static/images/puro.png';
    logo.classList.add('logo');
    logoLink.appendChild(logo);

    const backLink = document.createElement('a');
    backLink.href = '/';
    backLink.textContent = '← Regresar al Inicio';
    backLink.classList.add('back-link');

    navbar.appendChild(logoLink);
    navbar.appendChild(backLink);
    root.appendChild(navbar);

    // Formulario
    const container = document.createElement('div');
    container.classList.add('alta-container');

    const title = document.createElement('h2');
    title.textContent = 'Agregar Nuevo Servicio';
    title.classList.add('alta-title');
    container.appendChild(title);

    const form = document.createElement('form');
    form.classList.add('alta-form');

    // Funcion para crear campos del formulario
    const createInputGroup = (labelText, inputType, id, placeholder = '') => {
        const group = document.createElement('div');
        group.classList.add('form-group');

        const label = document.createElement('label');
        label.setAttribute('for', id);
        label.textContent = labelText;

        let input;
        if (inputType === 'textarea') {
            input = document.createElement('textarea');
            input.rows = 4;
        } else if (inputType === 'select-bool') {
            input = document.createElement('select');

            const opt1 = document.createElement('option');
            opt1.value = 'true';
            opt1.textContent = 'SaaS / Mensualidad';

            const opt2 = document.createElement('option');
            opt2.value = 'false';
            opt2.textContent = 'Pago Único / Desarrollo a Medida';

            input.appendChild(opt1);
            input.appendChild(opt2);
        } else {
            input = document.createElement('input');
            input.type = inputType;
            if (inputType === 'number') {
                input.min = '0';
                input.step = 'any';
            }
        }

        input.id = id;
        input.classList.add('alta-input');
        if (placeholder) {
            input.placeholder = placeholder;
        }

        group.appendChild(label);
        group.appendChild(input);
        return { group, input };
    };

    const { group: nameGroup, input: nameInput } = createInputGroup('Nombre del Servicio', 'text', 'srv-name', 'Ej. Implementación de IA empresariales');
    const { group: descGroup, input: descInput } = createInputGroup('Descripción', 'textarea', 'srv-desc', 'Breve explicación del servicio que se ofrecerá...');
    const { group: priceGroup, input: priceInput } = createInputGroup('Precio (MXN)', 'number', 'srv-price', 'Ej. 5000');
    const { group: typeGroup, input: typeInput } = createInputGroup('Categoría y Tipo de Cobro', 'select-bool', 'srv-type');

    // Icono
    const { group: iconGroup, input: iconInput } = createInputGroup('URL de la Imagen / Ícono (Opcional)', 'url', 'srv-icon', 'Ej. https://ejemplo.com/icono.png');

    // Contenedor de errores
    const errorContainer = document.createElement('div');
    errorContainer.id = 'error-container';
    errorContainer.classList.add('error-container');
    errorContainer.style.display = 'none';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Guardar Nuevo Servicio';
    submitBtn.classList.add('btn', 'btn-primary', 'alta-submit');

    form.appendChild(nameGroup);
    form.appendChild(descGroup);
    form.appendChild(priceGroup);
    form.appendChild(typeGroup);
    form.appendChild(iconGroup);
    form.appendChild(errorContainer);
    form.appendChild(submitBtn);

    container.appendChild(form);
    root.appendChild(container);

    // Validacion y guardado
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        errorContainer.style.display = 'none';
        errorContainer.innerHTML = '';
        [nameInput, descInput, priceInput, iconInput].forEach(inp => inp.classList.remove('input-error'));

        const errors = [];

        const nameVal = nameInput.value.trim();
        const descVal = descInput.value.trim();
        const priceVal = parseFloat(priceInput.value);
        const iconVal = iconInput.value.trim();

        if (!nameVal) {
            errors.push('El campo "Nombre del Servicio" es obligatorio.');
            nameInput.classList.add('input-error');
        }

        if (!descVal) {
            errors.push('La descripción es requerida (min. 10 caracteres recomendados).');
            descInput.classList.add('input-error');
        }

        if (isNaN(priceVal) || priceVal <= 0) {
            errors.push('El precio debe ser un monto válido mayor a $0 MXN.');
            priceInput.classList.add('input-error');
        }

        if (iconVal && !iconVal.startsWith('http')) {
            errors.push('Si agregas una imagen, la URL debe comenzar con http o https.');
            iconInput.classList.add('input-error');
        }

        if (errors.length > 0) {
            errorContainer.style.display = 'block';

            const errorTitle = document.createElement('h4');
            errorTitle.textContent = 'Oops! Hay errores en el formulario:';
            errorContainer.appendChild(errorTitle);

            const ul = document.createElement('ul');
            errors.forEach(err => {
                const li = document.createElement('li');
                li.textContent = err;
                ul.appendChild(li);
            });
            errorContainer.appendChild(ul);

            const suggestion = document.createElement('p');
            suggestion.textContent = 'Sugerencia: Revisa los recuadros marcados en rojo. Asegúrate de rellenar todo el texto y poner un precio numérico positivo sin comas extra.';
            suggestion.classList.add('error-suggestion');
            errorContainer.appendChild(suggestion);

            container.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        const nuevoServicio = {
            name: nameVal,
            description: descVal,
            price: priceVal,
            isMonthly: typeInput.value === 'true',
            icon: iconVal ? iconVal : 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/image.svg'
        };

        // Obtener token CSRF
        const csrfEl = document.querySelector('[name=csrfmiddlewaretoken]');
        if (!csrfEl) {
            alert('Error: No se encontró el token de seguridad CSRF.');
            return;
        }

        fetch('/agregar/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfEl.value
            },
            body: JSON.stringify(nuevoServicio)
        }).then(response => {
            if (response.ok) {
                window.location.href = '/#servicios';
            } else {
                alert('Hubo un error al guardar en la sesión del servidor.');
            }
        }).catch(err => {
            alert('Error de conexión: ' + err.message);
        });
    });
});
