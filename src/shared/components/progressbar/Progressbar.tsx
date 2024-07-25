import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

type ProgressBarProps = {
  progress: number;
};

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        sx={{
          height: 5,
          borderRadius: 5,
          // backgroundColor: "rgba(77, 100, 141, 1)",
          color: "rgba(77, 100, 141, 1)",
        }}
        variant="determinate"
        value={progress}
        color="inherit"
      />
    </Box>
  );
};
