import { useForm } from "react-hook-form";
import {
  Box,
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

type Step1Props = {
  nextStep: () => void;
};

export const Step1 = () => {
  const [isChecked, setIsChecked] = useState(false);
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

  const dispatch = useAppDispatch();
  const onSubmit = (data: DataRegisterUser) => {
    dispatch(setFormData(data));
    navigate("step-second");
  };

  return (
    <AuthBoxForm onSubmit={handleSubmit(onSubmit)}>
      <>
        <div>* - поля обязательные для ввода</div>
        <ProgressBar progress={33.33} />
        <TextField
          sx={{ width: "100%" }}
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
        {/* <FormControlLabel
        sx={{ width: "100%", color: "red", fontSize: "12px" }}
        control={ */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            required
            size="small"
            inputProps={{ "aria-label": "controlled" }}
            onChange={handleCheckboxChange}
            onClick={() => {}}
          />
          <Typography sx={{ fontSize: "12px", margin: "0", padding: "0" }}>
            Согласие на обработку персональных данных
          </Typography>
        </div>
        <Button
          disabled={!isChecked || !isValid}
          sx={{ width: "100%" }}
          variant="contained"
          type="submit"
        >
          Далее
        </Button>
      </>
    </AuthBoxForm>
    // <Box
    //   component={"form"}
    //   onSubmit={handleSubmit(onSubmit)}
    //   sx={{
    //     width: "100%",
    //     marginBottom: "3rem",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",

    //     gap: "30px",
    //   }}
    // >

    // </Box>
  );
};
