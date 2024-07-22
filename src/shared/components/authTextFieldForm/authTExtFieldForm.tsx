import { IconButton, TextField } from "@mui/material";
interface IInputProps {}

export default function authTExtFieldForm({}) {
  return (
    <>
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
    </>
  );
}
