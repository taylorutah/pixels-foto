export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  href: string;
  popular: boolean;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface QuoteFormData {
  serviceType: string;
  dimensions?: {
    width: number;
    height: number;
  };
  material?: string;
  frameStyle?: string;
  quantity: number;
  files: File[];
  contact: {
    name: string;
    email: string;
    phone: string;
    notes?: string;
  };
}

export interface PriceEstimate {
  low: number;
  high: number;
  breakdown: {
    description: string;
    amount: number;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  beforeImageUrl?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  service: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  content: string;
}
