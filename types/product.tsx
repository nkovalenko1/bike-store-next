// ===== Database Models (Prisma) =====

export interface ProductVariant {
  id: string;
  productId: string;
  name: string;
  color: string | null;
  image: string | null;
  price: number | null;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  images: string[];
  category: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
  variants?: ProductVariant[];
}

export interface ProductWithVariants extends Product {
  variants: ProductVariant[];
  specification?: ProductSpecification | null;
  categoryFeatures?: CategoryFeatureSection[] | null;
}

export interface ProductSpecification {
  id: string;
  productId: string;
  specs: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface FeatureItem {
  label: string;
  value: string;
}

export interface CategoryFeatureSection {
  title: string;
  description: string;
  image: string;
  items: FeatureItem[];
}

export interface CategoryFeature {
  id: string;
  category: string;
  features: CategoryFeatureSection[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  variantId: string | null;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  product?: Product;
  variant?: ProductVariant | null;
}

// ===== UI Types (Legacy) =====

export type IVariant = {
  id: number;
  panelId: string;
  name: string;
  cycleImage: string;
  alt: string;
  textImage: string;
  color: string;
};

export type ICard = {
  id: number;
  name: string;
  image: string;
  alt: string;
  description: string;
};

export type IOurStory = {
  id: number;
  name: string;
  description: string;
  year: string;
};

export type IBlogListing = {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  image: string;
};

export type IProductDetail = {
  id: number;
  image: string;
  alt: string;
};

export type IProductcartcard = {
  id: number;
  image: string;
  name: string;
  price: string;
};
