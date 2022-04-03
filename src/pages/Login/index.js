import React, {useState} from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { Touchable } from 'react-native-web';

import { StatusBar } from 'expo-status-bar';

// formik
import { Formik } from 'formik';

// icons
import {Octicons} from '@expo/vector-icons';

import {
  StyledContainer, 
  InnerContainer, 
  PageLogo, 
  PageTitle, 
  SubTitle, 
  StyledFormArea, 
  LeftIcon, 
  StyledInputLabel, 
  StyledTextInput, 
  RightIcon,
  StyledButton, 
  ButtonText,
  MsgBox,
  Line,
  Colors
} from '../../../components/styles';

import MyTextInput from '../MyTextInput';

// colors
const {brand, darkLight} = Colors;

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);


  return (
    <StyledContainer>
      <StatusBar style="dark"/>
      <InnerContainer>
        <View>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Image style={{width: 200, height: 200, alignSelf: 'center'}} resizeMode="contain" source={require('../../../assets/logo.png')} />
          <Text style={styles.message}>Medicine Labs</Text>
          <Text style={styles.message}>Account Login</Text>
        </Animatable.View>
        </View>

          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="your@email.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />

                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Login </ButtonText>
                </StyledButton>
                <Line/>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Entrar com Gov.br </ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#38A69D',
    justifyContent: 'center'
  },
  containerHeader:{
    marginTop: '5%',
    marginBottom: '8%',
    paddingStart: '5%',
    flexDirection: 'column',
  },
  message:{
    fontSize: 22,
     fontWeight: 'bold',
     color: '#FFF',
     alignItems: 'center',
     marginLeft: 7
  },
})

export default Login;