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
  //checkGenero=false;
  checkMasculino=false;
  checkFemenino=false;
  checkUndefined=false;
  empleados=[[this.nombre='Juan',this.genero='m'],[this.nombre='Paco',this.genero='m'],
  [this.nombre='David',this.genero='m'],[this.nombre='Pablo',this.genero='m'],[this.nombre='Katia',this.genero='f']];
  apellido="Díaz";
  private edad=17;
  habilitacionCuadro=false;
  logueado=false;
  deshabilitado=false;
  textoRegistro="No estás registrado";
  textoGenero="";
  textoSetUsuario="";
 
  //empresa="Vidal SA";

   getEdad() {

    return this.edad;
    
  }

  /*llamaEmpresa(value:String){
    //return value;

  }*/
 bandera=false;
 
  getLogueado(value:string){
    this.checkFemenino=false;
    this.checkMasculino=false;
    this.checkUndefined=false;
    
    for (var i=0;i<this.empleados.length;i++){
      if(this.empleados[i].includes(value)){
        this.bandera=true;
        this.genero=this.empleados[i][1];
        if(this.genero=='m') {
          this.textoGenero="Masculino";
          this.checkMasculino=true;
          this.deshabilitado=true;
        }
        else if(this.genero=='f'){
          this.textoGenero="Femenino";
          this.checkFemenino=true;
          this.deshabilitado=true;
        }
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
      this.checkUndefined=true;
      this.deshabilitado=true;
      }
     
  }

  setUsuario(event:Event){
    
    //alert((<HTMLInputElement>event.target).value);
    if((<HTMLInputElement>event.target).value=="Masculino"){
      this.textoSetUsuario="Eres el macho alfa";
    }else if((<HTMLInputElement>event.target).value=="Femenino"){
      this.textoSetUsuario="Eres una yegua";

    }else if((<HTMLInputElement>event.target).value=="Undefined"){
      this.textoSetUsuario="¿Eres asexual?";
    }
  }

  unsetUsuario(event:Event){
    this.textoSetUsuario="";
  }
  /*
  setApellido(event:Event){
    this.apellido= (<HTMLInputElement>event.target).value;
  }
 */
}
