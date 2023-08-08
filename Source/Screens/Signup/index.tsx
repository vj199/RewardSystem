import React from 'react';
import {View, ScrollView, Image, KeyboardAvoidingView} from 'react-native';
import {useTheme, Text} from 'react-native-paper';
import makeStyles from '../Login/login.style';
import {Formik} from 'formik';
import useSignupController from './Signup.controller';
import TextField from '@components/TextField/TextField';
import ButtonPaper from '@components/Button/button';

const Index = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const Sc = useSignupController();
  return (
    <View style={styles.mainCtr}>
      <ScrollView>
        <View>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/signUp.png')}
          />
          <Formik
            initialValues={{
              currentpassword: '',
              newpassword: '',
              confirmPassword: '',
              email: '',
            }}
            onSubmit={val => Sc.handleSignup(val)}
            validationSchema={Sc.changePasswordValidationSchema}>
            {formik => (
              <View style={styles.loginContainer}>
                <View style={styles.fieldContainer}>
                  <Text variant="headlineSmall" style={styles.heading}>
                    Reset Password
                  </Text>
                </View>

                <View style={styles.fieldContainer}>
                  <Text variant="bodySmall">
                    Please enter email address to send verification link
                  </Text>
                </View>
                <KeyboardAvoidingView>
                  <View style={styles.LoginCard}>
                    <View style={styles.fieldContainer}>
                      <TextField
                        style={styles.FieldInput}
                        placeholder="Enter email"
                        label="Email"
                        value={formik.values.email}
                        mode="outlined"
                        onChangeText={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        error={formik.errors.email ? true : false}
                        error_text={formik.errors.email}
                      />
                    </View>

                    <View style={styles.fieldContainer}>
                      <ButtonPaper
                        onPress={() => formik.handleSubmit()}
                        mode="elevated">
                        Send Link
                      </ButtonPaper>
                    </View>

                    <View style={styles.label_text_conatiner}>
                      <Text variant="bodySmall" style={styles.white_text}>
                        Already verified?{' '}
                        <Text
                          variant="titleSmall"
                          onPress={Sc.handleLogin}
                          style={styles.white_text}>
                          Login
                        </Text>
                      </Text>
                    </View>
                  </View>
                </KeyboardAvoidingView>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
