var encodedString = "%C3%B1%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA";
var decodedString = decodeURIComponent(encodedString);

console.log(decodedString); // Resultado: "ραινσϊ"

var usuariosContrasenas = {
     "Florentino": { password: "admin", modelo: "Premiun", imagen: "https://i.pinimg.com/564x/fa/7c/2c/fa7c2c6165b5d219a8353a660f31b2f3.jpg" },
     "admin": { password: "admin", modelo: "Premiun", imagen: "https://i.pinimg.com/564x/69/8b/3b/698b3b755ed139278036e55264a8e0da.jpg" },
     "rubi": { password: "rubi", modelo: "Premiun", imagen: "https://i.pinimg.com/564x/d5/81/45/d58145ed8fded7ebed053677baeef49c.jpg" },
};