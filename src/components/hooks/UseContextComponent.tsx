import { useTheme } from '../contexts/ThemeContext';

export function UseContextComponent() {
  const themeContext = useTheme();

  const onClick = () => {
    if (themeContext) {
      themeContext.toggleDarkMode();
    }
  };

  return (<>
    <h2>useContext</h2>
    <button
      type="button"
      onClick={onClick}
      style={{
        color: themeContext?.settings.darkMode ? 'white' : 'black',
        backgroundColor: themeContext?.settings.darkMode ? 'black' : 'white',
      }}
    >
      {`Toggle to ${themeContext?.settings.darkMode ? 'light' : 'dark'} mode`}
    </button>
  </>);
}