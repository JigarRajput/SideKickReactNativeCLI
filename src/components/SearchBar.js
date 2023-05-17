// jai Ganesh
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import getAllProfiles from '../utilities/getAllProfiles';

const SearchBar = ({setMatchedProfiles}) => {
  const navigation = useNavigation();
  const [currentRoute, setCurrentRoute] = useState('HomeScreen');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllProfiles();
      if (searchText) {
        const filteredProfiles = res?.filter(profile =>
          profile?.serviceCategory
            ?.toUpperCase()
            .includes(searchText?.toUpperCase()),
        );
        setMatchedProfiles(filteredProfiles);
      }
    };
    fetchData();
  }, [searchText]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        currentRoute === 'HomeScreen' ? navigation.navigate('Search') : null;
      }}>
      <View style={styles.searchBar}>
        <Image
          style={{width: 20, height: 20, marginEnd: 10}}
          source={require('../assets/search_icon.png')}
        />
        <TextInput
          placeholder="search for services..."
          style={{width: '80%', backgroundColor: 'white'}}
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 8,
    paddingBottom: 20,
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
    paddingVertical: 0,
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
