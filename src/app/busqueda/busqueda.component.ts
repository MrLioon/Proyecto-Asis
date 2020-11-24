import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
interface SectionsI {
  header: {
    Stitle: string
  }
  noticias: Array<NoticeI>
}
interface NoticeI {
  header: {
    title: string
  }
  body: {
    img: string
    content: string
    preview:string
    imgSize?: number
    contentSize?: number
  }
  Categorys: Array<string>

}
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {

  constructor(private home:HomePage) { }

  ngOnInit() {}
  cerrarBusqueda(){
    this.home.cerrarbusqueda();
  }
  
}
