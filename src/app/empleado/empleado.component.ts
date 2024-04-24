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
  empresa: string = "Eviden";

  getEdad(){
    return this.edad;
  }

}
