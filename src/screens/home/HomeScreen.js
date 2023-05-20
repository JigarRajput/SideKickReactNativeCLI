import {Text, View, ScrollView, Image} from 'react-native';
import CategoryCards from '../../components/CategoryCards';
import SearchBar from '../../components/SearchBar';
import {ImageSlider} from 'react-native-image-slider-banner';
import {SafeAreaView} from 'react-native';
import {homeScreenStyles} from '../../styles/HomeScreenStyles';
import {useSelector} from 'react-redux';
import {useMemo} from 'react';

const HomeScreen = () => {
  const user = useSelector(state => state.userReducer.user);

  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <ScrollView>
        <Text
          style={{
            paddingHorizontal: 18,
            paddingVertical: 10,
            fontSize: 16,
            fontWeight: '600',
          }}>
          Find by Categories...
        </Text>
        <CategoryCards />
        <View style={homeScreenStyles.separator} />
        <Text
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            fontSize: 18,
            fontWeight: '600',
          }}>
          Recomended for you...
        </Text>
        <View style={homeScreenStyles.imgSliderContainer}>
          <ImageSlider
            style={{borderRadius: 10}}
            data={[
              {img: require('../../assets/cooking.png')},
              {img: require('../../assets/gardening.png')},
              {img: require('../../assets/house_keeping.png')},
            ]}
            localImg={true}
            autoPlay={true}
            timer={2000}
            caroselImageStyle={{
              maxHeight: 230,
              maxWidth: '96%',
              borderRadius: 10,
              alignSelf: 'center',
              resizeMode: 'contain',
            }}
            indicatorContainerStyle={{
              marginVertical: 0,
              position: 'relative',
              bottom: 0,
              borderRadius: 10,
            }}
          />
        </View>
        <View style={homeScreenStyles.separator} />

        <View style={{width: '100%', height: 200}}>
          <Image
            style={{width: '100%', height: 200}}
            source={require('../../assets/refer.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
