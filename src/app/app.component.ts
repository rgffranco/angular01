import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})//Component

export class AppComponent {

  data = {
    titleServicos:'bgServicos',
    titleFacilities:'bgFacilities'
  }//data

  quandoClicado(){
    alert('Olá mundo');
  }//quandoClicado

  aoLevantar(novoTitulo:string){
    this.data.titleServicos = novoTitulo;
  }//aoLevantar



}//export
