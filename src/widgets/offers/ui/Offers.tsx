import style from "./offers.module.scss";
import { Card } from "@/widgets";

import { useGetProductsDataQuery } from "@/features/user/api/productsApi";
import { ProductsResults } from "@/model";

//const cards = [1, 2, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 13, 14];

export const Offers = () => {

    const {data} = useGetProductsDataQuery(''); 

  return (
    <>
      <div className={style.offers}>
        {data != undefined
          ? data.results.map((item: ProductsResults) => (
              <Card results={item} />
            ))
          : "ERROR"}
      </div>
    </>
  );
};

/*{cards.map((_, id) => {
    return <Card id={id} key={id} />;
  })}*/
