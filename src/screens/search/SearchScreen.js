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
import getAllProfiles from '../../utilities/getAllProfiles';
import {getByCategory, getAll} from '../../redux/actions/ProfilesActions';

const SearchScreen = () => {
  const category = useRoute()?.params?.category;
  const profiles = useSelector(state => state.profilesReducer.allProfiles);
  const dispatch = useDispatch();

  const filteredProfiles = useSelector(
    state => state.profilesReducer.filteredProfiles,
  );

  const fetchData = async () => {
    const res = await getAllProfiles();
    dispatch(getAll(res));
  };

  useEffect(() => {
    if (profiles.length === 0) {
      fetchData();
    }
    if (category) {
      const matchedProfiles = profiles.filter(profile =>
        profile.serviceCategory.toUpperCase().includes(category.toUpperCase()),
      );
      dispatch(getByCategory(matchedProfiles));
    }
    if (!category) {
      dispatch(getByCategory(profiles));
    }
  }, [category, profiles.length]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      {filteredProfiles.length === 0 ? (
        <ActivityIndicator size="large" animating={true} color={'#000'} />
      ) : (
        <FlatList
          data={filteredProfiles}
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
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
