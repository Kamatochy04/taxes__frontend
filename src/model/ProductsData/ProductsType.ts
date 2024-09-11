export type ProductsData = {
  count: string;
  next: string;
  previous: string;
  results: ProductsResults[];
};

export type ProductsResults = {
  id: string;
  name: string;
  description: string;
  price: string;
  count: string;
  category: string;
  seller: string;
  images: ProductsImages[];
};

export type ProductsImages = {
  id?: string ;
  photo: string | ArrayBuffer | null;
  product: string | undefined;
}