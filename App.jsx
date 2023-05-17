import {NavigationContainer} from '@react-navigation/native';
import {MyTheme} from './src/constants/theme';
import MainStack from './src/Navigation/MainStack';
import ProfileProvider from './context/ProfilesContext';
import SaveProfileProvider from './context/SaveProfilesContext';
import UserProvider from './context/UserContext';
import ChatProvider from './context/ChatsContext';

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
