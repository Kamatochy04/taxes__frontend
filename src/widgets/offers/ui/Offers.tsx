import style from "./offers.module.scss";
import { CardOffers, Path, CardOffersAdd } from "@/widgets";

import { Button } from "@/shared/components/button/Button";
import { Box, ClickAwayListener, Portal, SxProps } from "@mui/material";
import { Details } from "./Details";
import { useState } from "react";
import { Typography } from "@/shared/components/typography/Typography";
import { useGetProductsDataQuery } from "@/features/user/api/productsApi";
import { ProductsData } from "@/model";

export const Offers = () => {

  const {data = []} = useGetProductsDataQuery(''); 
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: SxProps = {
    position: "fixed",
    width: "66%",
    height: "65%",
    top: "51%",
    left: "49%",
    transform: "translate(-50%, -50%)",
    border: "1px solid",
  };

  return (
    <>
      <Path />
      <section className={style.card}>
        {data.map((item: ProductsData) => 
          <CardOffersAdd data={item}/>)}
        <CardOffers />
        <CardOffers />
        <CardOffers />
        <CardOffers />
        <CardOffers />
      </section>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className={style.card__Button}>
          <Button variant="addSentence" onClick={handleClick}>
            <Typography variant="h3-account" tag={"h3"}>
              Добавить предложение
            </Typography>
          </Button>
          {open ? (
            <Portal>
              <Box sx={styles}>
                <Details />
              </Box>
            </Portal>
          ) : null}
        </div>
      </ClickAwayListener>
    </>
  );
};
