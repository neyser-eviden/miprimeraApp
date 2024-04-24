import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
  //styles:["p{background-color:red}"]
})
export class EmpleadoComponent {
  nombre:string = "Neyser";
  apellido:string = "Huamán";
  private edad: number = 19;
  empresa:string = "Eviden";

  getEdad(){
    return this.edad;
  }

  habilitacionCuadro=false;

  usuarioRegistrado = false;

  textoRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuarioRegistrado = false;
  }

  setUsuarioRegistrado(event:Event){
    if ((<HTMLInputElement>event.target).value == "SI") {
      this.textoRegistro = "Usuarios registrado"
    } else{
      this.textoRegistro="Usuario NO registrado";
    }
  }

  

}
