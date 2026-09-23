import type { Chapter } from '../types';

export const capitulo4: Chapter = {
  id: 'cap4',
  number: 4,
  title: 'El Color del Papel',
  subtitle: 'Santiago · Oficina de Extranjería',
  protagonist: 'Yusmary',
  location: 'Santiago de Chile',
  theme: 'Racialización e interseccionalidad',
  estimatedMinutes: 18,
  visual: {
    cover: '/imagenes/portadas/cap4-portada.jpg',
    palette: 'tierra',
  },
  pages: [
    {
      id: 'cap4-p1',
      layout: 'featured',
      panels: [
        {
          id: 'cap4-p1-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap4/01-oficina-extranjeria.jpg',
          imageAlt: 'Sala de espera de una oficina pública con personas haciendo fila',
          caption: 'Oficina de Extranjería · 9:15 AM',
          narration:
            'La sala huele a papel húmedo y a cansancio. Yusmary lleva cuarenta minutos esperando. En sus manos, una carpeta con documentos que no garantizan nada.',
        },
      ],
    },
    {
      id: 'cap4-p2',
      layout: 'grid-2',
      panels: [
        {
          id: 'cap4-p2-panel1',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap4/02-yusmary-rostro-v2.jpg',
          imageAlt: 'Retrato de Yusmary, mujer afrovenezolana de 40 años',
          caption: 'Yusmary',
          narration:
            'Yusmary tiene cuarenta años. Es contadora. Habla tres idiomas. Tiene dos títulos universitarios. Nada de eso aparece en la primera plana cuando entra a una oficina pública.',
        },
        {
          id: 'cap4-p2-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap4/03-carpeta-documentos.jpg',
          imageAlt: 'Primer plano de manos sosteniendo una carpeta con documentos',
          caption: 'La carpeta',
          narration:
            'Toda su vida cabe en una carpeta. Certificados, apostillas, títulos, partidas. Papeles que cuentan su historia, pero nunca del todo.',
        },
      ],
    },
    {
      id: 'cap4-p3',
      layout: 'featured',
      panels: [
        {
          id: 'cap4-p3-panel1',
          type: 'dialogue',
          layout: 'full',
          image: '/imagenes/cap4/04-funcionario.jpg',
          imageAlt: 'Funcionario público detrás de un mesón, con expresión distante',
          dialogues: [
            {
              id: 'd4-1',
              character: 'Funcionario',
              text: '¿De qué país dijiste que eras?',
              position: 'top-right',
              style: 'speech',
            },
          ],
          narration:
            'El tono no era pregunta. Era duda. Como si el país de Yusmary fuera una invención, un error en el formulario, una excepción que hay que verificar dos veces.',
        },
      ],
    },
    {
      id: 'cap4-p4',
      layout: 'featured',
      panels: [
        {
          id: 'cap4-p4-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap4/05-yusmary-mirada-v2.jpg',
          imageAlt: 'Yusmary mirando al frente con expresión contenida',
          narration:
            'Yusmary siente la rabia subir. La conoce. La ha sentido antes, en el colegio, en la universidad, en la calle. Es una rabia vieja, heredada, que no se explica en un formulario.',
        },
      ],
    },
    {
      id: 'cap4-p5',
      layout: 'featured',
      panels: [
        {
          id: 'cap4-p5-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap4/06-yusmary-decision-v2.jpg',
          imageAlt: 'Yusmary con expresión de decisión, sosteniendo la carpeta',
          narration:
            'Hay tres formas de responder. Yusmary las conoce todas. Las ha ensayado frente al espejo, en la ducha, en las noches de insomnio. Ahora tiene que elegir.',
          decisionId: 'd4-1',
        },
      ],
    },
    {
      id: 'cap4-p6',
      layout: 'featured',
      panels: [
        {
          id: 'cap4-p6-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap4/07-calle-santiago.jpg',
          imageAlt: 'Calle céntrica de Santiago con edificios altos y personas caminando',
          caption: 'Centro de Santiago · 11:30 AM',
          narration:
            'Afuera, Santiago sigue su ritmo. Edificios altos, autos, ejecutivos apurados. Adentro de Yusmary, otra ciudad: la de las preguntas que no se hacen en voz alta.',
        },
      ],
    },
    {
      id: 'cap4-p7',
      layout: 'featured',
      panels: [
        {
          id: 'cap4-p7-panel1',
          type: 'dialogue',
          layout: 'full',
          image: '/imagenes/cap4/08-companera-llamada.jpg',
          imageAlt: 'Mujer joven hablando por teléfono con preocupación',
          dialogues: [
            {
              id: 'd4-2',
              character: 'Compañera',
              text: 'Yusmary, ¿te dijeron algo otra vez? ¿Quieres que vayamos juntas?',
              position: 'top-left',
              style: 'speech',
            },
          ],
          narration:
            'Su compañera de trabajo la llama. Es chilena, joven, solidaria. Yusmary agradece, pero sabe que hay cosas que no se resuelven con acompañamiento. Hay preguntas que solo las entiende quien las ha recibido.',
        },
      ],
    },
    {
      id: 'cap4-p8',
      layout: 'grid-2',
      panels: [
        {
          id: 'cap4-p8-panel1',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap4/09-manos-escribiendo.jpg',
          imageAlt: 'Primer plano de manos escribiendo en un cuaderno',
          caption: 'El diario',
          narration:
            'Esa noche, Yusmary escribe. Escribe lo que no dijo. Las palabras que se quedaron en la garganta. Escribe para no olvidar. Escribe para no explotar.',
        },
        {
          id: 'cap4-p8-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap4/10-mujeres-reunion.jpg',
          imageAlt: 'Grupo de mujeres diversas reunidas compartiendo',
          caption: 'El colectivo',
          narration:
            'Al día siguiente, Yusmary va a una reunión de mujeres migrantes. Afrodescendientes, indígenas, mestizas. Todas con historias parecidas. Todas con rabias parecidas. Ninguna sola.',
        },
      ],
    },
    {
      id: 'cap4-p9',
      layout: 'featured',
      panels: [
        {
          id: 'cap4-p9-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap4/11-yusmary-colectivo-v2.jpg',
          imageAlt: 'Yusmary con expresión de determinación frente a otras mujeres',
          narration:
            'Yusmary entiende algo nuevo. La rabia no desaparece cuando se calla. Se transforma. Puede volverse enfermedad, silencio o acción. La decisión es suya: qué hacer con eso que arde.',
          decisionId: 'd4-2',
        },
      ],
    },
    {
      id: 'cap4-p10',
      layout: 'featured',
      panels: [
        {
          id: 'cap4-p10-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap4/12-yusmary-horizonte-v2.jpg',
          imageAlt: 'Yusmary caminando hacia el horizonte urbano, decidida',
          caption: 'Epílogo · 6:00 PM',
          narration:
            'Al atardecer, Yusmary camina por el centro. Ya no lleva la carpeta. Lleva otra cosa: una claridad nueva. El color del papel no la define. El color de su piel tampoco. Lo que la define es lo que decide hacer con todo eso.',
        },
      ],
    },
  ],
  decisions: [
    {
      id: 'd4-1',
      question: '¿Qué hace Yusmary frente al funcionario?',
      context: 'La pregunta "¿De qué país dijiste que eras?" flota en el aire.',
      options: [
        {
          id: 'd4-1a',
          label: 'A',
          text: 'Responder con calma y mostrar todos los documentos',
          consequence:
            'Yusmary respira hondo. Responde sin levantar la voz. El funcionario revisa los papeles, no sonríe, pero al menos no la humilla más. Aprende que la dignidad a veces se ejerce con paciencia.',
          pedagogicalTag: 'Resistencia cotidiana / dignidad silenciosa',
        },
        {
          id: 'd4-1b',
          label: 'B',
          text: 'Confrontar el racismo en voz alta',
          consequence:
            'Yusmary dice lo que piensa. El funcionario la mira con desprecio. El trámite queda "en revisión". Pero Yusmary no se arrepiente: por primera vez en mucho tiempo, no se mordió la lengua.',
          pedagogicalTag: 'Rabia justa / desobediencia civil',
        },
        {
          id: 'd4-1c',
          label: 'C',
          text: 'Sonreír, agradecer y salir',
          consequence:
            'Yusmary sonríe. El trámite sigue. Pero algo dentro de ella se apaga. Esa noche llora sin saber por qué. Aprende que el silencio también tiene costos que se pagan después.',
          pedagogicalTag: 'Autoabandono / costo emocional del silencio',
        },
      ],
    },
    {
      id: 'd4-2',
      question: '¿Cómo canaliza Yusmary su rabia?',
      context: 'En el colectivo de mujeres migrantes encuentra espacio para transformar lo que siente.',
      options: [
        {
          id: 'd4-2a',
          label: 'A',
          text: 'Escribir y publicar su testimonio',
          consequence:
            'Yusmary escribe un texto que circula en redes. Muchas mujeres se identifican. Algunas se enojan con ella. Descubre que nombrar el racismo incomoda tanto al que lo ejerce como al que lo tolera.',
          pedagogicalTag: 'Testimonio público / escritura como resistencia',
        },
        {
          id: 'd4-2b',
          label: 'B',
          text: 'Organizar un taller de formación para mujeres migrantes',
          consequence:
            'Yusmary coordina un taller sobre derechos y racialización. Mujeres de varios países participan. El taller se repite cada mes. La rabia se vuelve pedagogía.',
          pedagogicalTag: 'Pedagogía popular / formación colectiva',
        },
        {
          id: 'd4-2c',
          label: 'C',
          text: 'Entrar a militar en una organización antirracista',
          consequence:
            'Yusmary se suma a una organización antirracista. Participa en marchas, en cabildos, en mesas de trabajo. Aprende que la lucha es larga, pero ya no está sola en ella.',
          pedagogicalTag: 'Militancia antirracista / interseccionalidad',
        },
      ],
    },
  ],
};