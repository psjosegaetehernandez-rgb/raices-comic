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
            'La cordillera respira. Bajo el cielo más limpio del mundo, el frío corta la piel y el silencio pesa.',
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
            'A lo lejos, las luces de un retén. La frontera no es una línea: es una herida que se abre y se cierra todos los días.',
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
          caption: 'Retén militar · 4:45 AM',
          narration:
            'Amaru ajusta su manta y respira hondo. Sabe que a partir de aquí, cada paso cuenta.',
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
          imageAlt: 'Retrato de Amaru, joven aymara de 24 años',
          narration:
            'Amaru lleva en el bolsillo una semilla de quinoa. Su abuela se la dio antes de partir.',
          narrativeBoxes: [
            {
              text: 'Donde la plantes, echarás raíces.',
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
            'Una semilla dorada. Pequeña. Imposible de romper. Como la memoria de los suyos.',
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
          imageAlt: 'Hombre de 45 años con sombrero, mirada calculadora',
          narration:
            'El desconocido le ofreció ayuda: "¿Buscas cruzar? Yo te ayudo. Tiene un costo." Su voz era aceitosa; sus ojos, calculadores.',
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
            'Amaru piensa. Hay caminos que se pagan con dinero y caminos que se pagan con miedo. Ninguno es gratis.',
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
          imageAlt: 'Grupo de 6 familias migrantes alrededor de una olla común',
          caption: 'Camino a Chile · 6:45 AM',
          narration:
            'Un grupo de familias avanza en silencio. Comparten agua, pan y silencios. La comunidad, a veces, es lo único que se tiene.',
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
            'Las manos se entrelazan. Nadie lo dice, pero todos lo saben: quien camina solo, camina más rápido; quien camina acompañado, llega más lejos.',
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
          imageAlt: 'Olla común en patio compartido del campamento',
          caption: 'Olla común · 11:30 AM',
          narration:
            'En el campamento, la olla común hierve. Lo poco que hay, se reparte. Así se sobrevive: no con lo que se tiene, sino con lo que se comparte.',
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
            'El atardecer pinta la ciudad de naranja y polvo. Alto Hospicio: miles de casas de madera colgadas del cerro. Aquí empieza otra vida.',
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
          imageAlt: 'Vista panorámica de Alto Hospicio al atardecer',
          caption: 'Campamento Renacer · 8:00 PM',
          narration:
            'El campamento huele a tierra mojada y a comida compartida. Amaru deja su mochila. Este es, por ahora, su hogar.',
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
          imageAlt: 'Raíces de árbol entrelazadas bajo tierra',
          caption: 'Epílogo',
          narration:
            'Esa noche, Amaru planta la semilla en un rincón del patio. No sabe si germinará. Pero sabe que las raíces, cuando encuentran tierra, siempre encuentran la forma.',
        },
      ],
    },
  ],
  decisions: [
    {
      id: 'd1',
      question: '¿Qué camino toma Amaru?',
      context: 'La frontera se abre en tres direcciones. Ninguna es segura.',
      options: [
        {
          id: 'd1a',
          label: 'A',
          text: 'Aceptar la ayuda del desconocido',
          consequence:
            'El coyote lo lleva por un paso peligroso. Amaru llega, pero endeudado y con miedo. Aprende que hay favores que hipotecan la libertad.',
          pedagogicalTag: 'Tráfico ilícito / deuda',
        },
        {
          id: 'd1b',
          label: 'B',
          text: 'Rechazar y buscar otra ruta',
          consequence:
            'Amaru camina solo durante horas. Encuentra un camino alternativo, pero llega exhausto. Descubre que la autonomía tiene un costo físico.',
          pedagogicalTag: 'Autonomía migrante',
        },
        {
          id: 'd1c',
          label: 'C',
          text: 'Unirse a otros migrantes',
          consequence:
            'Un grupo de familias lo invita a caminar juntos. Comparten agua, pan y silencios. Amaru entiende que la comunidad es también un modo de cruzar.',
          pedagogicalTag: 'Malungaje / comunidad en tránsito',
        },
      ],
    },
  ],
};