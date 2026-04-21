export interface MenuItem {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imageSeed: number;
}

export interface MenuCategory {
  id: string;
  nombre: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'entradas',
    nombre: 'Entradas',
    items: [
      {
        id: 'rabas',
        nombre: 'Rabas a la Romana',
        descripcion: 'Anillos de calamar rebozados y dorados. Con alioli de limón.',
        precio: 3500,
        imageSeed: 10,
      },
      {
        id: 'empanadas',
        nombre: "Empanadas Rogger's (x4)",
        descripcion: 'Carne cortada a cuchillo, cebolla y especias. Horneadas.',
        precio: 3200,
        imageSeed: 11,
      },
      {
        id: 'alitas',
        nombre: 'Alitas BBQ',
        descripcion: 'Alitas de pollo a la parrilla con salsa BBQ ahumada.',
        precio: 3800,
        imageSeed: 12,
      },
      {
        id: 'nachos',
        nombre: 'Nachos con Queso',
        descripcion: 'Chips de maíz con dip cheddar, guacamole y jalapeños.',
        precio: 3000,
        imageSeed: 13,
      },
    ],
  },
  {
    id: 'principales',
    nombre: 'Platos Principales',
    items: [
      {
        id: 'lomo',
        nombre: 'Lomo a la Pimienta',
        descripcion: 'Tierno lomo de res al punto, salsa de pimienta verde y papas rústicas.',
        precio: 8500,
        imageSeed: 20,
      },
      {
        id: 'hamburguesa',
        nombre: "Hamburguesa Rogger's",
        descripcion: 'Medallón 200g, cheddar fundido, panceta crocante y salsa especial.',
        precio: 6500,
        imageSeed: 21,
      },
      {
        id: 'pasta',
        nombre: 'Pasta al Pesto',
        descripcion: 'Fettuccini al dente con pesto de albahaca, parmesano y nueces.',
        precio: 5500,
        imageSeed: 22,
      },
      {
        id: 'tabla-rustica',
        nombre: 'Tabla Rústica',
        descripcion: 'Fiambres seleccionados, quesos, aceitunas y pan artesanal. Para compartir.',
        precio: 7200,
        imageSeed: 23,
      },
    ],
  },
  {
    id: 'bebidas',
    nombre: 'Bebidas',
    items: [
      {
        id: 'cerveza',
        nombre: 'Cerveza Artesanal (Pinta)',
        descripcion: 'Rubia, roja o negra. Tirada y bien fría.',
        precio: 2800,
        imageSeed: 30,
      },
      {
        id: 'vino',
        nombre: 'Copa de Vino',
        descripcion: 'Tinto o blanco. Selección de bodegas sanjuaninas.',
        precio: 3200,
        imageSeed: 31,
      },
      {
        id: 'trago',
        nombre: 'Tragos de Autor',
        descripcion: 'Creaciones originales de nuestros bartenders. Preguntá por la carta.',
        precio: 3500,
        imageSeed: 32,
      },
      {
        id: 'gaseosa',
        nombre: 'Gaseosa',
        descripcion: 'Coca-Cola, Sprite o Fanta. Con hielo y limón.',
        precio: 1500,
        imageSeed: 33,
      },
    ],
  },
  {
    id: 'postres',
    nombre: 'Postres',
    items: [
      {
        id: 'brownie',
        nombre: 'Brownie con Helado',
        descripcion: 'Brownie de chocolate tibio con dos bochas de helado de vainilla.',
        precio: 3000,
        imageSeed: 40,
      },
      {
        id: 'panqueques',
        nombre: 'Panqueques con Dulce de Leche',
        descripcion: 'Panqueques caseros bañados en dulce de leche. Con crema.',
        precio: 2800,
        imageSeed: 41,
      },
    ],
  },
];
