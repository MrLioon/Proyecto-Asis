import { Component, OnInit } from '@angular/core';
import {NoticeServiceService} from '../services/notice-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  

  constructor(private NoticeService:NoticeServiceService) { 

  }

  noticiasConfig=this.NoticeService.getconfig();
  sections=this.NoticeService.getSection();

  ngOnInit() {

    console.log(this.noticiasConfig);
    console.log(this.sections);
    
  }

}
