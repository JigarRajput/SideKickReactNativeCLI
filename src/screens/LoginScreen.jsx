import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Snackbar} from 'react-native-paper';
import React, {useState, useContext} from 'react';
import loginStyles from '../styles/LoginScreenStyles';
import images from '../constants/images';
import {useFormik} from 'formik';
import CustomInput from '../components/CustomInput';
import {loginSchema} from '../utilities/validationSchemas';
import {setUser} from '../redux/actions/UserActions';
import {useDispatch} from 'react-redux';

const LoginScreen = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      mobile: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async function (values) {
      const user = {
        mobileNumber: values.mobile,
        password: values.password,
      };

      try {
        const response = await fetch('http://192.168.43.71:3000/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...user,
          }),
        });

        const resMessage = await response.json();

        const paramsUser = {
          city: resMessage?.user?.city,
          state: resMessage?.user?.state,
          mobileNumber: resMessage?.user?.mobileNumber,
          country: resMessage?.user?.country,
          fullName: resMessage?.user?.fullName,
        };

        setLoginMessage(resMessage.message); // for snackbar message
        setVisible(true); // for showing snackbar

        if (resMessage.success === true && response.status === 200) {
          dispatch(setUser(paramsUser));
          navigation.replace('BottomTabs');
        } else {
          if (resMessage.success === false) setVisible(true);
        }
      } catch (error) {
        console.log('error was', error);
      }
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={loginStyles.topContainer}>
          <Image
            source={images.loginBanner}
            style={{width: 300, height: 300}}
            resizeMode="contain"
          />
        </View>
        <View style={loginStyles.bottom}>
          <Text style={loginStyles.loginContinueText}>Login to Continue.</Text>
          <CustomInput formik={formik} name={'mobile'} />
          <CustomInput formik={formik} name={'password'} />
          <TouchableOpacity
            style={loginStyles.loginBtn}
            onPress={formik.handleSubmit}>
            <Text style={loginStyles.loginBtnText}>{'Login'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={loginStyles.signupText}>Not a user? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: 'X',
          onPress: () => {
            setVisible(false);
          },
        }}>
        {loginMessage}
      </Snackbar>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
