type EmailRules = {
  required: {
    value: boolean;
    message: "Обязательное поле";
  };
  pattern: {
    message: "Укажите корректный email";
    value: RegExp;
  };
  maxLength: {
    value: 255;
    message: "Поле должно содержать не более 255 символов";
  };
};

export function EmailRulesReg(): EmailRules {
  return {
    required: {
      value: true,
      message: "Обязательное поле",
    },
    pattern: {
      message: "Укажите корректный email",
      value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
    },
    maxLength: {
      value: 255,
      message: "Поле должно содержать не более 255 символов",
    },
  };
}
