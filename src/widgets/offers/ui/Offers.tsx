import style from "./offers.module.scss";
import { Card } from "@/widgets";

import { useGetProductsDataQuery } from "@/features/user/api/productsApi";
import { ProductsResults } from "@/model";

export const Offers = () => {
  const { data } = useGetProductsDataQuery("");

  return (
    <>
      <div className={style.offers}>
        {data != undefined
          ? data.results.map((item: ProductsResults) => <Card results={item} key={item.id}/>)
          : "ERROR"}
      </div>
    </>
  );
};
