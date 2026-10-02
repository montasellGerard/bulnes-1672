import type { Bono, GalleryCategory, GalleryItem, ServiceGroup } from "./types";

// ─── Business data ──────────────────────────────────────────────
// Source: Booksy listing + client info (Oct 2026).

export const BUSINESS_NAME = "Bulnes1672";

export const PHONE_DISPLAY = "656 60 66 79";
export const PHONE_TEL = "tel:+34656606679";

export const WHATSAPP_LINK =
  "https://wa.me/34656606679?text=" +
  encodeURIComponent("Hola, quería pedir cita en Bulnes1672.");

export const BOOKSY_URL =
  "https://booksy.com/es-es/72962_bulnes1672-barberia-clasica_barberia_49475_granollers";

export const ADDRESS_LINE = "Carrer del Camp de les Moreres, 2 · Local 8";
export const ADDRESS_CITY = "08401 Granollers, Barcelona";
export const ADDRESS_SHORT = "Camp de les Moreres, 2 · Granollers";

export const MAPS_QUERY = encodeURIComponent(
  "Carrer del Camp de les Moreres 2, 08401 Granollers"
);
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&z=16&output=embed`;

// TODO(confirm with client): Booksy only shows "today". Exact working days pending.
export const OPENING_HOURS = {
  morning: "9:00 – 13:30",
  afternoon: "15:30 – 20:00",
  note: "Solo con cita previa",
};

// ─── Services (prices in EUR, from Booksy) ──────────────────────

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Corte",
    intro: "Tijera, máquina y acabado clásico.",
    services: [
      { name: "Corte", price: 21, duration: 30, popular: true },
      {
        name: "Corte de pelo largo",
        description: "Para cabello de medida larga que requiere más trabajo.",
        price: 27,
        duration: 30,
      },
      { name: "Corte niño", description: "Hasta 12 años.", price: 17, duration: 30 },
      { name: "Corte especial jubilados", price: 17, duration: 30 },
    ],
  },
  {
    title: "Barba y afeitado",
    intro: "Navaja, toalla caliente y masaje. Como se hacía antes.",
    services: [
      {
        name: "Afeitado tradicional",
        description: "Afeitado total con navaja: diseño, masaje y cuidado de la piel.",
        price: 17,
        duration: 30,
      },
      {
        name: "Arreglo de barba tradicional",
        description: "Perfilado con navaja, masaje y cuidado de la barba.",
        price: 13,
        duration: 30,
        popular: true,
      },
      {
        name: "Afeitado con máquina (shaver)",
        description: "Diseño, cuidado de piel y barba con máquina.",
        price: 13,
        duration: 30,
      },
    ],
  },
  {
    title: "Ritual completo",
    intro: "Corte y barba en una sola visita.",
    services: [
      {
        name: "Corte + arreglo de barba",
        description: "Corte y arreglo de barba tradicional con navaja.",
        price: 30,
        duration: 60,
        popular: true,
      },
      {
        name: "Corte + afeitado tradicional",
        description: "Corte y afeitado total con navaja.",
        price: 31,
        duration: 60,
      },
      {
        name: "Corte + afeitado exprés al 0",
        price: 26,
        duration: 30,
      },
      {
        name: "Arreglo de barba + rapado a máquina",
        price: 18,
        duration: 30,
      },
    ],
  },
];

export const BONOS: Bono[] = [
  {
    name: "Bono 5 cortes",
    description: "Cinco cortes para usar cuando quieras.",
    price: 100,
  },
  {
    name: "Bono 5 cortes + 5 afeitados",
    description: "Cinco cortes y cinco afeitados tradicionales.",
    price: 140,
  },
];

export const ALL_SERVICES = SERVICE_GROUPS.flatMap((g) => g.services);

// ─── Products used in the shop ──────────────────────────────────

export const PRODUCT_BRANDS = [
  "Myrsol",
  "Pinaud Clubman",
  "Stirling Soap Co.",
  "RazoRock",
  "Proraso",
];

// ─── Gallery (real photos from the shop) ────────────────────────

export const FILTER_TABS: ("Todos" | GalleryCategory)[] = [
  "Todos",
  "Trabajo",
  "El local",
  "Producto",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    src: "/images/trabajo-pompadour-bn.jpg",
    label: "Peinado hacia atrás y barba canosa perfilada",
    category: "Trabajo",
    width: 640,
    height: 779,
  },
  {
    id: "2",
    src: "/images/local-sillones.jpg",
    label: "Sillones de barbero clásicos y espejos dorados",
    category: "El local",
    width: 640,
    height: 837,
  },
  {
    id: "3",
    src: "/images/trabajo-tijera-capa.jpg",
    label: "Corte a tijera junto al escaparate",
    category: "Trabajo",
    width: 640,
    height: 853,
  },
  {
    id: "4",
    src: "/images/producto-vitrina.jpg",
    label: "Brochas y jabones de afeitado en la vitrina",
    category: "Producto",
    width: 640,
    height: 853,
  },
  {
    id: "5",
    src: "/images/trabajo-maquina.jpg",
    label: "Degradado clásico en el sillón",
    category: "Trabajo",
    width: 640,
    height: 853,
  },
  {
    id: "6",
    src: "/images/producto-myrsol.jpg",
    label: "Emulsión y lociones Myrsol",
    category: "Producto",
    width: 640,
    height: 853,
  },
  {
    id: "7",
    src: "/images/trabajo-peinado.jpg",
    label: "Acabado y peinado frente al espejo",
    category: "Trabajo",
    width: 640,
    height: 853,
  },
  {
    id: "8",
    src: "/images/producto-lociones.jpg",
    label: "Aftershaves y bálsamos en el puesto",
    category: "Producto",
    width: 640,
    height: 853,
  },
];
