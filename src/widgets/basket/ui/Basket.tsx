import { CardBasket, Path, CardAddPost } from "@/widgets";
import style from "./basket.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useEffect, useState } from "react";

export const Basket = () => {
  const product = useSelector((state: RootState) => state.product.value);
  const productCount = product.length;
  const [price, setPrice] = useState(0);
  useEffect(() => {
    let a = 0;

    product.map((item) => {
      a += Number(item.price);
    });

    setPrice(a);
  }, [product]);

  return (
    <>
      <Path />
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
