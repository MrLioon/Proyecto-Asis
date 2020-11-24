import { Component, OnInit } from '@angular/core';
import { DomController } from '@ionic/angular';
import { NoticeServiceService } from '../services/notice-service.service';
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
    imgSize?: number
    contentSize?: number
  }
  Categorys: Array<string>

}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {



  constructor(private NoticeService: NoticeServiceService) {

  }

  noticiasConfig = this.NoticeService.getconfig();
  //allsections
  allsections=this.NoticeService.getSection();
  //render sections
  sections = this.allsections;
  
  matches:Array<SectionsI>=[];

  ngOnInit() {

    this.previewcontent();

  }
  detalle(title: string, noticia: NoticeI) {
    document.getElementById("detalle").style.right = "0";
    document.getElementById("detalle").style.display = "flex";
    document.getElementById("Stitle").innerHTML = title;
    document.getElementById("Ntitle").innerHTML = noticia.header.title;
    document.getElementById("dnimg").setAttribute("src", noticia.body.img);
    document.getElementById("dncontent").innerText = noticia.body.content;
    let tags = "";
    for (let i = 0; i < noticia.Categorys.length; i++) {
      tags += `<ion-chip class="Category" color="warning"><ion-label color="warning">${noticia.Categorys[i]}</ion-label></ion-chip>`;
    }
    document.getElementById("ntags").innerHTML = tags;
  }
  previewcontent() {
    let noticia="";
    
    for (let i = 0; i < this.sections.length; i++) {
      for (let j = 0; j < this.sections[i].noticias.length; j++) {
        noticia = this.sections[i].noticias[j].body.content;
        if (noticia.length > 245) {
          noticia = noticia.substr(0, 242) + "...";
          this.sections[i].noticias[j].body.preview= noticia;
        } else {
          this.sections[i].noticias[j].body.preview= noticia;
        }
      }
    }
  }
  buscar(){
    document.getElementById("Busqueda").style.display="flex";
    let barrabuscar=document.getElementsByTagName("input")[0].value;
    console.log("buscando:",barrabuscar);
    let resultados=[];
    let seccion={
      header:{
        Stitle:""
      },
      noticias:[]
    };
    for (let i = 0; i < this.allsections.length; i++) {
      seccion.header=this.allsections[i].header;
      this.allsections[i].noticias.forEach((notice)=>{
        let c=0;
        notice.Categorys.forEach((cat)=>{
          if(cat.toLowerCase().includes(barrabuscar.toLowerCase())==true){
            c++;
          }
        });
        if(c>0){
          seccion.noticias.push(notice);
        }
      });
      
      if(seccion.noticias.length>0){
        resultados.push(seccion);
        seccion={
          header:{
            Stitle:""
          },
          noticias:[]
        };
      }
    }
    //renderiza los resultados
    this.sections=resultados;
    console.log(resultados);
  }
  cerrarbusqueda(){
    //renderiza nuevamente todas las noticias
    this. sections= this.allsections;
    document.getElementById("Busqueda").style.display="none";
    document.getElementsByTagName("input")[0].value="";
  }

}
