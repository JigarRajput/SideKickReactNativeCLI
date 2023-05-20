import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SearchScreen from '../search/SearchScreen';
import {useRoute} from '@react-navigation/native';
import CustomHeader from '../../components/custom-header/CustomHeader';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const routeParams = useRoute().params;
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          header: ({navigation, route, options}) => (
            <CustomHeader navigation={navigation} route={route} options={options} />
          ),
        }}
        initialParams={routeParams}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Search"
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
