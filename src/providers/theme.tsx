import { FC, PropsWithChildren, useCallback, useMemo, useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { ThemeContext, ThemeContextData } from "../contexts";

import { themeService } from "../services";
import { GlobalStyle } from "../styles/global-style";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(
    themeService.getThemeColors("light")
  );

  const toggleThemeColor = useCallback<ThemeContextData["toggleThemeColor"]>(
    (themeChoice) => {
      setSelectedTheme(themeService.getThemeColors(themeChoice));
    },
    []
  );

  const themeContextData = useMemo<ThemeContextData>(
    () => ({
      colors: selectedTheme,
      toggleThemeColor,
    }),
    [toggleThemeColor, selectedTheme]
  );

  return (
    <StyledComponentsThemeProvider theme={selectedTheme}>
      <ThemeContext.Provider value={themeContextData}>
        {children}
        <GlobalStyle />
      </ThemeContext.Provider>
    </StyledComponentsThemeProvider>
  );
};
