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
    message: "Пароль (8-30 символов) должен содержать буквы (a-z, A-Z), минимум 1 цифру, без трёх и более одинаковых символов и цифр подряд, и может включать спецсимволы (#@!$%^;&*()-_+:,.)";
  };
};

export function PasswordRulesReg(): PasswordRules {
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
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*(.)\1\1)(?!.*[^\w!@#$%^&*()\-+;:,.<>]).{6,}$/,
      message:
        "Пароль (8-30 символов) должен содержать буквы (a-z, A-Z), минимум 1 цифру, без трёх и более одинаковых символов и цифр подряд, и может включать спецсимволы (#@!$%^;&*()-_+:,.)",
    },
  };
}
