type PasswordRules = {
  required: {
    value: boolean;
    message: "Обязательное поле";
  };
  minLength: {
    value: 8;
    message: "Пароль должен быть больше 8 ";
  };
  maxLength: {
    value: 30;
    message: "Пароль  должен быть меньше 30 ";
  };
  pattern: {
    value: RegExp;
    message: "должен содержать буквы (a-z, A-Z)  может включать спецсимволы";
  };
};

export function PasswordRules(): PasswordRules {
  return {
    required: {
      value: true,
      message: "Обязательное поле",
    },
    minLength: {
      value: 8,
      message: "Пароль должен быть больше 8 ",
    },
    maxLength: {
      value: 30,
      message: "Пароль  должен быть меньше 30 ",
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[^\w!@#$%^&*()\-+;:,.<>]).{6,}$/,
      message: "должен содержать буквы (a-z, A-Z)  может включать спецсимволы",
    },
  };
}
