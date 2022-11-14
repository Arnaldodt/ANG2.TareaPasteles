import { EmitterVisitorContext } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../http.service';
import { Calificaciones } from '../pastel';

@Component({
  selector: 'app-clasificar',
  templateUrl: './clasificar.component.html',
  styleUrls: ['./clasificar.component.css']
})
export class ClasificarComponent implements OnInit {
  @Input() _id!: string;
  @Output() actualiza = new EventEmitter

  nota!:number;
  comentario!:string;
  calificaciones!:any;

  constructor(private HTTP: HttpService) { }

  ngOnInit(): void {  
    this.nota=0;
    this.comentario="";
  }
  onSubComent(){
    if ((this.nota === 0) && (this.comentario === '')){
      console.log("Error");
    } else {
      this.calificaciones = {nota:this.nota,comentario:this.comentario};
      this.HTTP.UpdateComent(this._id, this.calificaciones).subscribe(data => {
        this.nota=0;
        this.comentario="";
        this.actualiza.emit(true);
      });
    }
  }
}
