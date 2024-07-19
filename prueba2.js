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
  eyeIcon.style.width = "25px";
  eyeIcon.style.height = "25px";

  // Crea el contenedor para el icono y lo añade al DOM
  const togglePassword = document.createElement("span");
  togglePassword.style.position = "absolute";
  togglePassword.style.left = "67%";
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
      eyeIcon.style.width = "23px";
      eyeIcon.style.height = "23px";
    } else {
      passwordInput.type = "password";
      eyeIcon.src =
        "https://cdne-pdigital-prd-eus-002.azureedge.net/icons/OjoAbierto.svg";
      eyeIcon.alt = "Mostrar contraseña";
      eyeIcon.style.width = "25px";
      eyeIcon.style.height = "25px";
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
    enlace.href = "https://registro-dev.gruposaesa.cl/recuperar-clave";

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

  // Constantes que contienen los margenes que se le agregaran a la clase de error
  const marginBottomErrorElemento = "20px";

  if (errorElementoLogin) {
    // Obtén el estilo computado del elemento errorElementoLogin
    const style = window.getComputedStyle(errorElementoLogin);

    if (style.display === "block") {
      errorElementoLogin.style.marginBottom = marginBottomErrorElemento;
    } else {
      errorElementoLogin.style.marginBottom = "";
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

function moveHeading() {
  // Obtener los elementos necesarios
  const apiContainer = document.querySelector(".api_container.normaltext");
  const headingDiv = document.querySelector(".heading");

  // Mover el div con la clase heading como primer hijo del div api_container
  if (apiContainer && headingDiv) {
    apiContainer.insertBefore(headingDiv, apiContainer.firstChild);
  } else {
    console.error("No se encontraron los elementos necesarios.");
  }
}

function aplicarCambiosEstilos() {
  // Crear el contenedor del acordeón
  const accordionContainer = document.createElement("div");
  accordionContainer.style.width = "100%";
  accordionContainer.style.borderRadius = "5px";
  accordionContainer.style.justifyContent = "center";
  accordionContainer.style.display = "flex";

  // Crear el elemento del acordeón
  const item = document.createElement("div");
  item.style.boxShadow = "0px 1px 8px rgba(9, 39, 84, 0.14)";
  item.style.width = "100%";
  item.style.maxWidth = "300px";
  item.style.borderRadius = "5px";

  const header = document.createElement("div");
  header.style.backgroundColor = "#FFFFFF";
  header.style.cursor = "pointer";
  header.style.fontWeight = "600";
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "space-between";
  header.style.color = "#4F1FFF";
  header.style.fontSize = "14px";
  header.style.borderRadius = "5px";

  const headerText = document.createElement("span");
  headerText.textContent = "Ingresar con mi email";
  headerText.style.margin = "0px";
  headerText.style.padding = "16px 24px";

  const icon = document.createElement("img");
  icon.src =
    "https://stpdigitalfrontdev001.blob.core.windows.net/assets/login/images/arrow-down.svg";
  icon.alt = "Expand/Collapse";
  icon.style.marginRight = "22px";

  header.appendChild(headerText);
  header.appendChild(icon);

  const content = document.createElement("div");
  content.style.padding = "20px 16px";
  content.style.display = "none";
  content.style.backgroundColor = "#fff";
  content.style.borderBottomLeftRadius = "5px";
  content.style.borderBottomRightRadius = "5px";

  const cuentasSociales = document.querySelector(
    ".claims-provider-list-buttons.social"
  );

  cuentasSociales.style.marginBottom = "32px";
  cuentasSociales.style.display = "flex";
  cuentasSociales.style.width = "100%";
  cuentasSociales.style.justifyContent = "center";

  // Mover el div con id="api" al content del acordeón
  const apiDiv = document.getElementById("api");
  content.appendChild(apiDiv);

  // Crear el nuevo div para el logo
  const imageDiv = document.createElement("div");
  imageDiv.className = "contenedor-logo-saesa";
  imageDiv.style.display = "flex";
  imageDiv.style.justifyContent = "center";
  imageDiv.style.alignItems = "center";
  imageDiv.style.maxWidth = "100%";

  // Crear la imagen
  const image = document.createElement("img");
  image.src =
    "https://stpdigitalfrontdev001.blob.core.windows.net/assets/login/images/grupo-saesa_logo_blanco.svg";
  image.alt = "Logo Grupo Saesa";

  // Agregar la imagen al nuevo div
  imageDiv.appendChild(image);

  // Obtener el div con la clase inner_container
  const innerContainer = document.querySelector(".inner_container");

  // Insertar el nuevo div con la imagen al principio del inner_container
  if (innerContainer) {
    innerContainer.insertBefore(imageDiv, innerContainer.firstChild);
  } else {
    console.error("No se encontró el elemento inner_container.");
  }

  // Añadir evento para mostrar/ocultar el contenido y cambiar el icono
  header.addEventListener("click", () => {
    const isOpen = content.style.display === "block";
    content.style.display = isOpen ? "none" : "block";
    icon.src = isOpen
      ? "https://stpdigitalfrontdev001.blob.core.windows.net/assets/login/images/arrow-down.svg"
      : "https://stpdigitalfrontdev001.blob.core.windows.net/assets/login/images/arrow-up.svg";
    const isOpenRedes = icon.src.includes("arrow-up.svg");
    cuentasSociales.style.display = isOpenRedes ? "none" : "flex";
    headerText.style.padding = isOpenRedes ? "20px 16px" : "16px 24px";
    header.style.borderBottom = isOpenRedes
      ? "1px solid rgba(243, 244, 247, 1)"
      : "0px";
  });

  // Añadir los elementos al contenedor del acordeón
  item.appendChild(header);
  item.appendChild(content);
  accordionContainer.appendChild(item);

  // Insertar el acordeón al final del div con la clase 'api_container normaltext'
  document
    .querySelector(".api_container.normaltext")
    .appendChild(accordionContainer);

  // Mover el claims-provider-list-buttons social fuera del div con id api
  const claimsProviderList = document.querySelector(
    ".claims-provider-list-buttons.social"
  );
  document
    .querySelector(".api_container.normaltext")
    .insertBefore(claimsProviderList, accordionContainer);
}

function agregarElementoRegistrate() {
  // Crear el nuevo div
  const footerDiv = document.createElement("div");
  footerDiv.style.display = "flex";
  footerDiv.style.flexDirection = "row";
  footerDiv.style.justifyContent = "center";
  footerDiv.style.alignItems = "center";
  footerDiv.style.marginTop = "32px";

  // Crear el primer texto
  const text1 = document.createElement("span");
  text1.textContent = "¿Aún no tienes una cuenta?";
  text1.style.fontWeight = "600";
  text1.style.color = "#060709";
  text1.style.margin = "0px";
  text1.style.marginRight = "8px"; // Espacio entre los textos

  // Crear el segundo texto (clikeable)
  const text2 = document.createElement("a");
  text2.textContent = "Regístrate aquí";
  text2.href = "https://registro-dev.gruposaesa.cl/onboarding";
  text2.style.fontWeight = "600";
  text2.style.color = "#4F1FFF";
  text2.style.textDecoration = "none";
  text2.style.marginTop = "0px";

  // Función para ajustar el tamaño del texto
  function ajustarTamanoTexto() {
    const screenWidth = window.innerWidth;
    const fontSize = screenWidth <= 375 ? "13px" : "14px";
    text1.style.fontSize = fontSize;
    text2.style.fontSize = fontSize;
  }

  // Ajustar el tamaño del texto inicialmente
  ajustarTamanoTexto();

  // Escuchar el evento de redimensionamiento de la ventana
  window.addEventListener("resize", ajustarTamanoTexto);

  // Agregar los textos al nuevo div
  footerDiv.appendChild(text1);
  footerDiv.appendChild(text2);

  // Obtener el div con la clase api_container normaltext
  const apiContainer = document.querySelector(".api_container.normaltext");

  // Insertar el nuevo div al final del api_container
  if (apiContainer) {
    apiContainer.appendChild(footerDiv);
  } else {
    console.error("No se encontró el elemento api_container normaltext.");
  }
}

function agregarDisclaimerInformativo() {
  // Crear el div contenedor principal
  const containerDiv = document.createElement("div");
  containerDiv.style.maxWidth = "100%";
  containerDiv.style.display = "flex";
  containerDiv.style.justifyContent = "center";
  containerDiv.style.marginBottom = "20px";

  // Crear el div principal
  const mainDiv = document.createElement("div");
  mainDiv.style.background = "#F7F5FF";
  mainDiv.style.borderRadius = "10px";
  mainDiv.style.display = "flex";
  mainDiv.style.flexDirection = "column";
  mainDiv.style.alignItems = "center";
  mainDiv.style.padding = "16px";
  mainDiv.style.gap = "10px";
  mainDiv.style.maxWidth = "268px";

  // Crear el div interior
  const innerDiv = document.createElement("div");
  innerDiv.style.display = "flex";
  innerDiv.style.flexDirection = "row";
  innerDiv.style.justifyContent = "center";
  innerDiv.style.alignItems = "flex-start";
  innerDiv.style.padding = "0px";
  innerDiv.style.gap = "12px";

  // Crear la imagen
  const img = document.createElement("img");
  img.src =
    "https://stpdigitalfrontdev001.blob.core.windows.net/assets/login/images/info.svg";
  img.alt = "Info";

  // Crear el div para los textos
  const textDiv = document.createElement("div");
  textDiv.style.display = "flex";
  textDiv.style.flexDirection = "column";

  // Crear el primer texto
  const texto1 = document.createElement("span");
  texto1.textContent =
    "Por tu seguridad, debes actualizar los datos de tu cuenta. Si ya lo hiciste, ignora este mensaje.";
  texto1.style.color = "#060709";
  texto1.style.fontSize = "14px";
  texto1.style.margin = "0px";
  texto1.style.maxWidth = "200px";

  // Crear el segundo texto
  const texto2 = document.createElement("a");
  texto2.textContent = "Actualizar mis datos";
  texto2.href = "https://registro-dev.gruposaesa.cl/recuperar-clave";
  texto2.style.color = "#4F1FFF";
  texto2.style.fontSize = "14px";
  texto2.style.fontWeight = "600";
  texto2.style.textDecoration = "none";
  texto2.style.margin = "0px";
  texto2.style.textAlign = "left";

  // Agregar los textos al div de texto
  textDiv.appendChild(texto1);
  textDiv.appendChild(texto2);

  // Agregar la imagen y el div de texto al div interior
  innerDiv.appendChild(img);
  innerDiv.appendChild(textDiv);

  // Agregar el div interior al div principal
  mainDiv.appendChild(innerDiv);

  // Agregar el div principal al contenedor
  containerDiv.appendChild(mainDiv);

  // Obtener el div con la clase entry
  const apiDiv = document.getElementById("api");

  // Insertar el nuevo div al principio del entryDiv
  if (apiDiv) {
    apiDiv.insertBefore(containerDiv, apiDiv.firstChild);
  } else {
    console.error("No se encontró el elemento con la clase entry.");
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
  moveHeading();
  aplicarCambiosEstilos();
  agregarElementoRegistrate();
  agregarDisclaimerInformativo();
}, 1);
