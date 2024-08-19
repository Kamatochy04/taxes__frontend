import style from "./offers.module.scss";
import { Card } from "@/widgets";

const cards = [1, 2, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 13, 14];

export const Offers = () => {
  return (
    <>
      <div className={style.offers}>
        {cards.map((_, id) => {
          return <Card id={id} key={id} />;
        })}
      </div>
    </>
  );
};
