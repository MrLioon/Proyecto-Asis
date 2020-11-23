import { Injectable } from '@angular/core';

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
@Injectable({
  providedIn: 'root'
})
export class NoticeServiceService {
  noticiasConfig = {
    imgSize: 3,
    contentSize: 9
  }

 
  secciones: Array<SectionsI> = [
    {
      header: { Stitle: "Deportes" },
      noticias: [
        {
          header: {
            title: "Futbol"
          },
          body: {
            img: "https://picsum.photos/200/300?random=1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
            imgSize: 3,
            contentSize: 9
          },
          Categorys: ["Futbol","Masculino","Fifa","Mundial"
          ]

          
        },
        {
          header: {
            title: "Baloncesto"
          },
          body: {
            img: "https://picsum.photos/200/300?random=2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
          },
          Categorys: ["Baloncesto","Masculino","NBA","lakers"
          ]
        }


      ]
    },
    {
      header: { Stitle: "Entretenimiento" },
      noticias: [
        {
          header: {
            title: "Musica"
          },
          body: {
            img: "https://picsum.photos/200/300?random=1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
            imgSize: 3,
            contentSize: 9
          },
          Categorys: ["Musica","POP","Colombia"
          ]
        },
        {
          header: {
            title: "Videojuegos"
          },
          body: {
            img: "https://picsum.photos/200/300?random=2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
          },
          Categorys: ["Shoter","Activition","ColdWar"
          ]
        },
        {
          header: {
            title: "Cine"
          },
          body: {
            img: "https://picsum.photos/200/300?random=2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
          },
          Categorys: ["Terror","ResisdetEvil","Capcom","Sony"   
          ]
        }

      ]
    },
    

  ]

  constructor() { }
 
  getconfig() {
    return this.noticiasConfig;
  }
  getSection() {
    
    return this.secciones;
  }
}

