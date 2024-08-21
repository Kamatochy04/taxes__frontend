export type AccountData = {
  email: string;
  first_name: string;
  last_name: string;
  patronymic: string;
  UNP: string;
  registration_address: string;
  residential_address: string;
  date_of_birth: Date;
  passport_num: string;
  phone_number: string;
  avatar: any;
};



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
  date_of_birth: Date;
  series: string;
  number: string;
  registration_address: string;
};

export type EnterWord = {
  secret_word: string;
};
