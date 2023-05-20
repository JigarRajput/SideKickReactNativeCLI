import {NavigationContainer} from '@react-navigation/native';
import {MyTheme} from './src/constants/theme';
import MainStack from './src/Navigation/MainStack';

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
