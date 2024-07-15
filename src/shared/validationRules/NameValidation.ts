type NameRules = {
  required?: {
    value: boolean;
    message: "Поле обязательно для заполнения";
  };
  minLength: {
    value: 1;
    message: "Поле должно содержать от 1 до 30 символов";
  };
  maxLength: {
    value: 30;
    message: "Поле должно содержать от 1 до 30 символов";
  };
  pattern: {
    value: RegExp;
    message: "Допускается вводить только русские буквы и символ '-'";
  };
};

export function NameRules(): NameRules {
  return {
    required: {
      value: true,
      message: "Поле обязательно для заполнения",
    },
    minLength: {
      value: 1,
      message: "Поле должно содержать от 1 до 30 символов",
    },
    maxLength: {
      value: 30,
      message: "Поле должно содержать от 1 до 30 символов",
    },
    pattern: {
      value: /^[А-Яа-я](?!.*-.*-)(?!.*\s)(?!^-)(?!.*-$)[А-Яа-я-]*$/,
      message: "Допускается вводить только русские буквы и символ '-'",
    },
  };
}

export function PatronymicRules(): NameRules {
  return {
    minLength: {
      value: 1,
      message: "Поле должно содержать от 1 до 30 символов",
    },
    maxLength: {
      value: 30,
      message: "Поле должно содержать от 1 до 30 символов",
    },
    pattern: {
      value: /^[А-Яа-я](?!.*-.*-)(?!.*\s)(?!^-)(?!.*-$)[А-Яа-я-]*$/,
      message: "Допускается вводить только русские буквы и символ '-'",
    },
  };
}
