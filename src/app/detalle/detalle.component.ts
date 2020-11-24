import { Component, OnInit } from '@angular/core';
import {NoticeServiceService} from '../services/notice-service.service'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  constructor(private noticeService:NoticeServiceService) { }

  ngOnInit() {}
  cerrardetalle(){
    document.getElementById("detalle").style.right="-100vw";
    document.getElementById("detalle").style.display="none";

  }
}
