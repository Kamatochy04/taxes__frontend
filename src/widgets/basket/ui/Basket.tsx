import { CardBasket, Path, CardAddPost } from "@/widgets";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useEffect, useState } from "react";

import style from "./basket.module.scss";

export const Basket = () => {
  const product: any = useSelector((state: RootState) => state.product.value);
  const orders = useSelector((state: RootState) => state.orders.value);
  const [count, setCount] = useState(1);

  const [prods, setProds] = useState(product);

  const minus = (id: any) => {
    setProds(
      prods.map(function (item: any) {
        if (item.id == id && item.count > 1) {
          return {
            count: String(Number(item.count) - 1),
            id: item.id,
            price: item.price,
            name: item.name,
            images: item.images,
          };
        } else {
          return {
            count: item.count,
            id: item.id,
            price: item.price,
            name: item.name,
            images: item.images,
          };
        }
      })
    );
  };

  const plus = (id: any) => {
    setProds(
      prods.map(function (item: any) {
        if (item.id == id) {
          return {
            count: String(Number(item.count) + 1),
            id: item.id,
            price: item.price,
            name: item.name,
            images: item.images,
          };
        } else {
          return {
            count: item.count,
            id: item.id,
            price: item.price,
            name: item.name,
            images: item.images,
          };
        }
      })
    );
  };

  let productCount = 0;
  prods.forEach(function (item: any) {
    productCount += Number(item.count);
  });
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let a = 0;

    prods.map((item: any) => {
      a += Number(item.price)*Number(item.count);
    });

    setPrice(a);
  }, [prods]);

  return (
    <>
      <Path path="Корзина" />
      <div className={style.fild}>
        <section className={style.cards}>
          {prods.map((item, id) => (
            <CardBasket
              key={id}
              item={item}
              count={item.count}
              plus={plus}
              minus={minus}
            />
          ))}
        </section>
        <CardAddPost coutn={productCount} price={price} orders={orders} />
      </div>
    </>
  );
};
