import style from "./mySuggestions.module.scss";
import { Path, CardOffersAdd } from "@/widgets";
import { useGetProductsDataQuery } from "@/features/user/api/productsApi";
import { ProductsResults } from "@/model";
import { NavLink } from "react-router-dom";

export const MySuggestions = () => {
  const { data } = useGetProductsDataQuery("");

  return (
    <>
      <Path />

      <section className={style.section}>

        <div className={style.card}>
          <div className={style.card__img}></div>
          <NavLink to={"/details"}><button className={style.card__button}>Добавить предложение</button></NavLink>          
        </div>

        {data != undefined
          ? data.results.map((item: ProductsResults) => (
              <CardOffersAdd results={item} />
            ))
          : "ERROR"}
      </section>
    </>
  );
};