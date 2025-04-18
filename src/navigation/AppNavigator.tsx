import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import TransactionScreen from '../screens/Transaction';
import BottomNavigation from './BottomNavigation';

export type RootStackParamList = {
  HomeScreen: undefined;
  TransactionScreen: undefined;
  BottomNavigation: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={() => ({
            title: 'Home',
          })}
        />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen
          name="TransactionScreen"
          component={TransactionScreen}
          options={() => ({
            title: 'Transaction',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
