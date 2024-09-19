import { api } from "@/app/redux/services/api";
import { ProductsData, ProductsResults } from "@/model";

//Вызов injectEndpoints внедрит конечные точки в исходный API,
//но также вернет вам тот же API с правильными типами для этих конечных точек.
export const ordersApi = api.injectEndpoints({  
  endpoints: (builder) => ({

    GetOrders: builder.query<any, any>({
      query: () => "api/dev/orders/",
    }),

    PostOrders: builder.mutation<any, any>({
      query: (body) => ({
        url: "api/dev/orders/",
        method: "POST",
        body,
      }),
    }),

    GetOrdersId: builder.query<any, any>({
      query: (id) => `api/dev/orders/${id}`,
    }),

    DeleteOrders: builder.mutation<any, any>({
      query: (id) => ({
        url: `api/dev/orders/${id}`,
        method: "DELETE",
      }),
    }),

  }),
});

export const { useGetOrdersQuery, useGetOrdersIdQuery, usePostOrdersMutation, useDeleteOrdersMutation } = ordersApi;

export const {
  endpoints: { PostOrders, DeleteOrders },
} = ordersApi;
