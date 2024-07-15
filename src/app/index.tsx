import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Router } from "./provider/router";

import "./global.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { blueGrey, teal } from "@mui/material/colors";
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: teal[500], // Основной цвет
    },
    secondary: {
      main: blueGrey[500], // Вторичный цвет
    },

    // Для изменения цвета иконок

    // Другие настройки палитры...
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
