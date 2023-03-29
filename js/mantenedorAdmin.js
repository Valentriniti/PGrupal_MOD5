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
     //Creacion tr
     let tr = document.createElement('tr');
     //creacion TD
     let tdId = document.createElement('td');
     tdId.classList.add('id');
     tdId.textContent = element.id;
     tr.appendChild(tdId);
     tBody.appendChild(tr);
    });

}
