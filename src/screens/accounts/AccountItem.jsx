import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import ItemThinSeparator from './ItemThinSeparator';

const AccountItem = ({icon, text}) => {
  return (
    <>
      <View style={itemStyle.container}>
        <Image source={icon} style={itemStyle.iconStyle} />
        <Text style={itemStyle.textStyle}>{text}</Text>
      </View>
      <ItemThinSeparator />
    </>
  );
};

const itemStyle = StyleSheet.create({
  container: {
    padding: 12,
    rowGap: 15,
    columnGap: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  textStyle: {
    fontSize: 14,
  },
});

export default AccountItem;
