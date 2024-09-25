import { useGetUserMeOrders_to_buyQuery } from "@/features/user/api/AccountApi";
import style from "./purchases.module.scss";
import { CardPurchases, Path } from "@/widgets";

export const Purchases = () => {

  const { data } = useGetUserMeOrders_to_buyQuery("");
  console.log(data);

  return (
    <>
      <Path path="Мои покупки" />
      <section className={style.purchases}>
      {data.results.map((item:any) => (
            <CardPurchases
              key={item.id}
              name={item.product.name}
              price={item.product.price}
              images={item.product.images[0].photo}
            />
          ))}
      </section>
    </>
  );
};
