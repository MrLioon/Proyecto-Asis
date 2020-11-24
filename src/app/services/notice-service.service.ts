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
    preview:string
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
            title: "Uruguay 0-2 Brasil: resumen, goles y resultado"
          },
          body: {
            preview:"",
            img: "https://as01.epimg.net/futbol/imagenes/2020/11/17/internacional/1605628830_306695_1605659271_noticia_normal.jpg",
            content: "Uruguay cayó 2-0 ante Brasil por la cuarta fecha de las Eliminatorias Qatar 2022 que se transmitió vía Movistar Deportes, VTV Uruguay y Caracol TV. Con goles de Arturo y Richarlison, el equipo de Tite sumó su cuarto triunfo consecutivo y es sólido líder con 12 unidades en la tabla de posiciones.'La selección de Uruguay, que hace cuatro días asestó un 0-3 a Colombia en Barranquilla, este martes probó de su propia medicina al caer en Montevideo por 0-2 ante una selección brasileña que no conoce de fracasos en las eliminatorias sudamericanas del Mundial y en cuatro salidas ya suma doce puntos.'",
            imgSize: 3,
            contentSize: 9
          },
          Categorys: ["Futbol","Masculino","Fifa","Mundial","Deportes"
          ]

          
        },
        {
          header: {
            title: "LeBron James, un campeón con todas las letras"
          },
          body: {
            preview:"",
            img: "https://bolavip.com/__export/1602470482259/sites/bolavip/img/2020/10/11/lebron_james_y_su_titulo_con_los_lakers_crop1602470292487.png_423682103.png",
            content: "Ser campeón con tres equipos diferentes es cosa de muy pocos. Hacerlo con su impacto es realmente único. La consagración de LeBron James con Los Angeles Lakers, venciendo 4-2 a los Miami Heat en unas Finales que otra vez lo vieron como el MVP, no hace más que ratificar que su lugar está bien arriba en el Olimpo de gigantes, no sólo por lo maravilloso que es dentro de la cancha, sino por un legado que rompe todo tipo de fronteras.",
          },
          Categorys: ["Baloncesto","Masculino","NBA","Lakers","Deportes"
          ]
        }


      ]
    },
    {
      header: { Stitle: "Entretenimiento" },
      noticias: [
        {
          header: {
            title: "American Music Awards 2020: estos son los ganadores"
          },
          body: {
            preview:"",
            img: "https://www.informador.mx/__export/1606094366369/sites/elinformador/img/2020/11/22/befunky-collagex29x_crop1606094141397.jpg_1034156727.jpg",
            content: "Los American Music Awards se transmitieron en vivo el domingo por la noche y algunos de los nombres más importantes de la música en Estados Unidos se llevaron premios a casa.Taraji P. Henson presentó la ceremonia desde el Microsoft Theatre en Los Ángeles y, con los protocolos por el covid-19 implementados, el espectáculo tuvo múltiples actuaciones en vivo, presentadores en persona e incluso una pequeña audiencia.The Weeknd y Roddy Ricch encabezaron el evento con ocho nominaciones cada uno. Justin Bieber y Shawn Mendes abrieron el show con su nuevo sencillo, «Monster». Bieber también interpretó dos de sus exitosos sencillos, «Lonely» y «Holy».Katy Perry subió al escenario por primera vez desde que se convirtió en madre y cantó «Only Love» con Darius Rucker. Megan Thee Stallion también tuvo una actuación destacada.",
            imgSize: 3,
            contentSize: 9
          },
          Categorys: ["Musica","POP","Colombia","Entretenimiento","Premios","America"
          ]
        },
        {
          header: {
            title: "Black Friday 2020 en GAME: las mejores ofertas en videojuegos y consolas"
          },
          body: {
            preview:"",
            img: "https://bolavip.com/export/sites/bolavip/img/2020/09/30/marvel-spiderman-trajes.jpg_1543673193.jpg",
            content: "Del 23 al 30 de noviembre, la cadena de tiendas rebaja decenas de juegos y consolas: PS4, Xbox One, Nintendo Switch. Repasamos las más destacadas.GAME ha arrancado sus ofertas del Black Friday 2020. En un año especialmente particular donde la venta online va a ser la opción principal por la mayoría de consumidores, la conocida cadena de videojuegos de España aplica del 23 al 30 de noviembre descuentos en cientos de productos, tanto en pack de consolas como en videojuegos, películas, teléfonos móviles y tarjetas de servicios como PS Plus o PS Now. Repasamos las mejores opciones.La web de GAME se ha cubierto de negro con motivo del Black Friday, tal como podéis ver en su apartado dedicado a promociones, pero por nuestra parte vamos a recomendaros una lista de ofertas que consideramos de bastante interés para que podáis completar vuestras colecciones de juegos de Nintendo Switch, Xbox One o PS4 (estas dos últimas con su catálogo retrocompatible en Xbox Series X|S y PS5). Asimismo, packs de consola más juegos con los que ahorrarnos en ocasiones más incluso de lo que cuesta dicho título por separado.",
          },
          Categorys: ["Ofertas","Videojuegos","Temporada","Consolas","Pc","Spiderman","Entretenimiento"
          ]
        },
        {
          header: {
            title: "HAIKYUU!! To The TOP publicó un nuevo teaser tráiler"
          },
          body: {
            preview:"",
            img: "https://www.animefagos.com/wp-content/uploads/2019/12/haikyunuevoanime03.jpg",
            content: "El canal de YouTube oficial de TOHO Animation publicó un nuevo teaser tráiler de la segunda parte del anime Haikyuu!! To The Top. Esta segunda mitad del anime se estrenó el pasado 2 de octubre en Japón, mientras que, la primera llegó en enero de este 2020.Haikyuu!! To The Top contará con 12 capítulos en esta segunda parte y estará disponible, al igual que su primera parte, en Crunchyroll. La primera parte contó con 13 episodios y ambas fueron animadas por los estudios Production I.G.Haikyuu!! Lleva publicando su manga en las páginas de la Weekly Shonen Jump desde 2012 y finalizará tras 44 tomos recopilatorios publicados. La franquicia estrenó su anime en 2014 y actualmente se encuentra en emisión la cuarta temporada de la adaptación.",
          },
          Categorys: ["Anime","Entretenimiento","Voleibol","Production I.G.","Deportes"   
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

