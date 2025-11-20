// Botón subir
const btnSubir = document.getElementById("btnSubir");

if (btnSubir) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            btnSubir.classList.add("mostrar");
            btnSubir.classList.remove("oculto");
        } else {
            btnSubir.classList.add("oculto");
            btnSubir.classList.remove("mostrar");
        }
    });

    btnSubir.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Botón descargar CV (solo existe en index.html)
const btnDescargar = document.getElementById("btnDescargar");
if (btnDescargar) {
    btnDescargar.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "PDF/Hoja de vida Luisa González.pdf";
        link.download = "HV-LuisaGonzalez.pdf";
        link.click();
    });
}

// Menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');

if (menuToggle && mobileMenu && menuOverlay) {
    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    menuOverlay.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        menuToggle.classList.remove('active');
    });
}
