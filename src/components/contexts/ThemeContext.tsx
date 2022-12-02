import { createContext, useContext, useState } from 'react';

export interface IThemeSettings {
  darkMode: boolean;
}

export interface IThemeContext {
  settings: IThemeSettings;
  toggleDarkMode: () => void;
}

interface IThemeProviderProps {
  children: any;
}

const ThemeContext = createContext<IThemeContext | null>(null);

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider(props: IThemeProviderProps) {
  const [ settings, setSettings ] = useState<IThemeSettings>({
    darkMode: false,
  });

  const toggleDarkMode = () => {
    setSettings({ ...settings, darkMode: !settings.darkMode });
  };

  return (
    <ThemeContext.Provider value={{ settings, toggleDarkMode }}>
      { props.children }
    </ThemeContext.Provider>
  );
}