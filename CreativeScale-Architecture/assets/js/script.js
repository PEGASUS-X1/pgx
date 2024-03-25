

 const menu = document.querySelector(".menu");
 const menuMain = menu.querySelector(".menu-main");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 menuMain.addEventListener("click", (e) =>{
 	if(!menu.classList.contains("active")){
 		return;
 	}
   if(e.target.closest(".menu-item-has-children")){
   	 const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
 });
 goBack.addEventListener("click",() =>{
 	 hideSubMenu();
 })
 menuTrigger.addEventListener("click",() =>{
 	 toggleMenu();
 })
 closeMenu.addEventListener("click",() =>{
 	 toggleMenu();
 })
 document.querySelector(".menu-overlay").addEventListener("click",() =>{
 	toggleMenu();
 })
 function toggleMenu(){
 	menu.classList.toggle("active");
 	document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
 }

 function  hideSubMenu(){  
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() =>{
       subMenu.classList.remove("active");	
    },300); 
    menu.querySelector(".current-menu-title").innerHTML="";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
 }
 
 window.onresize = function(){
 	if(this.innerWidth >991){
 		if(menu.classList.contains("active")){
 			toggleMenu();
 		}

 	}
 }

 let searchForm = document.querySelector('.search-form');

 document.querySelector('#search-btn').onclick = () =>{
     searchForm.classList.toggle('active');
     navbar.classList.remove('active');
     cartItem.classList.remove('active');
 }
 
 document.addEventListener("keyup", e=>{

   if (e.target.matches("#search-box")){
 
       if (e.key ==="Escape")e.target.value = ""
 
       document.querySelectorAll(".cover").forEach(fruta =>{
 
           fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
             ?fruta.classList.remove("filtro-shar")
             :fruta.classList.add("filtro-shar")
       })
 
   }
 
 
 })
 document.addEventListener('DOMContentLoaded', function () {
   const accordionHeaders = document.querySelectorAll('.accordion-header');

   accordionHeaders.forEach(function (header) {
      header.addEventListener('click', function () {
         const content = this.nextElementSibling;

         if (content.style.display === 'block') {
            content.style.display = 'none';
         } else {
            content.style.display = 'block';
         }
      });
   });
});

document.addEventListener("DOMContentLoaded", function () {
   const tabButtons = document.querySelectorAll(".tab-button");
   const tabContents = document.querySelectorAll(".tab-content");

   tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
         // Desactiva todos los botones y oculta todos los contenidos
         tabButtons.forEach((btn) => btn.classList.remove("active"));
         tabContents.forEach((content) => content.classList.remove("active"));

         // Activa el botón clickeado y muestra el contenido correspondiente
         const tabId = button.getAttribute("data-tab");
         button.classList.add("active");
         document.getElementById(tabId).classList.add("active");
      });
   });

   // Establece la pestaña 1 como activa por defecto
   tabButtons[0].click();
});

var audio = new Audio('presentacion.mp3'); // Reemplaza 'url_del_sonido.mp3' con la URL de tu archivo de sonido.
var reproduciendo = false; // Bandera para rastrear si el audio está en reproducción.

function planaDocente() {
  if (!reproduciendo) { // Verificar si el audio no está en reproducción.
   audio.play(); // Iniciar la reproducción.
   reproduciendo = true; // Establecer la bandera en verdadero.

   audio.addEventListener('ended', function() {
     reproduciendo = false; // Restablecer la bandera cuando termine la reproducción.
   });
  }
}
