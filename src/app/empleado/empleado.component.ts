import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  title = 'miprimeraApp';
  bienve='¡Bienvenido a una página de prueba!';
  //nombre="Juan";
  nombre="";
  genero="undefined";
  checkGenero=false;
  empleados=[[this.nombre='Juan',this.genero='m'],[this.nombre='Paco',this.genero='m'],
  [this.nombre='David',this.genero='m'],[this.nombre='Pablo',this.genero='m'],[this.nombre='Katia',this.genero='f']];
  apellido="Díaz";
  private edad=17;
  habilitacionCuadro=false;
  logueado=false;
  textoRegistro="No estás registrado";
  textoGenero=""
 
  //empresa="Vidal SA";

   getEdad() {

    return this.edad;
    
  }

  /*llamaEmpresa(value:String){
    //return value;

  }*/
 bandera=false;
 
  getLogueado(value:string){
    
    for (var i=0;i<this.empleados.length;i++){
      if(this.empleados[i].includes(value)){
        this.bandera=true;
        this.genero=this.empleados[i][1];
        if(this.genero=='m') this.textoGenero="Hombre";
        else if(this.genero=='f')this.textoGenero="Mujer";
        }
      }
    
      if(this.bandera){
        this.logueado=true;
        this.textoRegistro="Eres uno de los usuarios registrados";
        this.bandera=false;
      }else{
      this.logueado=false;
      this.textoRegistro="No estás registrado";
      this.textoGenero="No sabemos tu género";
      }
     
  }

  /*getGenero(){
    if (this.genero=='m') {
      this.checkGenero=true;
      this.textoRegistro="Eres un hombre";
    }else if(this.genero=='f'){
       this.checkGenero=false;
       this.textoGenero="Eres una mujer";
    }else {
      this.textoGenero="No sabemos lo que eres";
    }
    
  }*/


 
}
