import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useEffect} from 'react';
import SearchBar from '../../components/SearchBar';
import ProfileCard from '../../components/ProfileCard';
import {useRoute} from '@react-navigation/native';
import ListEmpty from '../../components/ListEmpty';
import {useDispatch, useSelector} from 'react-redux';
import {getByCategory} from '../../redux/actions/ProfilesActions';

const SearchScreen = () => {
  console.log('matched profiles', matchedProfiles);

  const category = useRoute()?.params?.category;
  const profiles = useSelector(state => state.profilesReducer.allProfiles);
  const dispatch = useDispatch();
  console.log(profiles, 'all profiles');

  const matchedProfiles = useSelector(
    state => state.profilesReducer.filteredProfiles,
  );

  useEffect(() => {
    if (category) {
      const filteredProfiles = profiles.filter(profile =>
        profile.serviceCategory.toUpperCase().includes(category.toUpperCase()),
      );
      console.log('filteredProfiles', filteredProfiles);
      dispatch(getByCategory(filteredProfiles));
    } else {
      console.log('filteredProfiles', profiles);
      dispatch(getByCategory(profiles));
    }
  }, [category]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      {matchedProfiles.length === 0 ? (
        <ActivityIndicator size="large" animating={true} color={'#000'} />
      ) : (
        <FlatList
          data={matchedProfiles}
          ListEmptyComponent={<ListEmpty />}
          renderItem={({item}) => <ProfileCard profile={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
  },
});
