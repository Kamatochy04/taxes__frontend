import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

type ProgressBarProps = {
  progress: number;
};

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <Box sx={{ width: "80%" }}>
      <LinearProgress color="success" variant="determinate" value={progress} />
    </Box>
  );
};
