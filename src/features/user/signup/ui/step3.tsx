import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RegistrForm from "@/shared/components/RegistrForm/RegistrForm";

export const Step3 = () => {
  const navigate = useNavigate();

  return (
    <RegistrForm>
      <div style={{ marginTop: "25vh" }}>
        <Typography sx={{ fontSize: "16px" }}>
          На электронную почту отправлен код. Пожалуйста, проверьте.
        </Typography>
        <Button
          onClick={() => {
            navigate("step-fourth");
          }}
          sx={{ width: "100%", marginTop: "64px" }}
          variant="contained"
        >
          Далее
        </Button>
      </div>
    </RegistrForm>
  );
};
