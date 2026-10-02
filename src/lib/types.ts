export type GalleryCategory = "Trabajo" | "El local" | "Producto";

export interface GalleryItem {
  id: string;
  src: string;
  label: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export interface Service {
  name: string;
  description?: string;
  price: number;
  duration: number; // minutes
  popular?: boolean;
}

export interface ServiceGroup {
  title: string;
  intro: string;
  services: Service[];
}

export interface Bono {
  name: string;
  description: string;
  price: number;
}
