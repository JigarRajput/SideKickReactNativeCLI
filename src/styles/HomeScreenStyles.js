import {StyleSheet, StatusBar, Platform} from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 5 : 0,
  },
  separator: {
    height: 5,
    width: '100%',
    backgroundColor: '#efefef',
    marginTop: 10,
  },
  imgSliderContainer: {
    paddingHorizontal: 10,
    height: 250,
  },
  welcomeText: {
    fontSize: 16,
    marginHorizontal: 20,
    fontWeight: '800',
    marginVertical: 10,
    fontFamily: 'serif',
    color: '#757474',
  },
});
