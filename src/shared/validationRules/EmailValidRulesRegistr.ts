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
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    maxLength: {
      value: 255,
      message: "Поле должно содержать не более 255 символов",
    },
  };
}
