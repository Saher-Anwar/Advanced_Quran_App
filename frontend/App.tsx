import TempScreen from 'screens/TempScreen';
import './global.css';
import AppNavigator from 'navigation/AppNavigator';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
