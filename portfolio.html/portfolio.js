
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".portfolio-item");
  const modal = document.getElementById("modal");
  const modalBody = modal.querySelector(".modal-body");
  const closeBtn = modal.querySelector(".close-btn");

  // 1. FUNCIÓN MODIFICADA: Ahora acepta un DocumentFragment (para template) o una cadena (para video/imagen)
function openModalWithContent(content) {
    // Limpiar el contenido existente
    modalBody.innerHTML = ""; 

    // Comprobar si el contenido es un Fragmento de Documento (el template del mensaje privado)
    if (content instanceof DocumentFragment) {
        modalBody.appendChild(content); 
        
   
        if (typeof window.setLanguage === 'function') {
            // 1. Obtiene el idioma activo (por defecto 'en' si no hay nada guardado)
            const currentLang = localStorage.getItem("lang") || "en"; 
            // 2. Llama a la función de traducción con el idioma correcto
            window.setLanguage(currentLang); 
        }
    } else {
        // Para videos e imágenes (cadenas de HTML)
        modalBody.innerHTML = content;
    }
    
    modal.classList.add("active");
    document.body.classList.add("modal-open");
    // foco accesible en el botón de cerrar
    closeBtn.focus();
}

// portfolio.js

// 2. FUNCIÓN MODIFICADA: Ahora solo actúa si hay un mensaje custom
function buildPrivateMessage(item) {
  const custom = item.getAttribute("data-msg");
  
  // 1. Clonar el template del HTML
  const templateContent = document.getElementById("private-message-template").content.cloneNode(true);
  
  // 2. Encontrar el párrafo
  const msgElement = templateContent.querySelector("private-msg-text");

  if (msgElement && custom) {
      // Caso: El item tiene un mensaje custom (data-msg).
      // Lo inyectamos y eliminamos data-i18n para evitar que lang.js lo toque.
      msgElement.textContent = custom;
      msgElement.removeAttribute('data-i18n'); 
  }

  return templateContent;
}

// ... El resto de portfolio.js (incluyendo openModalWithContent) se mantiene igual

  items.forEach(item => {
    item.addEventListener("click", () => {
      // si está marcado como privado
      const isLocked = item.getAttribute("data-locked") === "true" || item.classList.contains("private");
      if (isLocked) {
        // Si está bloqueado, llama a buildPrivateMessage y abre el modal
        const content = buildPrivateMessage(item);
        openModalWithContent(content);
        return;
      }

      const video = item.getAttribute("data-video");
      const img = item.getAttribute("data-img");
      let content = "";

      if (video) {
        // Contenedor responsive 16:9 para videos de YouTube
        content = `<div style="width:100%;height:0;padding-bottom:56.25%;position:relative;"><iframe src="${video}" style="position:absolute;inset:0;width:100%;height:100%;" allowfullscreen></iframe></div>`;
      } else if (img) {
        content = `<img src="${img}" alt="Portfolio item">`;
      } else {
        // fallback: abrir thumb en grande
        const thumb = item.querySelector("img")?.getAttribute("src");
        content = thumb ? `<img src="${thumb}" alt="Portfolio item">` : `<p>No hay contenido disponible</p>`;
      }

      // El contenido es una cadena de HTML
      openModalWithContent(content);
    });
  });

  // Cerrar modal
  function closeModal() {
    modal.classList.remove("active");
    modalBody.innerHTML = "";
    document.body.classList.remove("modal-open");
    // devolver foco al primer elemento del portfolio para navegación
    const firstItem = document.querySelector(".portfolio-item");
    if (firstItem) firstItem.focus();
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  // cerrar con Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});
