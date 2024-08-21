import { Field, Form, Formik } from "formik";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import { TaxpayerType } from "@/model";

import style from "./account.module.scss";
import { useState } from "react";
import { useTaxpayerMutation } from "@/features/user/api/AccountApi";
import { HintCloud } from "@/shared/components/hintCloud/HintCloud";

export const TaxpayerDetails = () => {

  const text = `Информация по добавлению инфы
  - символы
  - количество`;
  
  const [addTaxpayer] = useState<TaxpayerType>({
    UNP: "",
    сategory: "",
  });

  const [addTaxpayerData] = useTaxpayerMutation();

  return (
    <>
      <Formik<TaxpayerType>
        initialValues={addTaxpayer}
        onSubmit={(values) => {
          addTaxpayerData(values);
        }}
      >
        {({ isValid }) => (
          <Form>
            <div className={style.card__Line}>
              <div className={style.card__Column}>
                <Typography variant="default" tag={"p"}>
                  УНП
                </Typography>
                <Typography variant="default" tag={"p"}>
                  Категория услуг
                </Typography>
              </div>

              <div className={style.card__Column}>
                <HintCloud text={text}>
                  <Field
                    className={style.card__input}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите УНП"
                  />
                </HintCloud>

                <Field
                  className={style.card__input}
                  name="сategory"
                  as="select"
                >
                  <option value="red">Ремесленная деятельность</option>
                  <option value="green">Видеосъемка событий</option>
                  <option value="blue">Нанесение аквагрима</option>
                  <option value="blue">Репетиторство</option>
                  <option value="blue">Уход за взрослыми и детьми</option>
                </Field>
                <div className={style.card__Line}>
                  <Button type="submit" variant={"text"} disabled={!isValid}>
                    <Typography variant="default" tag={"p"}>
                      Изменить
                    </Typography>
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
