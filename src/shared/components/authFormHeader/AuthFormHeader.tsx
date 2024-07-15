import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

import style from "./authformHeader.module.scss";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

export const AuthFormHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={style.header}>
      <IconButton className={style.icon} onClick={() => navigate(-1)}>
        <ArrowCircleLeftOutlinedIcon />
      </IconButton>
      <IconButton className={style.icon} onClick={() => navigate("/")}>
        <HighlightOffIcon />
      </IconButton>
    </div>
  );
};
