import type { Chapter } from '../types';

export const capitulo4: Chapter = {
  id: 'cap4',
  number: 4,
  title: 'El Color del Papel',
  subtitle: 'Santiago · Oficina de Extranjeria',
  protagonist: 'Yusmary',
  location: 'Santiago de Chile',
  theme: 'Racializacion e interseccionalidad',
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
          imageAlt: 'Sala de espera de una oficina publica con personas haciendo fila',
          caption: 'Oficina de Extranjeria · 9:15 AM',
          narration:
            'La sala huele a papel humedo y a cansancio. A cloro. A gente que lleva horas esperando sin que nadie le diga cuanto falta. Yusmary lleva cuarenta minutos de pie, con una carpeta bajo el brazo. Los pies le duelen. Pero no se sienta: si se sienta, pierde el turno.',
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
          imageAlt: 'Retrato de Yusmary, mujer afrovenezolana de 40 anos',
          caption: 'Yusmary',
          narration:
            'Yusmary tiene cuarenta anos. Es contadora, habla tres idiomas, tiene dos titulos universitarios colgados en la pared de su pieza. Todo eso esta en los papeles. Nada de eso aparece en la cara del funcionario cuando levanta la vista y la ve.',
        },
        {
          id: 'cap4-p2-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap4/03-carpeta-documentos.jpg',
          imageAlt: 'Primer plano de manos sosteniendo una carpeta con documentos',
          caption: 'La carpeta',
          narration:
            'Toda su vida cabe en una carpeta plastificada. Certificados, apostillas, titulos, partidas, antecedentes, fotos carnet. Papeles que cuentan su historia, pero nunca del todo. Nunca lo suficiente. Nunca lo que el funcionario de turno quiere leer.',
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
          imageAlt: 'Funcionario publico detras de un meson, con expresion distante',
          dialogues: [
            {
              id: 'd4-1',
              character: 'Funcionario',
              text: 'De que pais dijiste que eras?',
              position: 'top-right',
              style: 'speech',
            },
          ],
          narration:
            'El tono no es pregunta. Es duda. Es sospecha disfrazada de tramite. Como si el pais de Yusmary fuera una invencion, un error en el formulario, una excepcion que hay que verificar dos veces antes de creer. Yusmary lo ha escuchado antes. Muchas veces. En el colegio, en la universidad, en la calle, en cada oficina publica donde ha puesto un pie.',
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
          imageAlt: 'Yusmary mirando al frente con expresion contenida',
          narration:
            'Yusmary siente la rabia subir, esa rabia vieja que aprendio a tragar desde nina. Una rabia que no se explica en un formulario. Una rabia que le enseño su madre, y su abuela, y todas las mujeres negras de su familia que tuvieron que sonreir para que no las echaran. Siente la rabia, la reconoce, la sostiene. Y no la suelta.',
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
          imageAlt: 'Yusmary con expresion de decision, sosteniendo la carpeta',
          narration:
            'Hay tres formas de responder. Yusmary las conoce todas, las ha ensayado frente al espejo, en la ducha, en las noches de insomnio. Callar. Confrontar. Sonreir. Cada una tiene un precio distinto. Pero ninguna sale gratis.',
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
          imageAlt: 'Calle centrica de Santiago con edificios altos y personas caminando',
          caption: 'Centro de Santiago · 11:30 AM',
          narration:
            'Afuera, Santiago sigue su ritmo. Edificios altos, autos, ejecutivos apurados con audifonos y cafe. Adentro de Yusmary, otra ciudad: la de las preguntas que no se hacen en voz alta. La de los pasillos de la memoria donde todavia resuena, cada tanto, esa frase: "de que pais dijiste que eras".',
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
          imageAlt: 'Mujer joven hablando por telefono con preocupacion',
          dialogues: [
            {
              id: 'd4-2',
              character: 'Companera',
              text: 'Yusmary, te dijeron algo otra vez? Quieres que vayamos juntas la proxima?',
              position: 'top-left',
              style: 'speech',
            },
          ],
          narration:
            'Su companera de trabajo la llama. Es chilena, joven, solidaria, con esa solidaridad facil de quien nunca ha tenido que demostrar que merece estar en una sala. Yusmary agradece. Pero sabe que hay cosas que no se resuelven con compania. Hay preguntas que solo entiende quien las ha recibido.',
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
            'Esa noche, Yusmary escribe. Escribe lo que no dijo. Las palabras que se quedaron en la garganta, en el pecho, en la punta de la lengua. Escribe para no olvidar. Escribe para no explotar. Escribe porque hay rabias que, si no salen por la mano, salen por la piel.',
        },
        {
          id: 'cap4-p8-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap4/10-mujeres-reunion.jpg',
          imageAlt: 'Grupo de mujeres diversas reunidas compartiendo',
          caption: 'El colectivo',
          narration:
            'Al dia siguiente, Yusmary va a una reunion de mujeres migrantes. Afrodescendientes, indigenas, mestizas. Todas con historias parecidas. Todas con rabias parecidas. Ninguna sola. Se miran y se reconocen. Y eso, solo eso, ya cambia algo en el aire.',
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
          imageAlt: 'Yusmary con expresion de determinacion frente a otras mujeres',
          narration:
            'Yusmary entiende algo nuevo. La rabia no desaparece cuando se calla. Se transforma. Se vuelve enfermedad, o silencio, o accion. La decision es suya: que hacer con eso que arde. Y por primera vez en muchos anos, siente que no esta sola en esa decision.',
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
          caption: 'Epilogo · 6:00 PM',
          narration:
            'Al atardecer, Yusmary camina por el centro. Ya no lleva la carpeta. Lleva otra cosa: una claridad nueva, fragil todavia, pero suya. El color del papel no la define. El color de su piel tampoco. Lo que la define es lo que decide hacer con todo eso. Y hoy, por primera vez, sabe que puede decidir.',
        },
      ],
    },
  ],
  decisions: [
    {
      id: 'd4-1',
      question: 'Que hace Yusmary frente al funcionario?',
      context: 'La pregunta "De que pais dijiste que eras?" flota en el aire.',
      options: [
        {
          id: 'd4-1a',
          label: 'A',
          text: 'Responder con calma y mostrar todos los documentos',
          consequence:
            'Yusmary respira hondo. Responde sin levantar la voz, mostrando cada papel en orden. El funcionario revisa, no sonrie, pero al menos no la humilla mas. Aprende que la dignidad, a veces, se ejerce con paciencia. Que no responder a la violencia no es aceptarla: es no darle el gusto.',
          pedagogicalTag: 'Resistencia cotidiana / dignidad silenciosa',
        },
        {
          id: 'd4-1b',
          label: 'B',
          text: 'Confrontar el racismo en voz alta',
          consequence:
            'Yusmary dice lo que piensa. Sin gritar, pero sin bajar los ojos. El funcionario la mira con desprecio y marca el tramite "en revision". El papeleo se alarga meses. Pero Yusmary no se arrepiente: por primera vez en mucho tiempo, no se mordio la lengua. Y eso, para ella, tiene un valor que ningun sello puede medir.',
          pedagogicalTag: 'Rabia justa / desobediencia civil',
        },
        {
          id: 'd4-1c',
          label: 'C',
          text: 'Sonreir, agradecer y salir',
          consequence:
            'Yusmary sonrie. Agradece. Sale. El tramite sigue su curso como si nada. Pero algo dentro de ella se apaga, un poco mas, como cada vez. Esa noche llora sin saber por que. Aprende que el silencio tambien tiene costos: se pagan despues, en cuotas, en la propia cama.',
          pedagogicalTag: 'Autoabandono / costo emocional del silencio',
        },
      ],
    },
    {
      id: 'd4-2',
      question: 'Como canaliza Yusmary su rabia?',
      context: 'En el colectivo de mujeres migrantes encuentra espacio para transformar lo que siente.',
      options: [
        {
          id: 'd4-2a',
          label: 'A',
          text: 'Escribir y publicar su testimonio',
          consequence:
            'Yusmary escribe un texto que circula en redes. Muchas mujeres se identifican, la buscan, la abrazan. Otras se enojan, dicen que exagera, que "no es para tanto". Descubre que nombrar el racismo incomoda tanto al que lo ejerce como al que lo tolera. Y que incomodar, a veces, es parte del trabajo.',
          pedagogicalTag: 'Testimonio publico / escritura como resistencia',
        },
        {
          id: 'd4-2b',
          label: 'B',
          text: 'Organizar un taller de formacion para mujeres migrantes',
          consequence:
            'Yusmary coordina un taller sobre derechos y racializacion. Mujeres de varios paises participan, aprenden, preguntan. El taller se repite cada mes. La rabia, poco a poco, se vuelve pedagogia. Y la pedagogia, cuando es colectiva, se vuelve poder.',
          pedagogicalTag: 'Pedagogia popular / formacion colectiva',
        },
        {
          id: 'd4-2c',
          label: 'C',
          text: 'Entrar a militar en una organizacion antirracista',
          consequence:
            'Yusmary se suma a una organizacion antirracista. Participa en marchas, en cabildos, en mesas de trabajo con el municipio. Aprende que la lucha es larga, mucho mas larga de lo que imaginaba. Pero ya no esta sola en ella. Y eso, en el fondo, lo cambia todo.',
          pedagogicalTag: 'Militancia antirracista / interseccionalidad',
        },
      ],
    },
  ],
};