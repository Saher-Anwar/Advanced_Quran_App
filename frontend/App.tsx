import { LinearGradient } from 'expo-linear-gradient';
import './global.css';
import AppNavigator from 'navigation/AppNavigator';
import { PaperProvider } from 'react-native-paper';
import { APP_THEMES } from 'utils/constants';

export default function App() {
  return (
    <PaperProvider>
      <LinearGradient
        colors={APP_THEMES.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1">
        <AppNavigator />
      </LinearGradient>
    </PaperProvider>
  );
}
