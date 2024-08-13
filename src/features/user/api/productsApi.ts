import { api } from "@/app/redux/services/api";
import { ProductsData } from "@/model";

type ResponsData = {
  accessToken: string;
  refreshToken: string;
};



//Вызов injectEndpoints внедрит конечные точки в исходный API,
//но также вернет вам тот же API с правильными типами для этих конечных точек.
export const productsApi = api.injectEndpoints({  
  endpoints: (builder) => ({

    GetProductsData: builder.query<ProductsData[], string>({
      query: () => "api/dev/products",
    }),

  }),
});

export const { useGetProductsDataQuery } = productsApi;

export const {
  endpoints: { },
} = productsApi;
