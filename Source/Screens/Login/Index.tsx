import React from 'react';
import {View, ScrollView, Image, KeyboardAvoidingView} from 'react-native';
import {useTheme, Text} from 'react-native-paper';
import makeStyles from './login.style';
import useLoginController from './login.controller';
import {Formik} from 'formik';
import TextField from '@components/TextField/TextField';
import ButtonPaper from '@components/Button/button';

const Login = (): JSX.Element => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const Lc = useLoginController();
  return (
    <View style={styles.mainCtr}>
      <ScrollView>
        <View style={styles.LoginCard}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/login.png')}
          />
          <Formik
            initialValues={{username: '', password: ''}}
            onSubmit={val => Lc.handleLogin(val)}
            validationSchema={Lc.loginValidationSchema}>
            {formik => (
              <View style={styles.loginContainer}>
                <KeyboardAvoidingView>
                  <View style={styles.fieldContainer}>
                    <Text variant="headlineSmall" style={styles.heading}>
                      Login
                    </Text>
                    <Text variant="bodySmall" style={styles.loginSubtext}>
                      Please sign in to continue
                    </Text>
                  </View>

                  <View style={styles.fieldContainer}>
                    <TextField
                      label="Email"
                      style={styles.FieldInput}
                      placeholder="Enter Email"
                      value={formik.values.username}
                      onChangeText={formik.handleChange('username')}
                      onBlur={formik.handleBlur('username')}
                      error={formik.errors.username ? true : false}
                      error_text={formik.errors.username}
                    />
                  </View>

                  <View style={styles.fieldContainer}>
                    <TextField
                      label="Password"
                      style={styles.FieldInput}
                      placeholder="Enter password"
                      value={formik.values.password}
                      secureText={true}
                      onChangeText={formik.handleChange('password')}
                      onBlur={formik.handleBlur('password')}
                      x
                      error={formik.errors.password ? true : false}
                      error_text={formik.errors.password}
                    />
                  </View>

                  <View style={styles.fieldContainer}>
                    <ButtonPaper
                      mode="elevated"
                      onPress={() => formik.handleSubmit()}>
                      Login
                    </ButtonPaper>
                  </View>

                  <View style={styles.label_text_conatiner}>
                    <Text variant="bodySmall" style={styles.white_text}>
                      Verified Email?{' '}
                      <Text
                        variant="titleSmall"
                        style={styles.white_text}
                        onPress={Lc.signUP}>
                        Reset password
                      </Text>
                    </Text>
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

export default Login;
