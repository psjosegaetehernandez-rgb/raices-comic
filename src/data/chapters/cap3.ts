import type { Chapter } from '../types';

export const capitulo3: Chapter = {
  id: 'cap3',
  number: 3,
  title: 'Las Raíces Cruzan la Cordillera',
  subtitle: 'Bolivia · Alto Hospicio',
  protagonist: 'Killa',
  location: 'Entre Bolivia y Chile',
  theme: 'Identidad y transnacionalismo',
  estimatedMinutes: 18,
  visual: {
    cover: '/imagenes/portadas/cap3-portada.jpg',
    palette: 'field',
  },
  pages: [
    {
      id: 'cap3-p1',
      layout: 'featured',
      panels: [
        {
          id: 'cap3-p1-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap3/01-altiplano-bolivia.jpg',
          imageAlt: 'Altiplano andino con lagunas de sal y flamencos al amanecer',
          caption: 'Altiplano boliviano · 5:00 AM',
          narration:
            'Hay tierras que no se dejan. Paisajes que uno lleva en la sangre, aunque viva a mil kilómetros de distancia. Killa creció entre estas montañas.',
        },
      ],
    },
    {
      id: 'cap3-p2',
      layout: 'featured',
      panels: [
        {
          id: 'cap3-p2-panel1',
          type: 'close-up',
          layout: 'full',
          image: '/imagenes/cap3/02-killa-telar.jpg',
          imageAlt: 'Mujer aymara joven tejiendo en un telar tradicional de colores',
          caption: 'Taller en Alto Hospicio · 8:00 AM',
          narration:
            'Killa tiene veinticinco años. Sus manos aprendieron a tejer antes que a escribir. Su abuela le enseñó que cada hilo cuenta una historia, y que las historias no se cortan aunque uno cruce fronteras.',
        },
      ],
    },
    {
      id: 'cap3-p3',
      layout: 'grid-2',
      panels: [
        {
          id: 'cap3-p3-panel1',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap3/03-hilos-colores.jpg',
          imageAlt: 'Primer plano de hilos multicolores sobre un telar',
          caption: 'Los hilos',
          narration:
            'Hilos rojos como la tierra. Azules como el lago Titicaca. Amarillos como el sol del altiplano. Cada color es un lugar. Cada tejido, un mapa.',
        },
        {
          id: 'cap3-p3-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap3/04-killa-rostro.jpg',
          imageAlt: 'Retrato de Killa, mujer aymara de 25 años, mirada serena',
          caption: 'Killa',
          narration:
            'En su rostro conviven dos países. En su acento, dos lenguas. En su corazón, dos hogares que nunca terminan de acomodarse.',
        },
      ],
    },
    {
      id: 'cap3-p4',
      layout: 'featured',
      panels: [
        {
          id: 'cap3-p4-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap3/05-celular-abuela.jpg',
          imageAlt: 'Mujer joven mirando su teléfono con expresión preocupada',
          caption: 'Llamada desde Bolivia · 10:30 AM',
          narration:
            'El teléfono suena. Es su madre. La abuela está enferma. "Quiere verte", dice. Killa mira el telar a medio terminar. Mira la pieza. Mira el teléfono.',
        },
      ],
    },
    {
      id: 'cap3-p5',
      layout: 'featured',
      panels: [
        {
          id: 'cap3-p5-panel1',
          type: 'dialogue',
          layout: 'full',
          image: '/imagenes/cap3/06-madre-telefono.jpg',
          imageAlt: 'Mujer mayor hablando por teléfono, con preocupación en el rostro',
          dialogues: [
            {
              id: 'd3-1',
              character: 'Madre',
              text: 'Killa, la abuela pregunta por ti todos los días. Dice que su sueño es verte tejer una vez más.',
              position: 'top-left',
              style: 'speech',
            },
          ],
          narration:
            'Las palabras de su madre pesan como piedras. Killa no sabe qué responder. Volver significa dejar su taller, su pieza, su trabajo. Quedarse significa dejar ir a su abuela sin despedirse.',
        },
      ],
    },
    {
      id: 'cap3-p6',
      layout: 'featured',
      panels: [
        {
          id: 'cap3-p6-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap3/07-killa-pensativa.jpg',
          imageAlt: 'Mujer joven pensativa mirando por la ventana',
          narration:
            'Killa piensa. Toda su vida ha estado cruzando fronteras: las del país, las del idioma, las del corazón. Pero esta decisión es distinta. Esta vez, cruzar significa volver.',
          decisionId: 'd3-1',
        },
      ],
    },
    {
      id: 'cap3-p7',
      layout: 'featured',
      panels: [
        {
          id: 'cap3-p7-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap3/08-feria-artesanas.jpg',
          imageAlt: 'Feria de artesanas migrantes en una plaza, con textiles coloridos colgados',
          caption: 'Feria de Artesanas Migrantes · 4:00 PM',
          narration:
            'Esa tarde, Killa va a la feria. Mujeres de Bolivia, Perú, Colombia y Haití venden sus artesanías. Los colores llenan la plaza. Cada puesto es una historia que cruzó una frontera.',
        },
      ],
    },
    {
      id: 'cap3-p8',
      layout: 'grid-2',
      panels: [
        {
          id: 'cap3-p8-panel1',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap3/09-manos-tejiendo.jpg',
          imageAlt: 'Manos de mujer tejiendo con hilos multicolores',
          caption: 'El oficio',
          narration:
            'Manos que aprendieron a tejer en Bolivia. Manos que hoy tejen en Chile. Las manos no olvidan de dónde vienen, aunque el cuerpo viva en otro lado.',
        },
        {
          id: 'cap3-p8-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap3/10-mujeres-feria.jpg',
          imageAlt: 'Grupo de mujeres artesanas compartiendo en la feria',
          caption: 'Las compañeras',
          narration:
            'En la feria, Killa encuentra algo que no sabía que buscaba: otras mujeres que también viven entre dos mundos. Ninguna está completa. Todas están tejiendo su manera de estar aquí.',
        },
      ],
    },
    {
      id: 'cap3-p9',
      layout: 'featured',
      panels: [
        {
          id: 'cap3-p9-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap3/11-killa-decision.jpg',
          imageAlt: 'Killa con expresión de decisión, mirando su telar',
          narration:
            'Killa decide tejer un textil nuevo. Uno que no sea solo boliviano ni solo chileno. Uno que muestre las dos cordilleras, los dos cielos, los dos mares. Un textil que sea ella: entera, sin tener que elegir.',
          decisionId: 'd3-2',
        },
      ],
    },
    {
      id: 'cap3-p10',
      layout: 'featured',
      panels: [
        {
          id: 'cap3-p10-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap3/12-textil-dos-paises.jpg',
          imageAlt: 'Textil tradicional con colores de ambos países, tejido sobre telar',
          caption: 'Epílogo · 9:00 PM',
          narration:
            'Esa noche, Killa termina el textil. En el centro, una montaña. A los lados, hilos rojos y azules entrelazados. Cuando lo mire su abuela, entenderá todo. Las raíces no se cortan cuando uno migra. Se estiran, se entrelazan, siguen nutriendo.',
        },
      ],
    },
  ],
  decisions: [
    {
      id: 'd3-1',
      question: '¿Qué decide Killa?',
      context: 'Su abuela está enferma en Bolivia. Su vida está construida en Chile.',
      options: [
        {
          id: 'd3-1a',
          label: 'A',
          text: 'Volver a Bolivia para acompañar a su abuela',
          consequence:
            'Killa viaja. Pasa tres semanas junto a su abuela. Le enseña a tejer a su sobrina. Vuelve a Chile distinta: con una raíz más profunda y una pena más clara.',
          pedagogicalTag: 'Retorno temporal / cuidado intergeneracional',
        },
        {
          id: 'd3-1b',
          label: 'B',
          text: 'Quedarse en Chile y llamarla todos los días',
          consequence:
            'Killa se queda. Llama cada mañana. La abuela muere tres meses después, en paz. Killa aprende que el dueño del tiempo no es uno: el tiempo también migra.',
          pedagogicalTag: 'Duelo a distancia / presencia mediada',
        },
        {
          id: 'd3-1c',
          label: 'C',
          text: 'Traer a su abuela a Chile, si su salud lo permite',
          consequence:
            'Killa inicia los trámites. Es lento, burocrático, agotador. Pero su abuela llega. Conoce a sus bisnietos. Muere en Chile, en una pieza humilde pero rodeada de los suyos.',
          pedagogicalTag: 'Reagrupación familiar / migración de mayores',
        },
      ],
    },
    {
      id: 'd3-2',
      question: '¿Cómo teje Killa su identidad?',
      context: 'La feria la confronta con preguntas sobre su pertenencia.',
      options: [
        {
          id: 'd3-2a',
          label: 'A',
          text: 'Tejer solo con técnicas aymaras tradicionales',
          consequence:
            'Killa se afirma en su herencia. Sus tejidos son reconocidos, admirados, exhibidos. Pero también siente que algo de ella queda afuera.',
          pedagogicalTag: 'Afirmación cultural / tradición viva',
        },
        {
          id: 'd3-2b',
          label: 'B',
          text: 'Fusionar técnicas aymaras con diseños chilenos',
          consequence:
            'Killa crea algo nuevo. Los críticos tradicionalistas la cuestionan. Los jóvenes la celebran. Aprende que la autenticidad no es pureza, sino fidelidad a una misma.',
          pedagogicalTag: 'Creolización / identidad híbrida',
        },
        {
          id: 'd3-2c',
          label: 'C',
          text: 'Enseñar a otras mujeres migrantes a tejer',
          consequence:
            'Killa abre un taller. Mujeres de distintos países aprenden juntas. Sus tejidos viajan a ferias internacionales. La identidad se vuelve colectiva, no individual.',
          pedagogicalTag: 'Pedagogía del oficio / comunidad de práctica',
        },
      ],
    },
  ],
};