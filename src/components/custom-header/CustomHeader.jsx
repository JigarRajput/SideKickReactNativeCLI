import {View, TouchableOpacity, SafeAreaView, Text, Image} from 'react-native';
import customHeaderStyles from './CustomHeaderStyles';
import {useSelector} from 'react-redux';

const CustomHeader = ({navigation, options, route}) => {
  const user = useSelector(state => state.userReducer.user);

  return (
    <SafeAreaView>
      <View style={customHeaderStyles.container}>
        <View style={customHeaderStyles.headerLeft}>
          <Text style={customHeaderStyles.headerText}>
            {`Welcome, ${user?.fullName?.split(' ')[0]}`}
          </Text>
        </View>
        <View style={customHeaderStyles.headerRight}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            style={customHeaderStyles.searchIcon}>
            <Image
              source={require('../../assets/search_icon.png')}
              style={customHeaderStyles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
