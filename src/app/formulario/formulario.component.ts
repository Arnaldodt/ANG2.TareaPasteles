import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pastel } from '../pastel';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  @Input() pas!: Pastel;
  @Output() actualiza = new EventEmitter

  pastelero!:string;
  imagen!:string;
  pastel!: any;

  error1!: string;
  error2!: string;

  mensaje1!:string;
  mensaje2!:string;
  
  constructor(private HTTP: HttpService) { }

  ngOnInit(): void {
    if (this.pas === undefined){
      this.pastelero="";
      this.imagen="";
    } else{
      this.pastelero=this.pas.pastelero;
      this.imagen=this.pas.imagen;
    }
    this.error1="";
    this.error2="";
    this.mensaje1="Pastelero";
    this.mensaje2="Imagen";
  }

  onSubmit(){
    if (this.pas === undefined){
      let errores:Boolean = false;

      this.error1="";
      this.error2="";
      this.mensaje1="Pastelero";
      this.mensaje2="Imagen";

      if (this.pastelero === ''){
        this.error1= "error";
        errores = true;
        this.mensaje1="** Ingrese Pastelero **";
      }
      if ((this.imagen === '')){
        this.error2= "error";
        errores = true;
        this.mensaje2="** Ingrese Imagen **";
      }
      
      if (!errores){
        this.pastel = {pastelero:this.pastelero,imagen:this.imagen};

        this.HTTP.GrabaInfo(this.pastel).subscribe(data => {
          this.pastelero="";
          this.imagen="";
          this.actualiza.emit(true);
        });
      }
    } else { 
      if ((this.pastelero === '') && (this.imagen === '')){
        console.log("Error");
      } else {
        this.pastel = {pastelero:this.pastelero,imagen:this.imagen};

        this.HTTP.UpdateInfo(this.pas._id,this.pastel).subscribe(data => {
          this.pastelero="";
          this.imagen="";
          this.actualiza.emit(true);
        });
      }
    }

    
  }
}
