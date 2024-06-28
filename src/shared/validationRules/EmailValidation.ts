type EmailRules = {
  required: {
    value: boolean;
    message: "Обязательное поле";
  };
  pattern: {
    message: "некорректные данные";
    value: RegExp;
  };
};

export function EmailRules(): EmailRules {
  return {
    required: {
      value: true,
      message: "Обязательное поле",
    },
    pattern: {
      message: "некорректные данные",
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
  };
}
