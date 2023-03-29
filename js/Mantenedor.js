export class Mantenedor {
    constructor(url){
        this.url = url;
        this.datos;
    }   
 //incluir métodos para manipular API
 
    //Metodo mostrar Productos
    async producto(){
        try{
            const respuesta = await fetch(this.url);
            this.datos = await respuesta.json();

            return this.datos;

        }catch(error) {

            console.log('error'+error);
        }      
    }

    //Metodo agregar productos
    
    async agregarProducto(obj){
        
        const{id,nombre,precio,link,stock,etiqueta,descripcion,idCategoria,idSucursal} = obj;
        
        try{
            const respuesta = await fetch(this.url, { 
            method: 'POST',
            credentials: 'same-origin', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({
                "id": id,
                "nombre": nombre,
                "precio": precio,
                "link": link,
                "stock": stock,
                "etiqueta": etiqueta,
                "descripcion": descripcion,
                "idCategoria": idCategoria,
                "idSucursal": idSucursal
                })    
            }); 

        this.datos = await respuesta.json()
        console.log(this.datos);

        }catch(error){
                console.log('Error: '+error);
        }
    }
   
    //borrar producto
    async borrarProducto(id){
        try{                     
            const respuesta = await fetch(`${this.url}/${id}`, { 
            method: 'DELETE'}); 
        
            this.datos = await respuesta.json()
            console.log(this.datos);
        
        }catch(error){
                console.log(`Error: ${error}`);
        }
    }


    //Modificar productos
    async modificarProducto(obj){
        const{id,nombre,precio,link,stock,etiqueta,descripcion,idCategoria,idSucursal} = obj;
        
        try{
            const respuesta = await fetch(this.url,{ 
                method: 'PUT',
                credentials: 'same-origin', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({
                    "id": id,
                    "nombre": nombre,
                    "precio": precio,
                    "link": link,
                    "stock": stock,
                    "etiqueta": etiqueta,
                    "descripcion": descripcion,
                    "idCategoria": idCategoria,
                    "idSucursal": idSucursal
                })  
            }); 
        }catch(error){
            console.log(`Error: ${error}`);
        }
    }

}

export default Mantenedor;