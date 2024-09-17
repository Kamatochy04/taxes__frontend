import { useGetProductsDataQuery } from "@/features/user/api/productsApi";
import { ProductsResults } from "@/model";

import { Card, Path } from "@/widgets";

import style from "./offers.module.scss";

export const Offers = () => {
  const { data } = useGetProductsDataQuery("");

  return (
    <>
      <Path />
      <div className={style.offers}>
        {data != undefined
          ? data.results.map((item: ProductsResults, id) => (
              <Card key={id} results={item} />
            ))
          : "ERROR"}
      </div>
    </>
  );
};
