var search_open = document.getElementById("search_open");
var search = document.getElementById("search");
search_open.onclick = function () {
    if (search.classList.contains("open")) {
        // La clase 'open' está presente, la quitamos
        search.classList.remove("open");
    } else {
        // La clase 'open' no está presente, la agregamos
        search.classList.add("open");
    }
}

$(document).ready(function () {
    $('.subs').hover(
        function () {
            $(this).find('.fa-angle-down').css('transform', 'rotate(180deg)');
        },
        function () {
            $(this).find('.fa-angle-down').css('transform', 'rotate(0deg)');
        }
    );
});
document.addEventListener('DOMContentLoaded', function () {
    const Menu = document.getElementById('menu');
    const bars = document.getElementById("bars");
    const close_menu = document.getElementById("close_menu");
  
    let isSubMenuVisible = false;  // Agregar la variable de estado
  
    function borrar_menu() {
      Menu.style.display = "none";
    }
  
    bars.onclick = function () {
      Menu.style.display = "block";
    }
  
    function agregarClaseEnPantallaPequena() {
      if (window.matchMedia('(max-width: 760px)').matches) {
        const subs = document.getElementById("subs");
        const Subt = document.getElementById("sub-menu");
  
        subs.onclick = function () {
          if (isSubMenuVisible) {
            Subt.style.display = "none";
          } else {
            Subt.style.display = "block";
          }
          isSubMenuVisible = !isSubMenuVisible;  // Alternar el estado
        }
  
        bars.style.display = "block";
        Menu.classList.add('Mobile');
        close_menu.style.display = "block";
        Subt.classList.remove("hover");
        close_menu.addEventListener('click', borrar_menu);
      } else {
        Menu.classList.remove('Mobile');
        bars.style.display = "none";
        close_menu.style.display = "none";
      }
    }
  
    agregarClaseEnPantallaPequena();
  
    window.addEventListener('resize', agregarClaseEnPantallaPequena);
  });
  