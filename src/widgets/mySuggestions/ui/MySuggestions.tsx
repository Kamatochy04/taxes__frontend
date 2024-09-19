import style from "./mySuggestions.module.scss";
import { Path, CardOffersAdd } from "@/widgets";
import { ProductsResults } from "@/model";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/shared/components/button/Button";
import { useGetUserMeProductsQuery } from "@/features/user/api/AccountApi";

export const MySuggestions = () => {
  const { data } = useGetUserMeProductsQuery('')
  const navigate = useNavigate();
  return (
    <>
      <Path path="Мои предложения" />

      <section className={style.section}>
        <div className={style.card}>
          <div className={style.card__img}></div>
          <NavLink to={"/details"}>
            <Button variant="bigBlue">Добавить предложение</Button>
          </NavLink>
        </div>

        {data != undefined
          ? data.results.map((item: ProductsResults) => (
              <CardOffersAdd results={item} key={item.id} />
            ))
          : "ERROR"}
        <button className={style.button} onClick={() => navigate("/details")}>
          <span>+</span>
          <div>Добавить предложение</div>
        </button>
      </section>
    </>
  );
};
