class Prenda {
    constructor(articulo, talle, color, precio){
        this.articulo = articulo.toUpperCase();
        this.talle = talle;
        this.color = color;
        this.precio = Number(precio);
    }
 sumarIva() {
    this.precio = this.precio * 1.21;
 }
}

const prendas = [];
prendas.push(new Prenda("Gorra","L","Rojo","4000"));
prendas.push(new Prenda("Bermuda","36","Negro", "7000"));
prendas.push(new Prenda("Musculosa","XL","Blanco", "3000"));

for (prenda of prendas)
    prenda.sumarIva();

    console.log(prendas);




// EL CODIGO ESCRITO DEBAJO DE ESTO, ES DEL TRABAJO ANTERIOR. ( NO CUENTA )



// function solicitarNombre() {
//     let nombre = prompt("Ingresar nombre y apellido");
//     while(nombre === ""){
//         nombre = prompt("Ingresar nombre y apellido");
//     }
//     alert("Bienvenido a Guatambú "+nombre+"!");
// }


// function ofrecerCatalogo(){
//     let producto;
//     do {
//         producto = Number(prompt("¿Que tipo de articulo necesita? :  \n1-Remera\n2-Billetera\n3-Pantalon\n4-Buzo"))}
//      while(producto < 1 && producto > 4);   
//      switch(producto){
//         case 1:
//             return "Remera"
//         case 2:
//             return "Billetera";
//         case 3:
//             return "Pantalon";
//         case 4:
//             return "Buzo";              
//      }   
// }

// function verPrecio(articulo){
//     if(articulo === "Remera"){
//         return 5000;
//     } else if (articulo === "Billetera"){
//         return 4000;
//     } else if (articulo === "Pantalon") {
//         return 11000;
//     } else if (articulo === "Buzo"){
//         return 13000;
//     } 
// }



// function cobrar(articulo, precio){
//     alert("Usted eligio el siguiente articulo: \n"+articulo+"\nSu precio es de: $"+precio);
// let pago = Number(prompt("Ingrese el monto con el cual quiere abonar"));
// if(pago > precio){
//     alert("Gracias por la compra, su vuelto es de $"+(pago - precio));
// } else if (pago === precio) {
//     alert("Gracias por su compra! Vuelva pronto..");
// } else {
//     alert("Por favor, ingrese un monto igual o mayor al costo del articulo para validar la compra");
// }   
// }  


// solicitarNombre();
// let miArticulo = ofrecerCatalogo();
// let precioArticulo = verPrecio(miArticulo);
// cobrar(miArticulo, precioArticulo);