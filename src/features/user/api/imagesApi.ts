import { api } from "@/app/redux/services/api";
import { ProductsImages } from "@/model";

//Вызов injectEndpoints внедрит конечные точки в исходный API,
//но также вернет вам тот же API с правильными типами для этих конечных точек.
export const imagesApi = api.injectEndpoints({  
  endpoints: (builder) => ({

    GetImages: builder.query<ProductsImages, string>({
      query: () => "api/dev/products/images/",
    }),

    NewImages: builder.mutation<any, any>({
      query: (body) => ({
        url: "api/dev/products/images/",
        method: "POST",
        body,
      }),
    }),

    PatchImages: builder.mutation<any, any>({
      query: (body) => ({
        url: `api/dev/products/images/${body[0]}`,
        method: "PATCH",
        body: body[1],
      }),
    }),

    DeleteImages: builder.mutation<ProductsImages, string>({
      query: (id) => ({
        url: `api/dev/products/images/${id}`,
        method: "DELETE",
      }),      
    }),

  }),
});

export const { useDeleteImagesMutation, useGetImagesQuery, useNewImagesMutation, usePatchImagesMutation } = imagesApi;

export const {
  endpoints: { NewImages, },
} = imagesApi;
