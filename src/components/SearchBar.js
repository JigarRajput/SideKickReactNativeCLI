// jai Ganesh
import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import getAllProfiles from '../utilities/getAllProfiles';
import {useDispatch, useSelector} from 'react-redux';
import {getAll, getByCategory} from '../redux/actions/ProfilesActions';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const profiles = useSelector(state => state.profilesReducer.allProfiles);
  const filteredProfiles = useSelector(
    state => state.profilesReducer.filteredProfiles,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchText) {
      const filteredProfiles = profiles?.filter(profile =>
        profile?.serviceCategory
          ?.toUpperCase()
          .includes(searchText?.toUpperCase()),
      );
      dispatch(getByCategory(filteredProfiles));
    }
  }, [searchText, profiles]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          style={{width: 20, height: 20, marginEnd: 10}}
          source={require('../assets/search_icon.png')}
        />
        <TextInput
          placeholder="search for services..."
          placeholderTextColor={'#000000'}
          style={{width: '80%', color: '#000000'}}
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  searchBar: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    borderStyle: 'solid',
    backgroundColor: 'white',
    borderColor: '#636363',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 10,
  },
});

export default SearchBar;
