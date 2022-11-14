import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pastel,Calificaciones } from './pastel';

@Injectable({
  providedIn: 'root'
})
export class HttpService{

  constructor(private _HTTP: HttpClient) { }
  
  GrabaInfo(info:Pastel){
    let URL = environment.urlService
    return this._HTTP.post(URL, info)
  }
  TraeInfo(){
    let URL = environment.urlService
    return this._HTTP.get<Pastel[]>(URL)
  }
  UpdateInfo(id:string,info:Pastel){
    let URL = `${environment.urlService}/${id}`
    return this._HTTP.put(URL,info)
  }
  UpdateComent(id:string,info:Calificaciones){
    let URL = `${environment.urlService}/Comentario/${id}`
    return this._HTTP.put(URL,info)
  }
  TraeDetalle(id:string){
    let URL = `${environment.urlService}/${id}`
    return this._HTTP.get<Pastel>(URL)
  }
}
