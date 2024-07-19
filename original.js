/**
 * Función para restringir poput de formulario
 */
function restringirFormulario() {
  // Selecciona el formulario por su clase
  const formPerson = document.querySelector("form");

  if (formPerson) {
    // Agrega el atributo 'novalidate' al formulario si se encontró
    formPerson.setAttribute("novalidate", "true");
  } else {
    console.error(
      "No se encontró ningún formulario con la clase 'localAccount'"
    );
  }
}

/**
 * Función encargada de reconstruir elementos del div contenedor del correo
 */
function moverElementosCorreo() {
  const entryItem = document.querySelector(".entry-item");
  const inputElement = document.querySelector("#email");
  const labelElement = document.querySelector('label[for="email"]');
  const errorElement = document.querySelector(".error.itemLevel");

  if (inputElement && labelElement) {
    // Mover el input antes del label
    entryItem.insertBefore(inputElement, labelElement);
  }

  if (errorElement) {
    // Mover el div.error al final del .entry-item
    entryItem.appendChild(errorElement);
  }
}

/**
 * Función encargada de establecer el error en label del correo
 */
function establecerErrorInputCorreo() {
  // Seleccionar el elemento .error.itemLevel
  const errorElement = document.querySelector(".error.itemLevel");
  // Seleccionar el label asociado al input
  const labelElement = document.querySelector('label[for="email"]');

  // Observador de atributos para detectar cambios en aria-hidden
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.attributeName === "aria-hidden") {
        if (mutation.target.getAttribute("aria-hidden") === "false") {
          // Cambiar el color del label a rojo
          labelElement.style.color = "#a61e0c";
        } else {
          // Restaurar el color del label a su valor inicial
          labelElement.style.color = ""; // Esto restaura el color a su valor por defecto
        }
      }
    }
  });

  if (observer && errorElement) {
    // Observar cambios en el atributo aria-hidden del elemento .error.itemLevel
    observer.observe(errorElement, { attributes: true });
  }
}

/**
 * Función encargada de establecer el error en label del password
 */
function establecerErrorInputPassword() {
  // Seleccionar el elemento .error.itemLevel
  const errorElement = document.querySelectorAll(".error.itemLevel");
  // Seleccionar el label asociado al input
  const labelElementPassword = document.querySelector('label[for="password"]');

  // Observador de atributos para detectar cambios en aria-hidden
  const observerPassword = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.attributeName === "aria-hidden") {
        if (mutation.target.getAttribute("aria-hidden") === "false") {
          // Cambiar el color del label a rojo
          labelElementPassword.style.color = "#a61e0c";
        } else {
          // Restaurar el color del label a su valor inicial
          labelElementPassword.style.color = ""; // Esto restaura el color a su valor por defecto
        }
      }
    }
  });

  if (observerPassword && errorElement && labelElementPassword) {
    // Observar cambios en el atributo aria-hidden del elemento .error.itemLevel
    observerPassword.observe(errorElement[1], { attributes: true });
  }
}

/**
 * Función encargada de reconstruir elementos del div contenedor del password
 */
function moverElementosPassword() {
  // Seleccionar todos los elementos con la clase "entry-item"
  const entryItemDivs = document.querySelectorAll(".entry-item");

  // Verificar si se encontraron al menos dos elementos con la clase "entry-item"
  if (entryItemDivs.length >= 2) {
    // Obtener el segundo div con la clase "entry-item" (el índice 1)
    const secondEntryItemDiv = entryItemDivs[1];

    // Seleccionar el elemento "a" dentro del div con la clase "password-label" dentro del segundo div "entry-item"
    const forgotPasswordLink =
      secondEntryItemDiv.querySelector(".password-label a");

    // Verificar si se encontraron ambos elementos
    if (secondEntryItemDiv && forgotPasswordLink) {
      // Mover el elemento "a" al final del segundo div "entry-item"
      secondEntryItemDiv.appendChild(forgotPasswordLink);
    }
  }

  // Verificar si se encontraron al menos dos elementos con la clase "entry-item"
  if (entryItemDivs.length >= 2) {
    // Obtener el segundo div con la clase "entry-item" (el índice 1)
    const entryItemDiv = entryItemDivs[1];

    // Obtener el label dentro del div "password-label"
    const passwordLabel = entryItemDiv.querySelector(".password-label label");

    // Verificar si se encontró el label
    if (passwordLabel) {
      // Insertar el label antes del div "password-label"
      entryItemDiv.insertBefore(passwordLabel, entryItemDiv.firstChild);

      // Eliminar el div "password-label"
      const passwordLabelDiv = entryItemDiv.querySelector(".password-label");
      if (passwordLabelDiv) {
        entryItemDiv.removeChild(passwordLabelDiv);
      }
    }
  }

  // Verificar si se encontró el div
  if (entryItemDivs.length >= 2) {
    // Obtener el segundo div con la clase "entry-item" (el índice 1)
    const secondEntryItemDiv = entryItemDivs[1];

    // Obtener el input de tipo password dentro del div "entry-item"
    const passwordInput = secondEntryItemDiv.querySelector(
      'input[type="password"]'
    );

    // Verificar si se encontró el input
    if (passwordInput) {
      // Mover el input al primer hijo del div
      secondEntryItemDiv.insertBefore(
        passwordInput,
        secondEntryItemDiv.firstChild
      );
    }
  }
}

/**
 * Función que permite al usuario ver o ocultar el password
 */
function crearVerPassword() {
  // Crea el icono del ojo abierto como un elemento IMG
  const eyeIcon = document.createElement("img");
  eyeIcon.src =
    "https://cdne-pdigital-prd-eus-002.azureedge.net/icons/OjoAbierto.svg";
  eyeIcon.alt = "Mostrar contraseña";

  // Crea el contenedor para el icono y lo añade al DOM
  const togglePassword = document.createElement("span");
  togglePassword.style.position = "absolute";
  togglePassword.style.left = "78%";
  togglePassword.style.cursor = "pointer";
  togglePassword.appendChild(eyeIcon);
  document.getElementById("password").parentNode.appendChild(togglePassword);

  // Agrega el evento de clic al icono
  togglePassword.addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.src =
        "https://cdne-pdigital-prd-eus-002.azureedge.net/icons/OjoCerrado.svg";
      eyeIcon.alt = "Ocultar contraseña";
    } else {
      passwordInput.type = "password";
      eyeIcon.src =
        "https://cdne-pdigital-prd-eus-002.azureedge.net/icons/OjoAbierto.svg";
      eyeIcon.alt = "Mostrar contraseña";
    }
  });
}

/**
 * Función que permite establecer la url a donde sera llevado el olvide mi contraseña
 */
function redirigirCambio() {
  // Seleccionar el enlace por su id
  var enlace = document.getElementById("forgotPassword");

  // Agregar un evento de clic al enlace
  enlace.addEventListener("click", function (event) {
    // Prevenir el comportamiento predeterminado de navegación
    event.preventDefault();

    // Cambiar la URL del enlace
    enlace.href = "https://registro-dev.gruposaesa.cl/onboarding";

    // Navegar a la nueva dirección
    window.location.href = enlace.href;
  });
  enlace.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
}

/**
 * Función para agregar espaciado para cuando se presente error en el password
 */
function ajustarMargenError() {
  // Selecciona el div con las clases error y api_container
  const errorElementoLogin = document.querySelector(".error.pageLevel");
  const apiContainerElementoComponente =
    document.querySelector(".api_container");

  // Constantes que contienen los margenes que se le agregaran a las clases de error y api_container
  const marginBottomErrorElemento = "20px";
  const marginTopApiContainerElemento = "122px";

  if (errorElementoLogin && apiContainerElementoComponente) {
    // Obtén el estilo computado del elemento errorElementoLogin
    const style = window.getComputedStyle(errorElementoLogin);

    if (style.display === "block") {
      errorElementoLogin.style.marginBottom = marginBottomErrorElemento;
      apiContainerElementoComponente.style.marginTop =
        marginTopApiContainerElemento;
    } else {
      errorElementoLogin.style.marginBottom = "";
      apiContainerElementoComponente.style.marginTop = "";
    }
  }
}

/**
 * Función para observar cambios en el display del div del error de password
 */
function observarCambiosEnDisplay() {
  const errorElementoLoginDisplay = document.querySelector(".error.pageLevel");

  if (errorElementoLoginDisplay) {
    // Crear un MutationObserver para observar cambios en los atributos
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "style"
        ) {
          ajustarMargenError();
        }
      });
    });

    // Configurar el observador para observar cambios en los atributos del errorElementoLogin
    observer.observe(errorElementoLoginDisplay, {
      attributes: true,
      attributeFilter: ["style"],
    });

    // Ajustar el margen inicialmente
    ajustarMargenError();
  }
}

/**
 * Temporizador de funciones para permitir que cargue primero el html antes que el js
 */
setTimeout(() => {
  //Ejecución de funciones
  restringirFormulario();
  moverElementosCorreo();
  establecerErrorInputCorreo();
  moverElementosPassword();
  establecerErrorInputPassword();
  crearVerPassword();
  redirigirCambio();
  observarCambiosEnDisplay();
}, 1);
