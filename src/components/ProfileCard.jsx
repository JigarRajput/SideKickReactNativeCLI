import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import {useState, useEffect} from 'react';
import {profileCardStyles} from '../styles/ProfileCardStyles';
import getFirstLetters from '../utilities/getFirstLetters';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {removeSave, saveProfile} from '../redux/actions/ProfilesActions';
import {setReceiver} from '../redux/actions/ChatHelperActions';

const ProfileCard = ({profile}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false);
  const savedProfiles = useSelector(
    state => state.profilesReducer.savedProfiles,
  );
  const avatarLabel = getFirstLetters(profile?.fullName);

  useEffect(() => {
    const index = savedProfiles.findIndex(
      _profile => _profile._id === profile._id,
    );
    if (index !== -1) {
      setIsSaved(true);
    }
  }, []);

  const handleCall = async () => {
    try {
      await Linking.openURL('tel:+' + profile?.mobileNumber);
    } catch (e) {}
  };

  const handleSaveProfile = () => {
    if (isSaved === false) {
      dispatch(saveProfile(profile));
      setIsSaved(true);
    } else {
      dispatch(removeSave(profile));
      setIsSaved(false);
    }
  };

  return (
    <View style={profileCardStyles.mainContainer}>
      <View style={profileCardStyles.topContainer}>
        <View style={profileCardStyles.topLeftContainer}>
          <Avatar.Text
            size={42}
            label={avatarLabel}
            style={{backgroundColor: '#000', paddingBottom: 2}}
          />
          <View style={profileCardStyles.nameServiceContainer}>
            <Text style={profileCardStyles.nameText}>{profile.fullName}</Text>
            <Text>{profile.serviceCategory}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(setReceiver(profile));
            navigation.navigate('Chats', {screen: 'Message'});
          }}>
          <Image
            source={require('../assets/chatIcon.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
      <View style={profileCardStyles.bottomContainer}>
        <View style={profileCardStyles.locationContainer}>
          <Image
            source={require('../assets/location.png')}
            style={{width: 20, height: 20}}
          />
          <Text style={profileCardStyles.areaText}>{profile.city}</Text>
        </View>
        <TouchableOpacity
          style={profileCardStyles.contactContainer}
          onPress={handleCall}>
          <Image
            source={require('../assets/phoneIcon.png')}
            style={{width: 20, height: 20}}
          />
          <Text style={profileCardStyles.numberText}>
            {profile.mobileNumber}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSaveProfile}>
          {!isSaved ? (
            <Image
              source={require('../assets/saveIcon.png')}
              style={{width: 20, height: 20}}
            />
          ) : (
            <Image
              source={require('../assets/savedIcon.png')}
              style={{width: 20, height: 20}}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileCard;
