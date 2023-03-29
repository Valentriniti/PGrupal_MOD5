import {Producto} from '/js/Producto.js';
import {Mantenedor} from '/js/Mantenedor.js';

const mantenedor = new Mantenedor('https://slifer.bsite.net/td-producto');


function Eventos(){

    document.addEventListener('DOMContentLoaded', async ()=>{
        let ProductosCachureando;
        ProductosCachureando = await mantenedor.producto();
        ProductosCachureando = ProductosCachureando.filter(element =>  element.idSucursal == 6);
        //llamada funcion LlenarHtml crea los registros en la tabla
        llenarHtml(ProductosCachureando);
    });

}

Eventos();

/*

//Variables globales

const btnAgregar = document.querySelector('#agregarP');
const mantenedor1 = new Mantenedor('https://slifer.bsite.net/td-producto');
const producto1 = new Producto(0,'Lampara de escritorio', 15000,'/img/lamp.jpg',15,'Lampara','Lampara pequeña de escritorio de alumnio',40,6);

    //variables mini Mantenedor
        //Eliminar
        const inputBorrar = document.querySelector('#inputBorrar');
        const btnBorrar = document.querySelector('#btnBorrar');
        //modificar
        const inputModId = document.querySelector('#inputMod-id');
        const inputModNombre = document.querySelector('#inputMod-nombre');
        const inputModDes = document.querySelector('#inputMod-des');
        const inputModPrec = document.querySelector('#inputMod-prec');
        const inputModCat = document.querySelector('#inputMod-cat');
        const inputModStock = document.querySelector('#inputMod-stock');
        const inputModImg = document.querySelector('#inputMod-img');
        const inputModTag = document.querySelector('#inputMod-tag');
        const btnMod = document.querySelector('#btnMod');


//Eventos
function Eventos(){

    document.addEventListener('DOMContentLoaded', async ()=>{
        
        let ProductosCachureando;
        let resultado;
        console.log('Nuestros Productos');

        ProductosCachureando = await mantenedor1.producto();
        
        resultado = ProductosCachureando.filter(element =>  element.idSucursal == 6);

        console.log(resultado);

    })

    btnAgregar.addEventListener('click', ()=>{
        
        mantenedor1.agregarProducto(producto1);

    });

    btnBorrar.addEventListener('click', ()=>{

        let id = inputBorrar.value
        mantenedor1.borrarProducto(id);

    });

    btnMod.addEventListener('click', ()=>{

        let obj = {

            "id":inputModId.value,
            "nombre": inputModNombre.value ,
            "precio": inputModPrec.value,
            "link": inputModImg.value,
            "stock": inputModStock.value,
            "etiqueta": inputModTag.value ,
            "descripcion":inputModDes.value ,
            "idCategoria": inputModCat.value,
            "idSucursal": 6
        }

        mantenedor1.modificarProducto(obj)

    });
}

Eventos();


//
//mantenedor1.producto();*/


//Funciones

function llenarHtml(arr){

    const tBody = document.querySelector('#table-body');
    
    arr.forEach(element => {
     //Creación de una fila (tr)
     let tr = document.createElement('tr');
     //Creación de una celda de datos (td) para el id
     let tdId = document.createElement('td');
     tdId.classList.add('id');
     tdId.textContent = element.id;
     tr.appendChild(tdId);

     //Creación de una celda de datos (td) para el nombre
     let tdNombre = document.createElement('td');
     tdNombre.classList.add('nombre');
     tdNombre.textContent = element.nombre;
     tr.appendChild(tdNombre);
     
     //Creación de una celda de datos (td) para el precio
     let tdPrecio = document.createElement('td');
     tdPrecio.classList.add('precio');
     tdPrecio.textContent = element.precio;
     tr.appendChild(tdPrecio);

     //Creación de una celda de datos (td) para el link
     let tdLink = document.createElement('td');
     tdLink.classList.add('link');
     let link = document.createElement('link')
     link.src= element.link;
     tdLink.appendChild(link);
     tr.appendChild(tdLink);

     // Creación de una celda de datos (td) para el stock
     let tdStock = document.createElement('td');
     tdStock.classList.add('stock');
     tdStock.textContent = element.stock;
     tr.appendChild(tdStock);

     // Creación de una celda de datos (td) para la etiqueta
     let tdEtiqueta = document.createElement('td');
     tdEtiqueta.classList.add('etiqueta');
     tdEtiqueta.textContent = element.etiqueta;
     tr.appendChild(tdEtiqueta);

     // Creación de una celda de datos (td) para la descripcion
     let tdDescripcion = document.createElement('td');
     tdDescripcion.classList.add('descripcion');
     tdDescripcion.textContent = element.descripcion;
     tr.appendChild(tdDescripcion);

     // Creación de una celda de datos (td) para id-categoria 
     let tdIdCategoria = document.createElement('td');
     tdIdCategoria.classList.add('idCategoria');
     tdIdCategoria.textContent = element.idCategoria;
     tr.appendChild(tdIdCategoria);

     // Creación de una celda de datos (td) para id-sucursal
     let tdIdSucursal = document.createElement('td');
     tdIdSucursal.classList.add('idSucursal');
     tdIdSucursal.textContent = element.idSucursal;
     tr.appendChild(tdIdSucursal);

     //Agregar la fila completa a la tabla (tbody)
     tBody.appendChild(tr);
    });
}