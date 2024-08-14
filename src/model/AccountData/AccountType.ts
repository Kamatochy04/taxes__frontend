export type PersonalType = {
  first_name: string;
  last_name: string;
  patronymic: string;
  email: string;
  phone_number: string;
};

export type TaxpayerType = {
  UNP: string;
  сategory: string;
};

export type PhotoType = {
  photo: string;
};

export type PassportType = {
  date: Date;
  series: string;
  number: string;
  registration: string;
};

export type EnterWord = {
  secret_word: string;
};
