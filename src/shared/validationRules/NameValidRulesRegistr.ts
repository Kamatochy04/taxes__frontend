type NameRules = {
  required?: {
    value: boolean;
    message: "Поле обязательно для заполнения";
  };

  pattern: {
    value: RegExp;
    message: "Допускается вводить только русские буквы и символ '-'";
  };
};

export function NameRulesReg(): NameRules {
  return {
    required: {
      value: true,
      message: "Поле обязательно для заполнения",
    },

    pattern: {
      value: /^[А-Яа-я](?!.*-.*-)(?!.*\s)(?!^-)(?!.*-$)[А-Яа-я-]*$/,
      message: "Допускается вводить только русские буквы и символ '-'",
    },
  };
}

export function PatronymicRules(): NameRules {
  return {
    pattern: {
      value: /^[А-Яа-я](?!.*-.*-)(?!.*\s)(?!^-)(?!.*-$)[А-Яа-я-]*$/,
      message: "Допускается вводить только русские буквы и символ '-'",
    },
  };
}
