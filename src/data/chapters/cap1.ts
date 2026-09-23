import type { Chapter } from '../types';

export const capitulo1: Chapter = {
  id: 'cap1',
  number: 1,
  title: 'La Frontera Vertical',
  subtitle: 'Colchane · Alto Hospicio',
  protagonist: 'Amaru',
  location: 'Frontera Chile-Bolivia',
  theme: 'Movilidad y frontera',
  estimatedMinutes: 20,
  visual: {
    cover: '/imagenes/portadas/cap1-portada.jpg',
    palette: 'sunset',
  },
  pages: [
    {
      id: 'cap1-p1',
      layout: 'featured',
      panels: [
        {
          id: 'cap1-p1-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap1/07-cordillera.jpg',
          imageAlt: 'Cordillera de los Andes vista desde el altiplano al amanecer',
          caption: 'Altiplano andino · 4:00 AM',
          narration:
            'La cordillera respira como un animal antiguo. Bajo este cielo, el mas limpio del mundo, no hay ruido humano. Solo el viento. Solo el frio que se mete por las mangas, por el cuello, por los tobillos. Solo el silencio, que tambien pesa.',
        },
      ],
    },
    {
      id: 'cap1-p2',
      layout: 'featured',
      panels: [
        {
          id: 'cap1-p2-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap1/08-paso-fronterizo.jpg',
          imageAlt: 'Paso fronterizo Visviri al amanecer',
          caption: 'Paso Visviri · 4:30 AM',
          narration:
            'A lo lejos, cuatro luces amarillas. Un reten. Amaru las mira sin pestanear. Su abuela le dijo una vez que la frontera no es una linea: es una herida que se abre y se cierra todos los dias. Y el, ahora, la esta cruzando.',
        },
      ],
    },
    {
      id: 'cap1-p3',
      layout: 'full-panel',
      panels: [
        {
          id: 'cap1-p3-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap1/01-frontera-noche.jpg',
          imageAlt: 'Puesto fronterizo militar nocturno en los Andes',
          caption: 'Reten militar · 4:45 AM',
          narration:
            'Amaru ajusta la manta sobre los hombros. Respira hondo. En el bolsillo derecho, los dedos tocan la semilla. Esta ahi. Sigue ahi. A partir de este momento, cada paso cuenta.',
        },
      ],
    },
    {
      id: 'cap1-p4',
      layout: 'grid-2',
      panels: [
        {
          id: 'cap1-p4-panel1',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap1/02-amaru-rostro.jpg',
          imageAlt: 'Retrato de Amaru, joven aymara de 24 anos',
          narration:
            'En el bolsillo derecho, envuelta en un pedazo de tela, la semilla de quinoa. Su abuela se la puso en la mano la ultima manana, sin explicaciones. Solo dijo: "Donde la plantes, echaras raices".',
          narrativeBoxes: [
            {
              text: 'Donde la plantes, echaras raices.',
              position: 'bottom-left',
              style: 'quote',
            },
          ],
        },
        {
          id: 'cap1-p4-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap1/12-semilla.jpg',
          imageAlt: 'Semilla dorada de quinoa brotando entre grietas',
          caption: 'La semilla',
          narration:
            'Es pequena. Dorada. Podria perderse entre los dedos sin dejar rastro. Pero pesa. Pesa como el lago Titicaca, como el patio de la casa, como los ojos de su abuela la ultima vez que lo vio.',
        },
      ],
    },
    {
      id: 'cap1-p5',
      layout: 'featured',
      panels: [
        {
          id: 'cap1-p5-panel1',
          type: 'dialogue',
          layout: 'full',
          image: '/imagenes/cap1/03-coyote.jpg',
          imageAlt: 'Hombre de 45 anos con sombrero, mirada calculadora',
          narration:
            'El hombre lo mira sin apuro. Sonrie con el cigarro entre los dientes. "Buscas cruzar? Yo te ayudo. Tiene un costo." Su voz es aceitosa, de esas que se pegan. Sus ojos no sonrien.',
        },
      ],
    },
    {
      id: 'cap1-p6',
      layout: 'full-panel',
      panels: [
        {
          id: 'cap1-p6-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap1/04-amaru-solo.jpg',
          imageAlt: 'Amaru caminando solo en el desierto',
          narration:
            'Amaru piensa. Hay caminos que se pagan con dinero y caminos que se pagan con miedo. Y hay caminos, los mas raros, que se pagan con paciencia. Ninguno es gratis. Todos dejan marca.',
          decisionId: 'd1',
        },
      ],
    },
    {
      id: 'cap1-p7',
      layout: 'featured',
      panels: [
        {
          id: 'cap1-p7-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap1/05-grupo-migrantes.jpg',
          imageAlt: 'Grupo de 6 familias migrantes alrededor de una olla comun',
          caption: 'Camino a Chile · 6:45 AM',
          narration:
            'Un grupo de familias camina sin hablar. Una mujer le pasa la botella de agua a un viejo. Un nino comparte el pan con otro. Nadie dice nada. La comunidad, a veces, es esto: un gesto, una botella, un pan partido en dos.',
        },
      ],
    },
    {
      id: 'cap1-p8',
      layout: 'featured',
      panels: [
        {
          id: 'cap1-p8-panel1',
          type: 'close-up',
          layout: 'full',
          image: '/imagenes/cap1/11-manos.jpg',
          imageAlt: 'Manos oscuras entrelazadas con cadenas rotas',
          narration:
            'Las manos se entrelazan. Son manos que no se conocen, manos que quiza no se vuelvan a ver. Pero ahora, en este paso, son las unicas manos disponibles. Quien camina solo llega mas rapido. Quien camina acompanado, llega mas lejos.',
        },
      ],
    },
    {
      id: 'cap1-p9',
      layout: 'featured',
      panels: [
        {
          id: 'cap1-p9-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap1/09-olla-comun.jpg',
          imageAlt: 'Olla comun en patio compartido del campamento',
          caption: 'Olla comun · 11:30 AM',
          narration:
            'La olla comun hierve desde temprano. Lo poco que hay, se reparte: un plato para cada familia, sin importar cuantos trajeron. Asi se sobrevive cuando no hay nada. No con lo que se tiene. Con lo que se comparte.',
        },
      ],
    },
    {
      id: 'cap1-p10',
      layout: 'featured',
      panels: [
        {
          id: 'cap1-p10-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap1/10-llegada-alto-hospicio.jpg',
          imageAlt: 'Llegada a Alto Hospicio al atardecer',
          caption: 'Alto Hospicio · 7:45 PM',
          narration:
            'El atardecer pinta el cerro de naranja y polvo. Alto Hospicio: miles de casas de madera, todas colgadas de la misma ladera, todas con las mismas lonas azules en el techo. Aqui empieza otra vida. Aqui, tambien, empieza el olvido.',
        },
      ],
    },
    {
      id: 'cap1-p11',
      layout: 'featured',
      panels: [
        {
          id: 'cap1-p11-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap1/06-campamento.jpg',
          imageAlt: 'Vista panoramica de Alto Hospicio al atardecer',
          caption: 'Campamento Renacer · 8:00 PM',
          narration:
            'El campamento huele a tierra mojada, a lena humeda, a comida que no alcanza pero se comparte. Amaru deja la mochila en el suelo de tierra. Este es, por ahora, su hogar. Manana veremos.',
        },
      ],
    },
    {
      id: 'cap1-p12',
      layout: 'featured',
      panels: [
        {
          id: 'cap1-p12-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap1/15-raices.jpg',
          imageAlt: 'Raices de arbol entrelazadas bajo tierra',
          caption: 'Epilogo',
          narration:
            'Esa noche, cuando todos duermen, Amaru cava un hueco con las manos en un rincon del patio. Deposita la semilla. La cubre con tierra mojada. No sabe si germinara —el desierto no perdona—. Pero sabe que las raices, cuando encuentran tierra, siempre encuentran la forma.',
        },
      ],
    },
  ],
  decisions: [
    {
      id: 'd1',
      question: 'Que camino toma Amaru?',
      context: 'La frontera se abre en tres direcciones. Ninguna es segura.',
      options: [
        {
          id: 'd1a',
          label: 'A',
          text: 'Aceptar la ayuda del desconocido',
          consequence:
            'El coyote lo lleva por un paso peligroso. Amaru llega, pero endeudado y con miedo. Aprende que hay favores que hipotecan la libertad. Y que el miedo, a diferencia de la deuda, no se paga con dinero.',
          pedagogicalTag: 'Trafico ilicito / deuda',
        },
        {
          id: 'd1b',
          label: 'B',
          text: 'Rechazar y buscar otra ruta',
          consequence:
            'Amaru camina solo durante horas. Encuentra un camino alternativo, pero llega exhausto. Descubre que la autonomia tiene un costo fisico. Y que a veces, caminar solo es la unica forma de seguir siendo uno mismo.',
          pedagogicalTag: 'Autonomia migrante',
        },
        {
          id: 'd1c',
          label: 'C',
          text: 'Unirse a otros migrantes',
          consequence:
            'Un grupo de familias lo invita a caminar juntos. Comparten agua, pan y silencios. Amaru entiende que la comunidad es tambien un modo de cruzar. Y que las manos prestadas, a veces, sostienen mas que las propias.',
          pedagogicalTag: 'Malungaje / comunidad en transito',
        },
      ],
    },
  ],
};