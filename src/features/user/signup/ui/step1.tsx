import { useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { DataRegisterUser, setFormData } from "@/app/redux/registerSlice";
import ClearIcon from "@mui/icons-material/Clear";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";

import {
  NameRulesReg,
  PatronymicRules,
} from "@/shared/validationRules/NameValidRulesRegistr";
import AuthBoxForm from "@/shared/components/authBoxForm/authBoxForm";
import { useNavigate } from "react-router-dom";

export const Step1 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppDispatch();
  const dataSelector = useAppSelector((state) => state.step1);
  const navigate = useNavigate();
  const handleCheckboxChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(e.target.checked);
  };

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
    setValue,
  } = useForm<DataRegisterUser>({
    mode: "onBlur",
    defaultValues: {
      first_name: dataSelector.first_name || "",
      last_name: dataSelector.last_name || "",
      patronymic: dataSelector.patronymic || "",
    },
  });

  const onSubmit = (data: DataRegisterUser) => {
    console.log("asdf");
    dispatch(setFormData(data));
    navigate("step-second");
  };

  return (
    // <AuthBoxForm onSubmit={handleSubmit(onSubmit)}>
    <>
      <p>Регистрация</p>
      <ProgressBar progress={33.33} />
      <div>* - поля обязательные для ввода</div>
      <TextField
        sx={{ width: "100%", borderColor: "rgba(12, 16, 56, 1)" }}
        placeholder="Имя*"
        {...register("first_name", {
          ...NameRulesReg(),
        })}
        error={!!errors.first_name}
        helperText={errors.first_name?.message}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                resetField("first_name");
                setValue("first_name", "");
              }}
            >
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <TextField
        sx={{ width: "100%" }}
        placeholder={"Фамилия*"}
        {...register("last_name", {
          ...NameRulesReg(),
        })}
        error={!!errors.last_name}
        helperText={errors.last_name?.message}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                resetField("last_name");
                setValue("last_name", "");
              }}
            >
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <TextField
        sx={{ width: "100%" }}
        placeholder={"Отчество"}
        {...register("patronymic", {
          ...PatronymicRules(),
        })}
        error={!!errors.patronymic}
        helperText={errors.patronymic?.message}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                resetField("patronymic");
                setValue("patronymic", "");
              }}
            >
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Checkbox
          required
          size="small"
          // inputProps={{ "aria-label": "controlled" }}
          onChange={handleCheckboxChange}
          onClick={() => {}}
        />
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            margin: "0",
            padding: "0",
            color: "rgba(12, 16, 56, 1)",
          }}
        >
          Согласие на обработку персональных данных
        </Typography>
      </div>
      <Button
        disabled={!isChecked || !isValid}
        sx={{ width: "100%" }}
        variant="contained"
        type="submit"
        onClick={() => navigate("step-second")}
      >
        Далее
      </Button>
    </>
    // </AuthBoxForm>
  );
};
