import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subalterno',
  template: `<h3 >Subalterno del Empleado</h3>
              <p >Aquí iría un subalterno</p>`,
  styles:["p{background-color:red;margin-left: 35%;margin-right:20%;} h3{text-align: center;}"]
})
export class SubalternoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
