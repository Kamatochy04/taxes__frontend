type ConfirmCodeValidRules = {
  required?: {
    value: boolean;
    message: "Поле обязательно для заполнения";
  };
  minLength: {
    value: 6;
    message: "Поле должно содержать 6 символов";
  };
  maxLength: {
    value: 6;
    message: "Поле должно содержать 6 символов";
  };
  pattern: {
    value: RegExp;
    message: "Ошибка. Неверный код!";
  };
};

export function ConfirmCodeValidRules(): ConfirmCodeValidRules {
  return {
    required: {
      value: true,
      message: "Поле обязательно для заполнения",
    },
    minLength: {
      value: 6,
      message: "Поле должно содержать 6 символов",
    },
    maxLength: {
      value: 6,
      message: "Поле должно содержать 6 символов",
    },
    pattern: {
      value: /^[0-9]+$/,
      message: "Ошибка. Неверный код!",
    },
  };
}
