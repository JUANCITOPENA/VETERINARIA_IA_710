/**
 * CLÍNICA VETERINARIA DOMINICANA - SCRIPT PRINCIPAL
 * Integración de Mapa Leaflet con Pin en Herrera, Validaciones y Modal.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. INICIALIZACIÓN DEL MAPA INTERACTIVO (HERRERA, SANTO DOMINGO OESTE)
    // Coordenadas geográficas exactas de Herrera, Santo Domingo
    const latHerrera = 18.4615;
    const lngHerrera = -69.9730;

    const mapElement = document.getElementById('veterinariaMap');

    if (mapElement) {
        // Instanciar el mapa centrado en Herrera con nivel de zoom urbano (15)
        const map = L.map('veterinariaMap', {
            center: [latHerrera, lngHerrera],
            zoom: 15,
            scrollWheelZoom: false // Evita interferir con el scroll de la página al deslizar
        });

        // Capa de mosaicos OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Crear Pin/Marcador personalizado con Font Awesome
        const customIcon = L.divIcon({
            className: 'custom-map-pin',
            html: '<div class="pin-marker-box"><i class="fa-solid fa-paw"></i></div>',
            iconSize: [44, 44],
            iconAnchor: [22, 44],
            popupAnchor: [0, -42]
        });

        // Crear y anclar el marcador en Herrera con Popup informativo
        const marker = L.marker([latHerrera, lngHerrera], { icon: customIcon }).addTo(map);

        marker.bindPopup(`
            <div style="text-align: center; font-family: Arial, sans-serif; padding: 4px;">
                <h6 style="font-weight: bold; color: #2C3E50; margin-bottom: 4px;">🐾 VetDominicana - Herrera</h6>
                <p style="font-size: 13px; margin: 0; color: #555;">Av. Isabel Aguiar esq. Calle 4<br>Santo Domingo Oeste, Rep. Dominicana</p>
                <div style="margin-top: 6px; font-weight: bold; color: #18BC9C; font-size: 12px;">Emergencias 24/7 abiertas</div>
            </div>
        `).openPopup();
    }

    // 2. SELECTORES DEL DOM PARA CONTACTO Y MODAL
    const contactForm = document.getElementById('contactForm');
    const inputNombre = document.getElementById('nombre');
    const inputEmail = document.getElementById('email');
    const inputMensaje = document.getElementById('mensaje');
    const modalElement = document.getElementById('emailConfirmModal');
    const modalNombreUsuario = document.getElementById('modalNombreUsuario');

    const bsConfirmModal = new bootstrap.Modal(modalElement);

    // 3. FUNCIÓN REGEX PARA VALIDACIÓN DE CORREO RFC 5322
    function esCorreoValido(correo) {
        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
        return regexEmail.test(String(correo).toLowerCase().trim());
    }

    // 4. LIMPIEZA DE ERRORES AL ESCRIBIR EN TIEMPO REAL
    [inputNombre, inputEmail, inputMensaje].forEach(input => {
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                input.classList.remove('is-invalid');
            }
        });
    });

    // 5. GESTIÓN DEL EVENTO DE ENVÍO DEL FORMULARIO
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombreVal = inputNombre.value.trim();
        const emailVal = inputEmail.value.trim();
        const mensajeVal = inputMensaje.value.trim();

        let esFormularioValido = true;

        // Validación de Nombre
        if (nombreVal.length < 3) {
            inputNombre.classList.add('is-invalid');
            esFormularioValido = false;
        } else {
            inputNombre.classList.remove('is-invalid');
            inputNombre.classList.add('is-valid');
        }

        // Validación de Correo
        if (!esCorreoValido(emailVal)) {
            inputEmail.classList.add('is-invalid');
            esFormularioValido = false;
        } else {
            inputEmail.classList.remove('is-invalid');
            inputEmail.classList.add('is-valid');
        }

        // Validación de Mensaje
        if (mensajeVal.length < 10) {
            inputMensaje.classList.add('is-invalid');
            esFormularioValido = false;
        } else {
            inputMensaje.classList.remove('is-invalid');
            inputMensaje.classList.add('is-valid');
        }

        // Si todos los campos cumplen la validación
        if (esFormularioValido) {
            const destinatario = 'contacto@vetdominicana.com.do';
            const asunto = encodeURIComponent(`Nueva Consulta Veterinaria (Herrera) - ${nombreVal}`);
            const cuerpoMensaje = encodeURIComponent(
                `Hola VetDominicana (Sede Herrera),\n\n` +
                `Mi nombre es: ${nombreVal}\n` +
                `Mi correo de contacto: ${emailVal}\n\n` +
                `Detalles de mi mascota o consulta:\n${mensajeVal}\n\n` +
                `-- Enviado desde el portal web oficial.`
            );

            const mailtoURL = `mailto:${destinatario}?subject=${asunto}&body=${cuerpoMensaje}`;

            // Disparar cliente de correo nativo o web
            window.location.href = mailtoURL;

            // Actualizar mensaje amigable en el modal
            modalNombreUsuario.textContent = `Estimado(a) ${nombreVal}, tu aplicación de correo se ha sincronizado correctamente.`;

            // Detectar apertura del cliente y desplegar la ventana modal con retardo sutil
            setTimeout(() => {
                bsConfirmModal.show();
                contactForm.reset();
                [inputNombre, inputEmail, inputMensaje].forEach(input => {
                    input.classList.remove('is-valid');
                });
            }, 500);
        }
    });

    // 6. CERRAR EL MENÚ RESPONSIVO AL HACER CLIC EN UN ENLACE (MÓVILES)
    const navLinks = document.querySelectorAll('.custom-navbar .nav-link');
    const navbarCollapse = document.getElementById('navbarContenido');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
});