import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
  password: yup
    .string()
    .required("Пароль обязателен")
    .min(8, "Пароль должен быть не менее 8 символов")
    .max(30, "Пароль должен быть не больше 30 символов")
    .test(
      "no-repeating-chars",
      "Пароль не может содержать один и тот же символ три раза подряд",
      function (value) {
        if (!value) return true;
        for (let i = 0; i < value.length - 3; i++) {
          if (value[i] === value[i + 1] && value[i] === value[i + 2]) {
            return false;
          }
        }
        return true;
      }
    ),
});

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
  password: yup
    .string()
    .required("Пароль обязателен")
    .min(8, "Пароль должен быть не менее 8 символов")
    .max(30, "Пароль должен быть не больше 30 символов")
    .test(
      "no-repeating-chars",
      "Пароль не может содержать один и тот же символ три раза подряд",
      function (value) {
        if (!value) return true;
        for (let i = 0; i < value.length - 3; i++) {
          if (value[i] === value[i + 1] && value[i] === value[i + 2]) {
            return false;
          }
        }
        return true;
      }
    ),
});