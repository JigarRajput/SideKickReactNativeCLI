import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({formik, name}) => {
  return (
    <View style={customInputStyles.inputContainer}>
      <TextInput
        secureTextEntry={name === 'password' ? true : false}
        placeholder={name}
        returnKeyType="next"
        autoCapitalize="none"
        placeholderTextColor={'#ccc'}
        style={customInputStyles.inputs}
        onChangeText={formik.handleChange(name)}
        onBlur={formik.handleBlur(name)}
        defaultValue={formik.values[name]}
        inputMode={name === 'mobile' ? 'numeric' : 'text'}
      />
      {formik.errors[name] && formik.touched[name] && (
        <Text style={customInputStyles.textWarning}>{formik.errors[name]}</Text>
      )}
    </View>
  );
};

const customInputStyles = StyleSheet.create({
  inputs: {
    fontSize: 12,
    color: 'black',
  },
  textWarning: {
    color: 'red',
    fontSize: 12,
    marginVertical: 2,
  },
  inputContainer: {
    width: '100%',
    paddingVertical: 2,
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default CustomInput;
