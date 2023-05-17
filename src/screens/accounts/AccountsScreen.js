import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ItemThikSeparator from './ItemThickSeparator';
import {
  Buildings,
  Chats,
  Gear,
  Gift,
  MapPin,
  Notepad,
  ShareNetwork,
  Star,
  Tag,
  ThumbsUp,
  Wallet,
} from 'phosphor-react-native';
import ItemThinSeparator from './ItemThinSeparator';
import {useSelector} from 'react-redux';

const AccountsScreen = ({navigation}) => {
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
          <Text style={{fontWeight: '500'}}>+91 {user.mobileNumber}</Text>
        </View>
        <ItemThikSeparator />
        <View
          style={{
            padding: 12,
            rowGap: 15,
            columnGap: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Chats size={32} />
          <Text>Help Center</Text>
        </View>
        <ItemThikSeparator />
        <View
          style={{
            padding: 12,
            rowGap: 15,
            columnGap: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Notepad size={32} />
          <Text>My bookings</Text>
        </View>
        <ItemThinSeparator />
        <View
          style={{
            padding: 12,
            rowGap: 15,
            columnGap: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <MapPin size={32} />
          <Text>Manage Addresses</Text>
        </View>
        <ItemThinSeparator />
        <View
          style={{
            padding: 12,
            rowGap: 15,
            columnGap: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Buildings size={32} />
          <Text>About Us</Text>
        </View>
        <ItemThinSeparator />
        <View
          style={{
            padding: 12,
            rowGap: 15,
            columnGap: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <ShareNetwork size={32} />
          <Text>Share Sidekick Finder</Text>
        </View>
        <ItemThinSeparator />
        <View
          style={{
            padding: 12,
            rowGap: 15,
            columnGap: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Tag size={32} />
          <Text>Refer and Earn</Text>
        </View>
        <ItemThinSeparator />
        <View
          style={{
            padding: 12,
            rowGap: 15,
            columnGap: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Star weight="fill" size={32} />
          <Text>My rating</Text>
        </View>
        <ItemThinSeparator />
        <View
          style={{
            padding: 12,
            rowGap: 15,
            columnGap: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Gift weight="fill" size={32} />
          <Text>My Gift cards</Text>
        </View>
        <ItemThinSeparator />
        <View
          style={{
            padding: 12,
            rowGap: 15,
            columnGap: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Wallet weight="fill" size={32} />
          <Text>My wallet</Text>
        </View>
        <ItemThinSeparator />
        <View
          style={{
            padding: 12,
            rowGap: 15,
            columnGap: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Wallet weight="fill" size={32} />
          <Text>Schedule booking</Text>
        </View>
        <ItemThinSeparator />

        <View
          style={{
            padding: 12,
            rowGap: 15,
            columnGap: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <ThumbsUp size={32} />
          <Text>Rate Sidekick finder</Text>
        </View>
        <ItemThinSeparator />
        <View
          style={{
            padding: 12,
            rowGap: 15,
            columnGap: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Gear weight="fill" size={32} />
          <Text>Settings</Text>
        </View>
        <ItemThinSeparator />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 40,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
