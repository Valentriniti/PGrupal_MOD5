const regExNumber = /^\d+$/;
/* let textRegex = ^(.|\s)*[a-zA-Z]+(.|\s)*$; */

let inputId = document.getElementById("id-obj");
let inputNombre = document.getElementById("nombre-obj");
let inputPrecio = document.getElementById("precio-obj");
let inputLink = document.getElementById("link-obj");
let inputStock = document.getElementById("stock-obj");
let inputEtiqueta = document.getElementById("etiqueta-obj");
let inputDescripcion = document.getElementById("descripcion-obj");
let inputIdCategoria = document.getElementById("idCategoria-obj");
let inputIdSucursal = document.getElementById("idSucursal-obj");
const pAlert = document.getElementById("alert");
const buttonGuardar = document.getElementById("guardar");


const inputIdAdd = document.getElementById("id-add");
const inputNombreAdd = document.getElementById("nombre-add");
const inputPrecioAdd = document.getElementById("precio-add");
const inputLinkAdd = document.getElementById("link-add");
const inputStockAdd = document.getElementById("stock-add");
const inputEtiquetaAdd = document.getElementById("etiqueta-add");
const inputDescripcionAdd = document.getElementById("descripcion-add");
const inputIdCategoriaAdd = document.getElementById("idCategoria-add");
const inputIdSucursalAdd = document.getElementById("idSucursal-add");

export function validarModal() {
        if (!inputId.value){
/*           pAlert.textContent = 'debes ingresar Id del producto'; */
        alert('debes ingresar Id del producto'); 
            return false;
        }else if (!regExNumber.test(inputId.value)) {
          alert('Id debe contener números solamente');
          return false;
        } else if (!inputNombre.value) {
          alert('debes ingresar nombre del producto');
          return false;
        } else if (!inputPrecio) {
          alert('debes ingresar precio del producto');
          return false;
        } else if (!regExNumber.test(inputPrecio.value)) {
          alert('Precio debe contener números solamente');
          return false;
        } else if (!inputLink.value) {
          alert('debes ingresar link del producto');
          return false;
        } else if (!inputStock.value) {
          alert('debes ingresar stock del producto');
          return false;
        } else if (!regExNumber.test(inputStock.value)) {
          alert('Stock debe contener números solamente');
          return false;
        } else if (!inputEtiqueta.value) {
          alert('debes ingresar etiqueta del producto');
          return false;
        } else if (!inputDescripcion.value) {
          alert('debes ingresar una descripción del producto');
        } else if (!inputIdCategoria.value) {
          alert('debes ingresar Id Categoría del producto');
        }else if (!regExNumber.test(inputIdCategoria.value)) {
          alert('Id Categoría debe contener números solamente');
        } else if (!inputIdSucursal.value) {
          alert('debes ingresar Id Sucursal del producto');
        }else if (!regExNumber.test(inputIdSucursal.value)) {
          alert('Id Sucursal debe contener números solamente');
        }
         else {
          
          return true;
        }
}



export function validarModalAdd() {
  if (!inputIdAdd.value){
/*           pAlert.textContent = 'debes ingresar Id del producto'; */
  alert('debes ingresar Id del producto'); 
      return false;
  }else if (!regExNumber.test(inputIdAdd.value)) {
    alert('Id debe contener números solamente');
    return false;
  } else if (!inputNombreAdd.value) {
    alert('debes ingresar nombre del producto');
    return false;
  } else if (!inputPrecioAdd) {
    alert('debes ingresar precio del producto');
    return false;
  } else if (!regExNumber.test(inputPrecioAdd.value)) {
    alert('Precio debe contener números solamente');
    return false;
  } else if (!inputLinkAdd.value) {
    alert('debes ingresar link del producto');
    return false;
  } else if (!inputStockAdd.value) {
    alert('debes ingresar stock del producto');
    return false;
  } else if (!regExNumber.test(inputStockAdd.value)) {
    alert('Stock debe contener números solamente');
    return false;
  } else if (!inputEtiquetaAdd.value) {
    alert('debes ingresar etiqueta del producto');
    return false;
  } else if (!inputDescripcionAdd.value) {
    alert('debes ingresar una descripción del producto');
  } else if (!inputIdCategoriaAdd.value) {
    alert('debes ingresar Id Categoría del producto');
  }else if (!regExNumber.test(inputIdCategoriaAdd.value)) {
    alert('Id Categoría debe contener números solamente');
  } else if (!inputIdSucursalAdd.value) {
    alert('debes ingresar Id Sucursal del producto');
  }else if (!regExNumber.test(inputIdSucursalAdd.value)) {
    alert('Id Sucursal debe contener números solamente');
  }
   else {
    
    return true;
  }
}
//buttonGuardar.addEventListener('click', validarModal)

