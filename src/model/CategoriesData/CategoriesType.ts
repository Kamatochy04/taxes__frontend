export type CategoriesData = {
  count: string;
  next: string;
  previous: string;
  results: CategoriesType[];
};

export type CategoriesType = {
  id: string;
  name: string;
};
