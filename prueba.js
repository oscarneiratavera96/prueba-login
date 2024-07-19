function aplicarCambiosEstilos() {
  // Crear el contenedor del acordeón
  const accordionContainer = document.createElement("div");
  accordionContainer.style.width = "100%";
  accordionContainer.style.border = "1px solid #ccc";
  accordionContainer.style.borderRadius = "5px";

  // Crear el elemento del acordeón
  const item = document.createElement("div");
  item.style.borderBottom = "1px solid #ccc";

  const header = document.createElement("div");
  header.style.padding = "10px";
  header.style.backgroundColor = "#f1f1f1";
  header.style.cursor = "pointer";
  header.style.fontWeight = "bold";
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "space-between";

  const headerText = document.createElement("span");
  headerText.textContent = "Cuenta";

  const icon = document.createElement("span");
  icon.textContent = "▶";
  icon.style.marginLeft = "10px";

  header.appendChild(headerText);
  header.appendChild(icon);

  const content = document.createElement("div");
  content.style.padding = "10px";
  content.style.display = "none";
  content.style.backgroundColor = "#fff";

  const cuentasSociales = document.querySelector(
    ".claims-provider-list-buttons.social"
  );

  // Mover el div con id="api" al content del acordeón
  const apiDiv = document.getElementById("api");
  content.appendChild(apiDiv);

  // Añadir evento para mostrar/ocultar el contenido y cambiar el icono
  header.addEventListener("click", () => {
    const isOpen = content.style.display === "block";
    content.style.display = isOpen ? "none" : "block";
    cuentasSociales.style.display = isOpen ? "none" : "block";
    icon.textContent = isOpen ? "▶" : "▼";
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
