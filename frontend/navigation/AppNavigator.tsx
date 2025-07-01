import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SurahScreen from '../screens/SurahScreen';
import SurahListScreen from '../screens/SurahListScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
          animation: 'none',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SurahList" component={SurahListScreen} />
        <Stack.Screen name="Surah" component={SurahScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
