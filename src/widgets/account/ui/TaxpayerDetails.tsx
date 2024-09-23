import { Field, Form, Formik } from "formik";
import { FC, useState } from "react";

import { HintCloud } from "@/shared/components/hintCloud/HintCloud";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";

import { CategoriesType } from "@/model/CategoriesData/CategoriesType";
import { AccountData } from "@/model";
import style from "./account.module.scss";

import { usePatchDataUserMutation } from "@/features/user/api/AccountApi";
import { useGetCategoriesQuery } from "@/features/user/api/categoriesApi";

interface PersonalDetaProps {
  dataUser: AccountData;
}

export const TaxpayerDetails: FC<PersonalDetaProps> = ({ dataUser }) => {
  const { data } = useGetCategoriesQuery("");

  const text = `Информация по добавлению инфы
  - символы
  - количество`;

  const [addTaxpayer] = useState<AccountData>({
    id: `${dataUser.id !== null ? dataUser.id : ""}`,
    email: `${dataUser.email !== null ? dataUser.email : ""}`,
    first_name: `${dataUser.first_name !== null ? dataUser.first_name : ""}`,
    last_name: `${dataUser.last_name !== null ? dataUser.last_name : ""}`,
    patronymic: `${dataUser.patronymic !== null ? dataUser.patronymic : ""}`,

    unp: `${dataUser.unp !== null ? dataUser.unp : ""}`,
    //registration_address: `${dataUser.registration_address !== null ? dataUser.registration_address : ''}`,
    //residential_address: `${dataUser.residential_address !== null ? dataUser.residential_address : ''}`,
    //date_of_birth: dataUser.date_of_birth !== null ? dataUser.date_of_birth : new Date,
    //passport_num: `${dataUser.passport_num !== null ? dataUser.passport_num : ''}`,
    //phone_number: `${dataUser.phone_number !== null ? dataUser.phone_number : ''}`,
  });

  const [updatingUserData] = usePatchDataUserMutation();

  return (
    <>
      <Formik<AccountData>
        initialValues={addTaxpayer}
        onSubmit={(values) => {
          updatingUserData(values);
        }}
      >
        {({ isValid }) => (
          <Form>
            <div className={style.card__ColumnX}>
              <div className={style.card__LineX}>
                <p className={style.card__text}>УНП</p>

                <Field
                  className={style.card__input}
                  autoComplete="off"
                  name={"unp"}
                  type="text"
                  placeholder="Введите УНП"
                />
              </div>

              <div className={style.card__LineX}>
                <p className={style.card__text}>Категория услуг</p>
                <Field
                  className={style.card__input}
                  name="сategory"
                  placeholder="категорию"
                  as="select"
                >
                  {data != undefined
                    ? data.results.map((item: CategoriesType) => (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      ))
                    : "ERROR"}
                </Field>
              </div>

              <div className={style.card__LineX}>
                <p className={style.card__text}></p>
                <Button type="submit" variant={"text"} disabled={!isValid}>
                  <Typography variant="default" tag={"p"}>
                    Изменить
                  </Typography>
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
