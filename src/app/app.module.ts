import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { PatelComponent } from './patel/patel.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ClasificarComponent } from './clasificar/clasificar.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PatelComponent,
    FormularioComponent,
    ClasificarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
