import {Producto} from '/js/Producto.js';
import {Mantenedor} from '/js/Mantenedor.js';
import {validarModal, validarModalAdd} from '/js/modals.js';

//Variables globales
const mantenedor = new Mantenedor('https://slifer.bsite.net/td-producto');
const tBody = document.querySelector('#table-body');
let ProductosCachureando = [];

    //Variables del modal modificar
    const inputId = document.getElementById("id-obj");
    const inputNombre = document.getElementById("nombre-obj");
    const inputPrecio = document.getElementById("precio-obj");
    const inputLink = document.getElementById("link-obj");
    const inputStock = document.getElementById("stock-obj");
    const inputEtiqueta = document.getElementById("etiqueta-obj");
    const inputDescripcion = document.getElementById("descripcion-obj");
    const inputIdCategoria = document.getElementById("idCategoria-obj");
    const inputIdSucursal = document.getElementById("idSucursal-obj");
    const btnGuardar = document.querySelector('#guardar');
    //Variables del modal Agregar
    const inputIdAdd = document.getElementById("id-add");
    const inputNombreAdd = document.getElementById("nombre-add");
    const inputPrecioAdd = document.getElementById("precio-add");
    const inputLinkAdd = document.getElementById("link-add");
    const inputStockAdd = document.getElementById("stock-add");
    const inputEtiquetaAdd = document.getElementById("etiqueta-add");
    const inputDescripcionAdd = document.getElementById("descripcion-add");
    const inputIdCategoriaAdd = document.getElementById("idCategoria-add");
    const inputIdSucursalAdd = document.getElementById("idSucursal-add");
    const btnAgregar = document.querySelector('#nuevo');
    //Variables del modal Eliminar
    const btnBorrar = document.querySelector('#eliminar');
    const pIdBorrar = document.getElementById("id-Borrar");

function Eventos(){

    document.addEventListener('DOMContentLoaded', async ()=>{
     
        cargarDatos();

    });

    //Evento selecciona la fila correspondiente que se quiere modificar/borrar y rellena el modal con la informacion
    tBody.addEventListener('click', (e)=>{
        let seleccionado;

        if(e.target.classList.contains('btn-mod')){
      
        seleccionado = e.target.parentElement.parentElement;
        
        rellenarModal(seleccionado);

        }

        ///////////Ina//////
        if(e.target.classList.contains('btn-borrar')){
            seleccionado = e.target.parentElement.parentElement;
            rellenarModalBorrar(seleccionado);
        }
    });
    //Envio de informacion para modificar
    btnGuardar.addEventListener('click', async ()=>{

        let respuesta;

        respuesta = validarModal();
        
        if(respuesta ===true){

            let producto = new Producto(inputId.value,inputNombre.value,inputPrecio.value,
                inputLink.value,inputStock.value, inputEtiqueta.value, inputDescripcion.value, 
                inputIdCategoria.value,inputIdSucursal.value );

            await mantenedor.modificarProducto(producto);

            cargarDatos();
            alert('Registro modificado exitosamente');
        }

    });

    //Envio de informacion para agregar
    btnAgregar.addEventListener('click', async ()=>{

        let respuesta;

        respuesta = validarModalAdd();

        if(respuesta ===true){

            let producto = new Producto(inputIdAdd.value,inputNombreAdd.value,inputPrecioAdd.value,
                inputLinkAdd.value,inputStockAdd.value, inputEtiquetaAdd.value, inputDescripcionAdd.value, 
                inputIdCategoriaAdd.value,inputIdSucursalAdd.value );

            await mantenedor.agregarProducto(producto);

            cargarDatos();
            alert('Registro agregado exitosamente');
        }
        
    });

///////////Ina//////
    //Envío de nformacion para borrar producto
    btnBorrar.addEventListener('click', async ()=> {
     
        let id = pIdBorrar.innerText;
        await mantenedor.borrarProducto(id);

        cargarDatos();
        alert('Registro borrado exitosamente');
    });

}


Eventos();

/*

//Eventos
function Eventos(){

    btnBorrar.addEventListener('click', ()=>{

        let id = inputBorrar.value
        mantenedor1.borrarProducto(id);

    });

}
*/


//Funciones

function rellenarModal(seleccionado){

    let idTabla = seleccionado.querySelector('.id').textContent;
    let nombreTabla = seleccionado.querySelector('.nombre').textContent;
    let precioTabla = seleccionado.querySelector('.precio').textContent;
    let linkTabla = seleccionado.querySelector('.link').textContent;
    let stockTabla = seleccionado.querySelector('.stock').textContent;
    let etiquetaTabla = seleccionado.querySelector('.etiqueta').textContent;
    let descripcionTabla = seleccionado.querySelector('.descripcion').textContent;
    let idCategoriaTabla = seleccionado.querySelector('.idCategoria').textContent;
    let idSucursalTabla = seleccionado.querySelector('.idSucursal').textContent;
    
    //Asignacion de valores al formulario de modal
    inputId.value = idTabla;
    inputNombre.value = nombreTabla;
    inputPrecio.value = precioTabla;
    inputLink.value = linkTabla;
    inputStock.value = stockTabla;
    inputEtiqueta.value = etiquetaTabla;
    inputDescripcion.value = descripcionTabla;
    inputIdCategoria.value = idCategoriaTabla;
    inputIdSucursal.value = idSucursalTabla;

}

///////////Ina//////
function rellenarModalBorrar(seleccionado){
    let idTablaBorrar = seleccionado.querySelector('.id').textContent;
    pIdBorrar.innerText = idTablaBorrar;
}

function llenarHtml(arr){
    
    limpiarHtml(tBody);

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
     tdLink.textContent= element.link;
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
     
    //creacion de los botones
        //boton modificar
        let tdBotonMod = document.createElement('td');
        let botonMod = document.createElement('button');
        botonMod.setAttribute('type', 'button');
        botonMod.setAttribute('data-bs-toggle', 'modal');
        botonMod.setAttribute('data-bs-target', '#modifyModal');
        botonMod.textContent = ('\u{270E}'); //aqui colocar el unicode entre las comillas Modificar
        botonMod.classList.add('btn-mod','btn', 'btn-primary');
        tdBotonMod.appendChild(botonMod);
        tr.appendChild(tdBotonMod);
        //boton Eliminar
        let tdBotonBorr = document.createElement('td');
        let botonBorr = document.createElement('button');
        botonBorr.setAttribute('type', 'button');
        botonBorr.setAttribute('data-bs-toggle', 'modal');
        botonBorr.setAttribute('data-bs-target', '#deleteModal');
        botonBorr.textContent = ('\u{1F5D1}');//aqui colocar el unicode entre las comillas Borrar
        botonBorr.classList.add('btn-borrar','btn', 'btn-danger');
        tdBotonBorr.appendChild(botonBorr);
        tr.appendChild(tdBotonBorr);



     //Agregar la fila completa a la tabla (tbody)
     tBody.appendChild(tr);
    });
}

function limpiarHtml(padre){

   while(padre.firstChild){

    padre.firstChild.remove(padre.firstChild);

   }

}

async function cargarDatos(){

    ProductosCachureando = await mantenedor.producto();
    ProductosCachureando = ProductosCachureando.filter(element =>  element.idSucursal == 6);
    //llamada funcion LlenarHtml crea los registros en la tabla
    llenarHtml(ProductosCachureando);

}