import type { GalleryItem, Service } from "./types";

export const WHATSAPP_LINK =
  "https://wa.me/5491100000000?text=Hola%2C%20quiero%20reservar%20un%20turno%20en%20Bulnes%201672";

export const INSTAGRAM_URL = "https://instagram.com/bulnes1672";

export const ADDRESS = "Bulnes 1672, Palermo, CABA";

export const EMAIL = "contacto@bulnes1672.com";

export const FILTER_TABS = [
  "Todos",
  "Fade",
  "Skin Fade",
  "Barba",
  "Diseño",
  "Clásico",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    src: "https://picsum.photos/seed/fade1/600/600",
    label: "High Fade clásico",
    category: "Fade",
  },
  {
    id: "2",
    src: "https://picsum.photos/seed/fade2/600/600",
    label: "Low Fade con textura",
    category: "Fade",
  },
  {
    id: "3",
    src: "https://picsum.photos/seed/skinfade1/600/600",
    label: "Skin Fade a piel",
    category: "Skin Fade",
  },
  {
    id: "4",
    src: "https://picsum.photos/seed/skinfade2/600/600",
    label: "Skin Fade con flequillo",
    category: "Skin Fade",
  },
  {
    id: "5",
    src: "https://picsum.photos/seed/beard1/600/600",
    label: "Barba perfilada",
    category: "Barba",
  },
  {
    id: "6",
    src: "https://picsum.photos/seed/beard2/600/600",
    label: "Barba con degradado",
    category: "Barba",
  },
  {
    id: "7",
    src: "https://picsum.photos/seed/design1/600/600",
    label: "Diseño geométrico",
    category: "Diseño",
  },
  {
    id: "8",
    src: "https://picsum.photos/seed/design2/600/600",
    label: "Diseño en la nuca",
    category: "Diseño",
  },
  {
    id: "9",
    src: "https://picsum.photos/seed/classic1/600/600",
    label: "Corte clásico con tijera",
    category: "Clásico",
  },
  {
    id: "10",
    src: "https://picsum.photos/seed/classic2/600/600",
    label: "Corte italiano",
    category: "Clásico",
  },
  {
    id: "11",
    src: "https://picsum.photos/seed/fade3/600/600",
    label: "Mid Fade texturizado",
    category: "Fade",
  },
  {
    id: "12",
    src: "https://picsum.photos/seed/classic3/600/600",
    label: "Clásico con raya",
    category: "Clásico",
  },
];

export const SERVICES: Service[] = [
  {
    name: "Corte clásico",
    description: "Corte tradicional con tijera y máquina",
    price: "$3.500",
  },
  {
    name: "Fade / Degradado",
    description: "Degradado progresivo con máquina",
    price: "$4.000",
  },
  {
    name: "Skin Fade",
    description: "Degradado a piel con navaja",
    price: "$4.500",
  },
  {
    name: "Diseño y perfilado",
    description: "Diseño de líneas y perfilado de nuca",
    price: "$2.500",
  },
  {
    name: "Arreglo de barba",
    description: "Perfilado y definición de barba",
    price: "$2.500",
  },
  {
    name: "Afeitado con navaja",
    description: "Afeitado clásico con navaja caliente",
    price: "$3.000",
  },
  {
    name: "Corte + Barba",
    description: "Pack completo, el favorito del barrio",
    price: "$6.000",
  },
];
