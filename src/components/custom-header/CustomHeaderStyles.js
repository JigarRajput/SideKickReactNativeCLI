import {StyleSheet} from 'react-native';

const customHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.4,
    alignItems: 'center',
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
        paddingVertical: 10,
    paddingHorizontal:5
  },
    headerLeft: {
      paddingStart:5
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
  },
});

export default customHeaderStyles;
