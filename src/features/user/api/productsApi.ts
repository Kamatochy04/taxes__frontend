import { api } from "@/app/redux/services/api";
import { ProductsData } from "@/model";

//Вызов injectEndpoints внедрит конечные точки в исходный API,
//но также вернет вам тот же API с правильными типами для этих конечных точек.
export const productsApi = api.injectEndpoints({  
  endpoints: (builder) => ({

    GetProductsData: builder.query<ProductsData, string>({
      query: () => "api/dev/products",
    }),

    NewProduct: builder.mutation<ProductsData, string>({
      query: (body) => ({
        url: "api/dev/users/me/avatar/",
        method: "POST",
        body,
      }),
    }),

  }),
});

export const { useGetProductsDataQuery, useNewProductMutation } = productsApi;

export const {
  endpoints: { NewProduct, },
} = productsApi;
