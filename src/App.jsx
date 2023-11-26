import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import AppRouter from './routes/AppRouter';
import appTheme from './configs/theme';

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <AppRouter></AppRouter>
    </ThemeProvider>
  )
}

export default App;
