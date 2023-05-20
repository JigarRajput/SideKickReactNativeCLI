import {View, Text, FlatList} from 'react-native';
import ProfileCard from '../components/ProfileCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import applicationStyles from '../styles/ApplicationStyles';
import {useSelector} from 'react-redux';

const SavedScreen = () => {
  const savedProfiles = useSelector(
    state => state.profilesReducer.savedProfiles,
  );
  return (
    <SafeAreaView style={applicationStyles.container}>
      {savedProfiles.length == 0 ? (
        <SavedScreenEmpty />
      ) : (
        <FlatList
          data={savedProfiles}
          renderItem={({item, index}) => <ProfileCard profile={item} />}
        />
      )}
    </SafeAreaView>
  );
};

function SavedScreenEmpty() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>No profiles saved yet!</Text>
    </View>
  );
}

export default SavedScreen;
