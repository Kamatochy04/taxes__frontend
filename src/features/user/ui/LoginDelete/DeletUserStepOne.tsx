import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import { EnterWord } from "@/model";

import { useDeletUser } from "../../hook/useDeletUser";

import style from "../Login/auth.module.scss";

export const DeletUserStepOne = () => {
  const { deletUser } = useDeletUser();

  const [enterWord] = useState<EnterWord>({
    secret_word: '',
  });

  return (
    <>
      <Formik<EnterWord>
        initialValues={enterWord}
        onSubmit={deletUser}
      >
        {({ isValid }) => (
          <Form className={style.form}>
            <Typography variant={"h3-login_delete"} tag={"h3"}>
              Удаление аккаунта
            </Typography>
            <Typography variant={"h4-login_delete"} tag={"h4"}>
              Для удаления аккаунта введите секретное слово
            </Typography>
            <Field
              className={style.form}
              name={"secret_word"}
              autocomplete="off"
              type="text"
              placeholder="Секретное слово"
            />
            <Button variant={"bigWhite"} disabled={!isValid}>
                Далее
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
