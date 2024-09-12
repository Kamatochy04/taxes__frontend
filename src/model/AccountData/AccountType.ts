export type AccountData = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  patronymic: string;
  unp: string;
  registration_address: string;
  residential_address: string;
  date_of_birth: Date;
  passport_num: string;
  phone_number: string;
  avatar?: string;
};

export type AvatarType = {
  avatar: string;
};

export type EnterWord = {
  secret_word: string;
};
