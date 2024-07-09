import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { DataRegisterUser, setFormData } from "@/app/redux/registerSlice";
import ClearIcon from "@mui/icons-material/Clear";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";
import {
  NameRules,
  PatronymicRules,
} from "@/shared/validationRules/NameValidation";

type Step1Props = {
  nextStep: () => void;
};

export const Step1 = ({ nextStep }: Step1Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const dataSelector = useAppSelector((state) => state.dataRegisterReducer);

  const handleCheckboxChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(e.target.checked);
  };

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isDirty },
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
    nextStep();
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "25vw",
        marginBottom: "3rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
      {" "}
      <p>* - поля обязательные для ввода</p>
      <p>Шаг 1/3</p>
      <ProgressBar progress={33.33} />
      <TextField
        sx={{ width: "80%" }}
        label={"Имя*"}
        {...register("first_name", {
          ...NameRules(),
        })}
        error={!!errors.first_name}
        helperText={errors.first_name?.message}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                resetField("first_name");
              }}
            >
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <TextField
        sx={{ width: "80%" }}
        label={"Фамилия*"}
        {...register("last_name", {
          ...NameRules(),
        })}
        error={!!errors.last_name}
        helperText={errors.last_name?.message}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                resetField("last_name");
              }}
            >
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <TextField
        sx={{ width: "80%" }}
        label={"Отчество"}
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
              }}
            >
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <FormControlLabel
        sx={{ width: "80%" }}
        control={
          <Checkbox
            required
            size="small"
            inputProps={{ "aria-label": "controlled" }}
            onChange={handleCheckboxChange}
            onClick={() => {}}
          />
        }
        label={`Я согласен на обработку персональных данных`}
      />
      <Button
        disabled={!isChecked || !isDirty}
        sx={{ width: "80%" }}
        variant="contained"
        type="submit"
      >
        Далее
      </Button>
    </Box>
  );
};
