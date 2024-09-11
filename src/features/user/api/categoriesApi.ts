import { api } from "@/app/redux/services/api";
import { CategoriesData, CategoriesType } from "@/model/CategoriesData/CategoriesType"

type ResponsData = {
  accessToken: string;
  refreshToken: string;
};

//Вызов injectEndpoints внедрит конечные точки в исходный API,
//но также вернет вам тот же API с правильными типами для этих конечных точек.
export const categoriesApi = api.injectEndpoints({  
  endpoints: (builder) => ({

    GetCategories: builder.query<CategoriesData, string>({
      query: () => "api/dev/products/categories/",
    }),

    AddCategories: builder.mutation<ResponsData, CategoriesType>({
      query: (body) => ({
        url: "api/dev/products/categories/",
        method: "POST",
        body,
      }),
    }),

  }),
});

export const { useGetCategoriesQuery, useAddCategoriesMutation } = categoriesApi;

export const {
  endpoints: { },
} = categoriesApi;
