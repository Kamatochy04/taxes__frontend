import { CardBasket, Path, CardAddPost } from "@/widgets";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useEffect, useState } from "react";


import style from "./basket.module.scss";
import { summa } from "@/widgets/finance/api/ProductPrice";

export const Basket = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.product.value);
  const productCount = product.length;
  const [price, setPrice] = useState(0);
  useEffect(() => {
    let a = 0;

    product.map((item) => {
      dispatch(summa(Number(item.price)));
      a += Number(item.price);
    });

    setPrice(a);
  }, [product]);

  return (
    <>
      <Path path="Корзина" />
      <div className={style.fild}>
        <section className={style.cards}>
          {product.map((item, id) => (
            <CardBasket key={id} item={item} />
          ))}
        </section>
        <CardAddPost coutn={productCount} price={price} />
      </div>
    </>
  );
};
