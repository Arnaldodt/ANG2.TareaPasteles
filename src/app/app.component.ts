import { Component, OnInit } from '@angular/core';
import { Pastel } from './pastel';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  titulo= "Califica mis tortas"
  pastelero!:string;
  imagen!:string;
  pastel!: any;
  pastel1!: any;
  show=false;
  show1=false;
  Prom: number=0;
  constructor(private HTTP: HttpService){
    
  }
  ngOnInit(){
    this.pastelero="";
    this.imagen="";

    this.buscar();
  }
  buscar(){
    this.HTTP.TraeInfo().subscribe(data =>{
    if (data.length !== undefined){
      this.pastel = data;
      this.show=true;
     }
    })
  }
  muestraDetalle(id:string){
    if (id === ''){
      this.show1=false;
    } else {
      this.HTTP.TraeDetalle(id).subscribe(data =>{
        if (data !== undefined){
          this.pastel1 = data;
          this.show1=true;
          this.Prom = 0;
          if (this.pastel1.calificaciones.length >0){
            let suma:number= 0;
            for (let i =0; i<this.pastel1.calificaciones.length ; i++){
              suma += this.pastel1.calificaciones[i].nota;
            }
            this.Prom = Math.floor(suma/this.pastel1.calificaciones.length);
          }
        }
      })
    }
  }

  actualiza(actualiza:boolean)
  {
    this.buscar();
    this.muestraDetalle('')
  }
}
