import {useState, useEffect, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {RadioButton} from 'react-native-paper';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {signUpSchema} from '../utilities/validationSchemas';
import CustomInput from '../components/CustomInput';
import DropDown from '../components/DropDown';
import {
  getAllCitiesOfState,
  getAllStatesOfCountry,
  getCountries,
} from '../utilities/getStateCityCountry';
import {useFormik} from 'formik';
import serviceCategories from '../constants/serviceCategories';
import {setUser} from '../redux/actions/UserActions';

const SignupScreen = ({navigation}) => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [countryOpen, setCountryOpen] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [states, setStates] = useState();
  const [cities, setCities] = useState();
  const [isServicePerson, setIsServicePerson] = useState(false);
  const [category, setCategory] = useState('');
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // initialize countries in useMemo and dependencies as 1 because this array is never going to change
  const countries = useMemo(() => getCountries(), [1]);
  const dispatch = useDispatch();

  useEffect(() => {
    setStates(getAllStatesOfCountry(country.value));
    setCities(getAllCitiesOfState(country.value, state.value));
  }, [state, country]);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      mobile: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: async function (values) {
      if (state !== '' && country !== '' && city !== '') {
        let user = {
          fullName: values.fullName,
          mobileNumber: values.mobile,
          password: values.password,
          city: city.label,
          state: state.label,
          country: country.label,
        };

        if (isServicePerson) {
          user = {
            ...user,
            serviceCategory: category.label,
          };
        } else {
          user = {
            ...user,
          };
        }

        try {
          setIsLoading(true);
          const response = await fetch(
            'https://sidekick-e028.onrender.com/user/signup',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...user,
              }),
            },
          );

          const resMessage = await response.json();
          // const resMessage = JSON.parse(parsedRes);
          setIsLoading(false);
          if (
            resMessage.message === 'User created' &&
            response.status === 201
          ) {
            dispatch(setUser(resMessage?.user));
            navigation.replace('BottomTabs', {user: resMessage?.user});
          }
          // console.log("response is", parsedRes);
        } catch (error) {
          console.log('error was', error);
        }
      }
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 34,
            fontWeight: '600',
            color: 'black',
          }}>
          Sign Up
        </Text>
        <Text
          style={{
            alignSelf: 'center',
          }}>
          Register to find your SideKick
        </Text>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <CustomInput formik={formik} name={'fullName'} />
          <CustomInput formik={formik} name={'mobile'} />
          <CustomInput formik={formik} name={'password'} />
          <DropDown
            options={countries}
            onSelect={setCountry}
            isOpen={countryOpen}
            setIsOpen={setCountryOpen}
            value={country}
            name={'country'}
          />

          <View style={styles.cityStateContainer}>
            <View style={styles.dropDownContainer}>
              <DropDown
                options={states}
                onSelect={setState}
                isOpen={stateOpen}
                setIsOpen={setStateOpen}
                value={state}
                name={'state'}
              />
            </View>
            <View style={styles.dropDownContainer}>
              <DropDown
                options={cities}
                onSelect={setCity}
                isOpen={cityOpen}
                setIsOpen={setCityOpen}
                value={city}
                name={'city'}
              />
            </View>
          </View>

          <RadioButton.Group
            onValueChange={newValue => setIsServicePerson(newValue)}
            value={isServicePerson}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '92%',
                marginVertical: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton uncheckedColor="#ccc" color="#000" value={true} />
                <Text>I provide Service</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton uncheckedColor="#ccc" color="#000" value={false} />
                <Text>Looking for Service</Text>
              </View>
            </View>
          </RadioButton.Group>
          {isServicePerson && (
            <>
              <DropDown
                options={serviceCategories}
                onSelect={setCategory}
                isOpen={categoryOpen}
                setIsOpen={setCategoryOpen}
                value={category}
                name={'Select Service Category'}
              />
            </>
          )}
          <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
            {isLoading ? (
              <ActivityIndicator
                animating={isLoading}
                size={'small'}
                color={'#ffffff'}
              />
            ) : (
              <Text style={styles.buttonText}>{'Register'}</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('Login');
            }}>
            <Text
              style={{
                color: '#000000',
                alignSelf: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}>
              Already registerd?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    paddingTop: 80,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cityStateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dropDownContainer: {
    width: '48%',
  },
  snackBar: {
    backgroundColor: 'green',
  },
});

export default SignupScreen;
