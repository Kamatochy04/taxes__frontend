import { CardBasket, Path, CardAddPost } from "@/widgets";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useEffect, useState } from "react";

import style from "./basket.module.scss";

export const Basket = () => {
  const product: any = useSelector((state: RootState) => state.product.value);
  const orders = useSelector((state: RootState) => state.orders.value);

  console.log(product);
  console.log(orders);

  const [prods, setProds] = useState(product);
 /* const [order, setOrder] = useState(orders);

    useEffect(() => {
    setOrder(
      order.map<any>( item => {
        prods.map( function (value:any) {
          if (value.id == item.product) {
            return {
              product: item.product,
              count: value.count,
              seller: item.seller,
              buyer: item.buyer,
            };

          } else {
            return {
              product: item.product,
              count: item.count,
              seller: item.seller,
              buyer: item.buyer,
            };
          };
        })
      })
    );

  }, [prods]);*/



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

  const del = (id:any) => {    
    let p = prods.filter(item => item.id !== id);
    setProds(p);
    //console.log(order);
    //let o = order.filter(item => item.product !== id);
    //setOrder(o);
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

  function clear() {
    setProds(product);
  };



  return (
    <>
      <Path path="Моя корзина" />
      <div className={style.fild}>
        <section className={style.cards}>
          {prods.map((item, id) => (
            <CardBasket
              key={id}
              item={item}
              count={item.count}
              plus={plus}
              minus={minus}
              del={del}
            />
          ))}
        </section>
        <CardAddPost coutn={productCount} price={price} orders={orders} clear={clear} />
      </div>
    </>
  );
};
