export class Producto{
    //Parametros de la clase 'Producto'
    constructor(id,nombre,precio,link,stock,etiqueta,descripcion,idCategoria, idSucursal){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.link=link;
        this.stock=stock;
        this.etiqueta=etiqueta;
        this.descripcion=descripcion;
        this.idCategoria=idCategoria;
        this.idSucursal=idSucursal;
    }
}

export default Producto;
