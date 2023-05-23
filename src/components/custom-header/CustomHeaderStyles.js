import {StyleSheet} from 'react-native';

const customHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  headerLeft: {
    paddingStart: 5,
  },
  headerRight: {},
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  searchIcon: {
    alignSelf: 'flex-end',
    paddingEnd: 10,
    width: 25,
    height: 25,
  },
});

export default customHeaderStyles;
