import type { Chapter } from '../types';

export const capitulo3: Chapter = {
  id: 'cap3',
  number: 3,
  title: 'Las Raices Cruzan la Cordillera',
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
            'Hay tierras que no se dejan. Paisajes que uno lleva en la sangre, aunque viva a mil kilometros de distancia, aunque pasen veinte anos, aunque uno ya no se acuerde de las palabras. Killa crecio entre estas montanas. Cada vez que las piensa, le duele el pecho.',
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
            'Killa tiene veinticinco anos. Sus manos aprendieron a tejer antes que a escribir. Su abuela le puso el primer telar en las rodillas cuando tenia cinco. Le enseno que cada hilo cuenta una historia, y que las historias no se cortan aunque uno cruce fronteras. Los hilos, si uno los cuida, siguen unidos por debajo de la tierra.',
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
            'Hilos rojos como la tierra del altiplano. Azules como el lago Titicaca, el lago mas alto del mundo. Amarillos como el sol de las cuatro de la tarde. Verdes como el valle donde enterraron a su abuelo. Cada color es un lugar. Cada tejido, un mapa.',
        },
        {
          id: 'cap3-p3-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap3/04-killa-rostro.jpg',
          imageAlt: 'Retrato de Killa, mujer aymara de 25 anos, mirada serena',
          caption: 'Killa',
          narration:
            'En su rostro conviven dos paises. En su acento, dos lenguas: el castellano de la escuela, el aymara de la casa. En su corazon, dos hogares que nunca terminan de acomodarse. Por eso teje. Para que algo, al menos algo, se quede quieto.',
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
          imageAlt: 'Mujer joven mirando su telefono con expresion preocupada',
          caption: 'Llamada desde Bolivia · 10:30 AM',
          narration:
            'El telefono suena a media manana. Es su madre. La abuela esta enferma, dice, con esa voz que se quiebra cuando ya no hay nada que hacer. "Quiere verte", dice. Killa mira el telar a medio terminar. Mira la pieza, el alquiler, el trabajo de manana. Mira el telefono. Y siente que la cordillera, otra vez, se le viene encima.',
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
          imageAlt: 'Mujer mayor hablando por telefono, con preocupacion en el rostro',
          dialogues: [
            {
              id: 'd3-1',
              character: 'Madre',
              text: 'Killa, la abuela pregunta por ti todos los dias. Dice que su sueno es verte tejer una vez mas.',
              position: 'top-left',
              style: 'speech',
            },
          ],
          narration:
            'Las palabras de su madre pesan como piedras. Killa no sabe que responder. Volver significa dejar su taller, su pieza, su trabajo, las mujeres de la feria que se han vuelto su familia. Quedarse significa dejar ir a su abuela sin despedirse, sin sentir otra vez entre sus dedos el hilo que ella le enseno a tensar.',
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
            'Killa piensa. Toda su vida ha estado cruzando fronteras: las del pais, las del idioma, las del corazon. Pero esta decision es distinta. Esta vez, cruzar significa volver. Y volver, para alguien que se fue, casi nunca es lo que uno imagina.',
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
            'Esa tarde, Killa va a la feria. Mujeres de Bolivia, Peru, Colombia y Haiti venden sus artesanias. Los colores llenan la plaza. Cada puesto es una historia que cruzo una frontera. Y cada historia, cuando se cuenta, alivia un poco el peso.',
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
            'Manos que aprendieron a tejer en Bolivia. Manos que hoy tejen en Chile. Las manos no olvidan de donde vienen, aunque el cuerpo viva en otro lado. Las manos, a veces, son mas fieles que la memoria.',
        },
        {
          id: 'cap3-p8-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap3/10-mujeres-feria.jpg',
          imageAlt: 'Grupo de mujeres artesanas compartiendo en la feria',
          caption: 'Las companeras',
          narration:
            'En la feria, Killa encuentra algo que no sabia que buscaba: otras mujeres que tambien viven entre dos mundos. Ninguna esta completa. Todas estan tejiendo su manera de estar aqui. Y en ese tejido colectivo, quiza, hay un pais que todavia no tiene nombre.',
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
          imageAlt: 'Killa con expresion de decision, mirando su telar',
          narration:
            'Killa decide tejer un textil nuevo. Uno que no sea solo boliviano ni solo chileno. Uno que muestre las dos cordilleras, los dos cielos, los dos mares. Un textil que sea ella: entera, sin tener que elegir. Porque elegir, al final, es siempre una forma de perder algo.',
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
          imageAlt: 'Textil tradicional con colores de ambos paises, tejido sobre telar',
          caption: 'Epilogo · 9:00 PM',
          narration:
            'Esa noche, Killa termina el textil. En el centro, una montana. A los lados, hilos rojos y azules entrelazados. Cuando lo mire su abuela, entendera todo sin que nadie le explique. Porque las raices no se cortan cuando uno migra. Se estiran, se entrelazan, siguen nutriendo. Aunque uno no lo sepa. Aunque uno no lo vea.',
        },
      ],
    },
  ],
  decisions: [
    {
      id: 'd3-1',
      question: 'Que decide Killa?',
      context: 'Su abuela esta enferma en Bolivia. Su vida esta construida en Chile.',
      options: [
        {
          id: 'd3-1a',
          label: 'A',
          text: 'Volver a Bolivia para acompanar a su abuela',
          consequence:
            'Killa viaja. Pasa tres semanas junto a su abuela. Le ensena a tejer a su sobrina, con las mismas palabras que su abuela le dijo a ella. Vuelve a Chile distinta: con una raiz mas profunda y una pena mas clara. Aprende que volver tambien es migrar.',
          pedagogicalTag: 'Retorno temporal / cuidado intergeneracional',
        },
        {
          id: 'd3-1b',
          label: 'B',
          text: 'Quedarse en Chile y llamarla todos los dias',
          consequence:
            'Killa se queda. Llama cada manana antes del taller. La abuela muere tres meses despues, en paz, con la voz de Killa en el oido. Killa aprende que el dueno del tiempo no es uno: el tiempo tambien migra, y a veces llega antes de que uno este listo.',
          pedagogicalTag: 'Duelo a distancia / presencia mediada',
        },
        {
          id: 'd3-1c',
          label: 'C',
          text: 'Traer a su abuela a Chile, si su salud lo permite',
          consequence:
            'Killa inicia los tramites. Es lento, burocratico, agotador. Pero su abuela llega. Conoce a sus bisnietos. Conoce el mar, que nunca habia visto. Muere en Chile, en una pieza humilde pero rodeada de los suyos. Aprende que a veces traer es tambien una forma de volver.',
          pedagogicalTag: 'Reagrupacion familiar / migracion de mayores',
        },
      ],
    },
    {
      id: 'd3-2',
      question: 'Como teje Killa su identidad?',
      context: 'La feria la confronta con preguntas sobre su pertenencia.',
      options: [
        {
          id: 'd3-2a',
          label: 'A',
          text: 'Tejer solo con tecnicas aymaras tradicionales',
          consequence:
            'Killa se afirma en su herencia. Sus tejidos son reconocidos, admirados, exhibidos en ferias y museos. Pero tambien siente que algo de ella queda afuera: la parte que aprendio a querer en Chile, la parte que ya no es del todo aymara.',
          pedagogicalTag: 'Afirmacion cultural / tradicion viva',
        },
        {
          id: 'd3-2b',
          label: 'B',
          text: 'Fusionar tecnicas aymaras con disenos chilenos',
          consequence:
            'Killa crea algo nuevo. Los criticos tradicionalistas la cuestionan: dicen que traiciona la tradicion. Los jovenes la celebran. Aprende que la autenticidad no es pureza, sino fidelidad a una misma. Y que la fidelidad, a veces, incomoda a todos.',
          pedagogicalTag: 'Creolizacion / identidad hibrida',
        },
        {
          id: 'd3-2c',
          label: 'C',
          text: 'Ensenar a otras mujeres migrantes a tejer',
          consequence:
            'Killa abre un taller. Mujeres de distintos paises aprenden juntas. Sus tejidos viajan a ferias internacionales, firmados con el nombre del colectivo. La identidad deja de ser un problema individual y se vuelve una practica compartida.',
          pedagogicalTag: 'Pedagogia del oficio / comunidad de practica',
        },
      ],
    },
  ],
};