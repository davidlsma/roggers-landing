export interface Promocion {
  id: string;
  badge: string;
  titulo: string;
  descripcion: string;
}

export const promociones: Promocion[] = [
  {
    id: 'jueves-cerveza',
    badge: 'Jueves',
    titulo: '2×1 en Cervezas',
    descripcion:
      'Todos los jueves pedís una pinta y te llevás dos. La mejor excusa para salir entre semana.',
  },
  {
    id: 'happy-hour',
    badge: '18 – 20 hs',
    titulo: 'Happy Hour',
    descripcion:
      'De 18 a 20 hs, todos los tragos de la carta a precio especial. Arrancá la noche bien.',
  },
  {
    id: 'cumpleanos',
    badge: 'Cumpleaños',
    titulo: 'Promo Festejo',
    descripcion:
      'Si festejás con nosotros, hay un beneficio especial esperándote. Consultanos con anticipación y armamos algo para vos.',
  },
  {
    id: 'tabla-pintas',
    badge: 'Combo',
    titulo: 'Tabla Rústica + 2 Pintas',
    descripcion:
      'La tabla para compartir con dos pintas de cerveza artesanal a precio promocional. Ideal para arrancar la noche.',
  },
];
