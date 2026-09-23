import type { Chapter } from '../types';

export const capitulo2: Chapter = {
  id: 'cap2',
  number: 2,
  title: 'El Campamento que Respira',
  subtitle: 'Alto Hospicio · Campamento Renacer',
  protagonist: 'Tatiana',
  location: 'Campamento Renacer, Alto Hospicio',
  theme: 'Vivienda y comunidad',
  estimatedMinutes: 18,
  visual: {
    cover: '/imagenes/portadas/cap2-portada.jpg',
    palette: 'sunset',
  },
  pages: [
    {
      id: 'cap2-p1',
      layout: 'featured',
      panels: [
        {
          id: 'cap2-p1-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap2/01-amanecer-campamento.jpg',
          imageAlt: 'Amanecer sobre las casas de madera del campamento en el cerro',
          caption: 'Campamento Renacer · 6:15 AM',
          narration:
            'El campamento respira antes que la ciudad. A esta hora, el humo de las cocinas sube recto hacia el cielo. Tatiana ya esta despierta.',
        },
      ],
    },
    {
      id: 'cap2-p2',
      layout: 'grid-2',
      panels: [
        {
          id: 'cap2-p2-panel1',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap2/02-tatiana-rostro.jpg',
          imageAlt: 'Retrato de Tatiana, mujer colombiana de 38 anos',
          narration:
            'Tatiana tiene 38 anos y dos hijos. Llego hace catorce meses desde Cucuta. Antes tenia una casa con patio; ahora tiene un cuarto de madera y lona.',
        },
        {
          id: 'cap2-p2-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap2/03-hijos-durmiendo.jpg',
          imageAlt: 'Dos ninos durmiendo juntos en una cama pequena',
          caption: 'Los hijos',
          narration:
            'Sus hijos duermen uno junto al otro. En suenos, todavia caminan por las calles de su ciudad. Al despertar, aprenderan otra vez a estar aqui.',
        },
      ],
    },
    {
      id: 'cap2-p3',
      layout: 'featured',
      panels: [
        {
          id: 'cap2-p3-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap2/04-calle-campamento.jpg',
          imageAlt: 'Calle de tierra del campamento entre casas de madera',
          caption: 'Calle principal · 7:00 AM',
          narration:
            'La calle es de tierra. Cuando llueve, se vuelve barro. Cuando no llueve, se vuelve polvo. Pero es la calle donde viven todos los suenos que llegaron aqui.',
        },
      ],
    },
    {
      id: 'cap2-p4',
      layout: 'featured',
      panels: [
        {
          id: 'cap2-p4-panel1',
          type: 'dialogue',
          layout: 'full',
          image: '/imagenes/cap2/05-vecina-rosa.jpg',
          imageAlt: 'Vecina mayor conversando con Tatiana en la puerta de su casa',
          dialogues: [
            {
              id: 'd2-1',
              character: 'Dona Rosa',
              text: 'Tatiana, hay reunion hoy. Quieren hablar de la luz.',
              position: 'top-left',
              style: 'speech',
            },
          ],
          narration:
            'Dona Rosa lleva ocho anos en el campamento. Sabe todos los nombres, todos los dolores, todas las historias. Es la memoria viva del lugar.',
        },
      ],
    },
    {
      id: 'cap2-p5',
      layout: 'featured',
      panels: [
        {
          id: 'cap2-p5-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap2/06-asamblea.jpg',
          imageAlt: 'Vecinos reunidos en asamblea comunitaria al aire libre',
          caption: 'Asamblea · 11:00 AM',
          narration:
            'En el campamento, las decisiones se toman en asamblea. Voces distintas, cansadas y firmes, buscan ponerse de acuerdo. No siempre lo logran, pero siempre vuelven a intentarlo.',
        },
      ],
    },
    {
      id: 'cap2-p6',
      layout: 'featured',
      panels: [
        {
          id: 'cap2-p6-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap2/07-tatiana-pensativa.jpg',
          imageAlt: 'Tatiana sentada sola, pensativa, mirando el horizonte',
          narration:
            'Tatiana escucha. Hay quienes quieren organizarse para exigir al municipio. Hay quienes prefieren no moverse, por miedo a represalias. Ella entiende a los dos.',
          decisionId: 'd2-1',
        },
      ],
    },
    {
      id: 'cap2-p7',
      layout: 'featured',
      panels: [
        {
          id: 'cap2-p7-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap2/08-ollas-comunes.jpg',
          imageAlt: 'Varias mujeres cocinando juntas en ollas grandes al fuego',
          caption: 'Olla comun · 12:30 PM',
          narration:
            'El hambre se combate en comunidad. Cada semana, las mujeres del campamento cocinan juntas para todas las familias. Asi, ninguna queda sola frente a la olla vacia.',
        },
      ],
    },
    {
      id: 'cap2-p8',
      layout: 'grid-2',
      panels: [
        {
          id: 'cap2-p8-panel1',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap2/09-manos-cocinando.jpg',
          imageAlt: 'Manos de mujer cortando verduras sobre una mesa de madera',
          caption: 'El trabajo invisible',
          narration:
            'Las manos que cocinan son las mismas que cuidan, que limpian, que sostienen. Un trabajo que nadie ve, que nadie paga, pero que hace posible todo lo demas.',
        },
        {
          id: 'cap2-p8-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap2/10-ninos-comiendo.jpg',
          imageAlt: 'Ninos recibiendo platos de comida con sonrisas',
          caption: 'Los que comen',
          narration:
            'Los ninos reciben sus platos sonriendo. No saben que sus madres a veces no comen para que ellos si. Eso tambien es un modo de amar.',
        },
      ],
    },
    {
      id: 'cap2-p9',
      layout: 'featured',
      panels: [
        {
          id: 'cap2-p9-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap2/11-atardecer-hogar.jpg',
          imageAlt: 'Tatiana y sus hijos en la puerta de su casa al atardecer',
          caption: 'Al atardecer · 7:30 PM',
          narration:
            'Al anochecer, Tatiana mira la ciudad desde el cerro. Las luces de Antofagasta brillan abajo, cerca y lejanas. Su casa ahora es esta. No la que dejo, sino la que esta construyendo.',
          decisionId: 'd2-2',
        },
      ],
    },
    {
      id: 'cap2-p10',
      layout: 'featured',
      panels: [
        {
          id: 'cap2-p10-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap2/12-raices-nuevas.jpg',
          imageAlt: 'Ramas verdes brotando de troncos secos en el cerro',
          caption: 'Epilogo',
          narration:
            'En el campamento, la vida no se detiene. Brotan plantas entre el polvo, nacen ninos entre las lonas, se tejen redes donde antes habia nada. Raices nuevas, en tierra nueva.',
        },
      ],
    },
  ],
  decisions: [
    {
      id: 'd2-1',
      question: 'Tatiana debe decidir como participar en la asamblea',
      context: 'Las familias estan divididas entre organizarse y mantenerse en silencio.',
      options: [
        {
          id: 'd2-1a',
          label: 'A',
          text: 'Hablar a favor de la organizacion comunitaria',
          consequence:
            'Tatiana alza la voz. Su palabra pesa. Las familias se animan a organizarse. Aprenden que la union hace fuerza, aunque tambien atrae miradas incomodas.',
          pedagogicalTag: 'Organizacion popular / tejido comunitario',
        },
        {
          id: 'd2-1b',
          label: 'B',
          text: 'Escuchar en silencio y decidir despues',
          consequence:
            'Tatiana no habla. Escucha. Aprende los nombres, los miedos, las esperanzas. A veces la primera tarea es comprender antes de actuar.',
          pedagogicalTag: 'Escucha activa / cuidado del ritmo',
        },
        {
          id: 'd2-1c',
          label: 'C',
          text: 'Proponer una reunion aparte, solo entre mujeres',
          consequence:
            'Tatiana propone un espacio propio. Las mujeres del campamento se reunen por primera vez sin la mirada de los hombres. Hablan de lo que duele, de lo que suenan, de lo que temen.',
          pedagogicalTag: 'Feminismo comunitario / cuidado colectivo',
        },
      ],
    },
    {
      id: 'd2-2',
      question: 'Tatiana decide como sostener el cuidado de sus hijos',
      context: 'El trabajo, la escuela y la organizacion compiten por su tiempo.',
      options: [
        {
          id: 'd2-2a',
          label: 'A',
          text: 'Pedir ayuda a las vecinas para cuidar a los ninos',
          consequence:
            'Tatiana aprende a confiar. Deja a sus hijos con Dona Rosa mientras trabaja. Descubre que el cuidado no es debilidad: es un pacto entre mujeres.',
          pedagogicalTag: 'Redes de cuidado / sororidad',
        },
        {
          id: 'd2-2b',
          label: 'B',
          text: 'Renunciar al trabajo para estar mas tiempo con ellos',
          consequence:
            'Tatiana deja el trabajo. Esta con sus hijos, pero la plata no alcanza. Descubre que el cuidado, sin red, es tambien un modo de soledad.',
          pedagogicalTag: 'Tension trabajo-cuidado',
        },
        {
          id: 'd2-2c',
          label: 'C',
          text: 'Organizar un turno con otras madres del campamento',
          consequence:
            'Tatiana propone un sistema rotativo de cuidado. Las madres se organizan. Los ninos crecen acompanados. El cuidado deja de ser un problema individual.',
          pedagogicalTag: 'Cuidado colectivo / economia feminista',
        },
      ],
    },
  ],
};