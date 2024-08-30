import { api } from "@/app/redux/services/api";
import { ProductsData, ProductsResults } from "@/model";

//Вызов injectEndpoints внедрит конечные точки в исходный API,
//но также вернет вам тот же API с правильными типами для этих конечных точек.
export const productsApi = api.injectEndpoints({  
  endpoints: (builder) => ({

    GetProductsData: builder.query<ProductsData, string>({
      query: () => "api/dev/products",
    }),

    NewProduct: builder.mutation<ProductsData, ProductsResults>({
      query: (body) => ({
        url: "api/dev/products/",
        method: "POST",
        body,
      }),
    }),

    DeleteProduct: builder.mutation<ProductsData, ProductsResults>({
      query: (id) => ({
        url: `api/dev/products/${id}`,
        method: "DELETE",
      }),
    }),

  }),
});

export const { useGetProductsDataQuery, useNewProductMutation } = productsApi;

export const {
  endpoints: { NewProduct, },
} = productsApi;
