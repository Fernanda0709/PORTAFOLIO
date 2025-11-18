const btnSubir = document.getElementById("btnSubir");

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
document.getElementById("btnDescargar").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "PDF/Hoja de vida Luisa González.pdf";  // cambia la ruta
    link.download = "HV-LuisaGonzalez.pdf";
    link.click();
});
