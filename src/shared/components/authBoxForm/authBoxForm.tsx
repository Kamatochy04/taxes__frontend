import { Box } from "@mui/material";

interface IBoxFormProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  children: JSX.Element;
}

export default function AuthBoxForm({ onSubmit, children }: IBoxFormProps) {
  return (
    <Box
      component={"form"}
      onSubmit={onSubmit}
      sx={{
        width: "100%",
        marginBottom: "3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        gap: "30px",
      }}
    >
      {children}
    </Box>
  );
}
