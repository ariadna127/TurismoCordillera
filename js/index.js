const cerrarMenu = document.querySelector("#cerrar-menu");
const abrirMenu = document.querySelector("#abrir-menu");
const menu = document.querySelector("#modal-menu");
abrirMenu.addEventListener("click", () => {
  menu.classList.add("activa");
});
cerrarMenu.addEventListener("click", () => {
  menu.classList.remove("activa");
});
const menuOptions = document.querySelector(".nav").children;
console.log(menuOptions);
for (let i = 0; i < menuOptions.length; i++) {
  menuOptions[i].addEventListener("click", () => {
    menu.classList.remove("activa");
  });
}
const vermas_derecha = document.querySelectorAll(".vermas__derecha");
console.log(vermas_derecha);
vermas_derecha.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    const specificLayer = document.querySelector(`.${e.target.id}`);
    specificLayer.style.transform = "translateX(0)";
    const parentCajas = enlace.closest(".apartados__cajas");
    parentCajas.children[0].style.width = "30%";
    parentCajas.children[1].style.width = "70%";
    const parentOverlay = enlace.closest(".apartados__item");
    parentOverlay.classList.remove("apartados__overlay");
    const cerrarExtras = specificLayer.children[0];
    cerrarExtras.addEventListener("click", () => {
      specificLayer.style.transform = "translateX(100%)";
      parentCajas.children[0].style.width = "50%";
      parentCajas.children[1].style.width = "50%";
      parentOverlay.classList.add("apartados__overlay");
    });
  });
});
const vermas_izquierda = document.querySelectorAll(".vermas__izquierda");

vermas_izquierda.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    const specificLayer = document.querySelector(`.${e.target.id}`);
    specificLayer.style.transform = "translateX(0)";
    const parentCajas = enlace.closest(".apartados__cajas");
    parentCajas.children[0].style.width = "70%";
    parentCajas.children[1].style.width = "30%";
    const parentOverlay = enlace.closest(".apartados__item");
    parentOverlay.classList.remove("apartados__overlay");
    const cerrarExtras = specificLayer.children[0];
    cerrarExtras.addEventListener("click", () => {
      specificLayer.style.transform = "translateX(-100%)";
      parentCajas.children[0].style.width = "50%";
      parentCajas.children[1].style.width = "50%";
      parentOverlay.classList.add("apartados__overlay");
    });
  });
});
