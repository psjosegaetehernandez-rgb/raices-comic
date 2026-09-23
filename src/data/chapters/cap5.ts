import type { Chapter } from '../types';

export const capitulo5: Chapter = {
  id: 'cap5',
  number: 5,
  title: 'La Escuela del Silencio',
  subtitle: 'Alto Hospicio · Escuela Publica',
  protagonist: 'Daniel',
  location: 'Escuela publica, Alto Hospicio',
  theme: 'Educacion e infancia migrante',
  estimatedMinutes: 16,
  visual: {
    cover: '/imagenes/portadas/cap5-portada.jpg',
    palette: 'field',
  },
  pages: [
    {
      id: 'cap5-p1',
      layout: 'featured',
      panels: [
        {
          id: 'cap5-p1-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap5/01-escuela-exterior.jpg',
          imageAlt: 'Escuela publica de dos pisos con patio de tierra y ninos entrando',
          caption: 'Escuela Republica de Chile · 7:45 AM',
          narration:
            'La escuela huele a tiza y a cuaderno nuevo. Daniel aprieta la mano de su mama. Es su primer dia. Su mochila es nueva, pero sus zapatos tienen el polvo del camino.',
        },
      ],
    },
    {
      id: 'cap5-p2',
      layout: 'grid-2',
      panels: [
        {
          id: 'cap5-p2-panel1',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap5/02-daniel-rostro.jpg',
          imageAlt: 'Retrato de Daniel, nino venezolano de 8 anos, mirada curiosa',
          caption: 'Daniel',
          narration:
            'Daniel tiene ocho anos. Llego hace tres meses desde Maracaibo. Habla rapido, con acento caribeno. Sabe leer y escribir. Sabe contar hasta cien. Pero hoy tiene miedo.',
        },
        {
          id: 'cap5-p2-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap5/03-mama-despedida.jpg',
          imageAlt: 'Mujer joven despidiendo a su hijo en la entrada de la escuela',
          caption: 'La despedida',
          narration:
            'Su mama le da un beso en la frente. "Portate bien, mi amor. Si algo pasa, me llamas". Daniel asiente. No sabe que no va a llamarla.',
        },
      ],
    },
    {
      id: 'cap5-p3',
      layout: 'featured',
      panels: [
        {
          id: 'cap5-p3-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap5/04-aula-llena.jpg',
          imageAlt: 'Sala de clases con muchos ninos sentados en filas',
          caption: 'Sala 3B · 8:00 AM',
          narration:
            'El aula tiene treinta y cinco sillas. Todas ocupadas. Daniel es el unico con acento distinto, el unico con piel mas morena, el unico que no conoce a nadie.',
        },
      ],
    },
    {
      id: 'cap5-p4',
      layout: 'featured',
      panels: [
        {
          id: 'cap5-p4-panel1',
          type: 'dialogue',
          layout: 'full',
          image: '/imagenes/cap5/05-profesora-presenta.jpg',
          imageAlt: 'Profesora de pie frente a la clase, presentando a un nino nuevo',
          dialogues: [
            {
              id: 'd5-1',
              character: 'Profesora',
              text: 'Ninos, les presento a Daniel. Viene de Venezuela. Denle la bienvenida.',
              position: 'top-right',
              style: 'speech',
            },
          ],
          narration:
            'Treinta y cinco pares de ojos lo miran. Daniel baja la vista. Siente que su acento es una bandera que todos pueden ver.',
        },
      ],
    },
    {
      id: 'cap5-p5',
      layout: 'featured',
      panels: [
        {
          id: 'cap5-p5-panel1',
          type: 'dialogue',
          layout: 'full',
          image: '/imagenes/cap5/06-companero-burla.jpg',
          imageAlt: 'Nino de la clase mirando con burla al nuevo companero',
          dialogues: [
            {
              id: 'd5-2',
              character: 'Companero',
              text: 'Oye, venezolano, habla bien. Aqui se habla chileno.',
              position: 'top-left',
              style: 'speech',
            },
          ],
          narration:
            'Las risas se esparcen por el aula. Daniel siente que el piso se abre. No sabe que responder. Sabe que decir algo empeoraria las cosas.',
        },
      ],
    },
    {
      id: 'cap5-p6',
      layout: 'featured',
      panels: [
        {
          id: 'cap5-p6-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap5/07-daniel-silencio.jpg',
          imageAlt: 'Nino sentado en su pupitre con la cabeza baja, silencioso',
          narration:
            'Daniel se queda callado. El silencio es lo unico que lo protege. Su mama le dijo que si alguien se burla, no responda. Pero el silencio tambien pesa.',
          decisionId: 'd5-1',
        },
      ],
    },
    {
      id: 'cap5-p7',
      layout: 'featured',
      panels: [
        {
          id: 'cap5-p7-panel1',
          type: 'establishing',
          layout: 'full',
          image: '/imagenes/cap5/08-patios-recreo.jpg',
          imageAlt: 'Patio de escuela con ninos jugando durante el recreo',
          caption: 'Recreo · 11:00 AM',
          narration:
            'En el recreo, todos corren. Daniel se queda sentado en una banca, mirando. Los ninos saltan, se rien, se empujan. El no conoce las reglas de sus juegos.',
        },
      ],
    },
    {
      id: 'cap5-p8',
      layout: 'grid-2',
      panels: [
        {
          id: 'cap5-p8-panel1',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap5/09-manos-dibujando.jpg',
          imageAlt: 'Primer plano de manos de nino dibujando en un cuaderno',
          caption: 'El cuaderno',
          narration:
            'Daniel saca un cuaderno. Empieza a dibujar. Dibuja su casa en Maracaibo, su abuela, el arbol de mango del patio. Dibuja para no olvidar.',
        },
        {
          id: 'cap5-p8-panel2',
          type: 'close-up',
          layout: 'half',
          image: '/imagenes/cap5/10-nina-se-acerca.jpg',
          imageAlt: 'Nina chilena acercandose a mirar el cuaderno del nino nuevo',
          caption: 'La visita',
          narration:
            'Una nina se acerca. Mira el dibujo sin pedir permiso. Se queda en silencio. Daniel espera la burla. Pero la nina no se burla.',
        },
      ],
    },
    {
      id: 'cap5-p9',
      layout: 'featured',
      panels: [
        {
          id: 'cap5-p9-panel1',
          type: 'dialogue',
          layout: 'full',
          image: '/imagenes/cap5/11-nina-habla.jpg',
          imageAlt: 'Nina chilena sentada junto a Daniel conversando',
          dialogues: [
            {
              id: 'd5-3',
              character: 'Antonia',
              text: 'Yo tambien soy nueva. Llegue el ano pasado de Arica. Dibujas bien.',
              position: 'top-right',
              style: 'speech',
            },
          ],
          narration:
            'Antonia se sienta a su lado. No le pide que hable distinto. No le pide que sea otro. Solo le pide un pedazo de cuaderno.',
          decisionId: 'd5-2',
        },
      ],
    },
    {
      id: 'cap5-p10',
      layout: 'featured',
      panels: [
        {
          id: 'cap5-p10-panel1',
          type: 'reflection',
          layout: 'full',
          image: '/imagenes/cap5/12-daniel-sonrie.jpg',
          imageAlt: 'Daniel sonriendo por primera vez, junto a su nueva amiga',
          caption: 'Epilogo · 3:30 PM',
          narration:
            'Al salir, Daniel corre hacia su mama. Le cuenta todo: la profesora, la burla, el dibujo, Antonia. Por primera vez en tres meses, no tiene miedo de manana.',
        },
      ],
    },
  ],
  decisions: [
    {
      id: 'd5-1',
      question: 'Daniel debe decidir como responder a la burla',
      context: 'El silencio lo protege, pero tambien lo aisla.',
      options: [
        {
          id: 'd5-1a',
          label: 'A',
          text: 'Callar y esperar que pase',
          consequence:
            'Daniel se queda en silencio. La burla se repite los proximos dias, pero cada vez le duele menos. Aprende a sobrevivir en la escuela siendo invisible.',
          pedagogicalTag: 'Silencio estrategico / supervivencia escolar',
        },
        {
          id: 'd5-1b',
          label: 'B',
          text: 'Responder con una broma',
          consequence:
            'Daniel responde: "Aqui se habla chileno, pero se piensa venezolano". El aula se rie. El companero se queda sin palabras. Daniel descubre que el humor desarma.',
          pedagogicalTag: 'Humor como resistencia / ingenio infantil',
        },
        {
          id: 'd5-1c',
          label: 'C',
          text: 'Contarle a la profesora',
          consequence:
            'Daniel levanta la mano y habla. La profesora interviene. El companero se disculpa. Daniel aprende que nombrar lo que pasa no es debilidad.',
          pedagogicalTag: 'Denuncia escolar / proteccion adulta',
        },
      ],
    },
    {
      id: 'd5-2',
      question: 'Daniel debe decidir si comparte su cuaderno',
      context: 'Antonia le pidio ver sus dibujos.',
      options: [
        {
          id: 'd5-2a',
          label: 'A',
          text: 'Mostrarle todos sus dibujos',
          consequence:
            'Daniel abre su cuaderno. Le muestra a Antonia su casa, su abuela, su perro. Antonia pregunta, se asombra, aprende. La amistad empieza con un cuaderno abierto.',
          pedagogicalTag: 'Apertura / compartir la memoria',
        },
        {
          id: 'd5-2b',
          label: 'B',
          text: 'Mostrarle solo un dibujo',
          consequence:
            'Daniel le muestra el arbol de mango. Solo ese. Antonia sonrie. Daniel aprende que la intimidad tambien se cuida por partes.',
          pedagogicalTag: 'Cuidado de la intimidad / confianza gradual',
        },
        {
          id: 'd5-2c',
          label: 'C',
          text: 'Cerrar el cuaderno y guardarlo',
          consequence:
            'Daniel guarda el cuaderno. Antonia se queda callada. Se aleja despacio. Daniel se queda solo otra vez. Aprende que el miedo tambien cierra puertas.',
          pedagogicalTag: 'Miedo al rechazo / aislamiento',
        },
      ],
    },
  ],
};