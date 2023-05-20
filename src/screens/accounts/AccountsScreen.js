import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ItemThikSeparator from './ItemThickSeparator';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../redux/actions/UserActions';
import AccountItem from './AccountItem';

const AccountsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);
  return (
    <SafeAreaView>
      <ScrollView>
        <Text
          style={{
            fontSize: 22,
            paddingVertical: 8,
            backgroundColor: '#000',
            color: '#fff',
            paddingHorizontal: 15,
          }}>
          My Profile
        </Text>
        <View style={{padding: 12, rowGap: 15}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            Verified Customer
          </Text>
          <Text style={{fontWeight: '500'}}>
            +91 {user.mobileNumber} {` (${user.fullName})`}
          </Text>
        </View>
        <ItemThikSeparator />
        <AccountItem
          icon={require('../../assets/chatsIcon.png')}
          text={'Help center'}
        />
        <AccountItem
          icon={require('../../assets/bookingsIcon.png')}
          text={'My Bookings'}
        />
        <AccountItem
          icon={require('../../assets/location.png')}
          text={'Manage Addresses'}
        />
        <AccountItem
          icon={require('../../assets/info.png')}
          text={'About Us'}
        />
        <AccountItem
          icon={require('../../assets/share.png')}
          text={'Share SideKick Finder'}
        />
        <AccountItem
          icon={require('../../assets/referIcon.png')}
          text={'Refer and Earn'}
        />
        <AccountItem
          icon={require('../../assets/star.png')}
          text={'My Rating'}
        />
        <AccountItem
          icon={require('../../assets/myGift.png')}
          text={'My Gifts'}
        />
        <AccountItem
          icon={require('../../assets/wallet.png')}
          text={'My Wallet'}
        />
        <AccountItem
          icon={require('../../assets/setting.png')}
          text={'Settings'}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 40,
          }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(setUser({}));
              navigation.navigate('Login');
            }}>
            <Text style={{fontSize: 18, fontWeight: '500', color: 'red'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountsScreen;
