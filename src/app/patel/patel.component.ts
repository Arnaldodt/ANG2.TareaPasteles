import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pastel } from '../pastel';

@Component({
  selector: 'app-patel',
  templateUrl: './patel.component.html',
  styleUrls: ['./patel.component.css']
})
export class PatelComponent implements OnInit {
@Input() pas!:Pastel;
@Output() muestraDetalle = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }
  MuestraDetalle(id:string){
    this.muestraDetalle.emit(id);
  }
}
