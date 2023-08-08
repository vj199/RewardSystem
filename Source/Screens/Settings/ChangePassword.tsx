import React from 'react';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {useTheme, Text} from 'react-native-paper';
import makeStyles from '../Login/login.style';
import {Formik} from 'formik';
import TextField from '@components/TextField/TextField';
import ButtonPaper from '@components/Button/button';
import useSettingController from './setting.controller';

const ChangePassword = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const Sc = useSettingController();
  return (
    <View style={styles.mainCtr}>
      <ScrollView>
        <View>
          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            onSubmit={val => Sc.changePassword(val.password)}
            validationSchema={Sc.passwordValidationSchema}>
            {formik => (
              <View style={styles.loginContainer}>
                <View style={styles.fieldContainer}>
                  <Text variant="headlineSmall" style={styles.heading}>
                    Change Password
                  </Text>
                </View>
                <KeyboardAvoidingView>
                  <View style={styles.LoginCard}>
                    <View style={styles.fieldContainer}>
                      <TextField
                        style={styles.FieldInput}
                        placeholder="Enter Password"
                        label="Password"
                        secureText={true}
                        value={formik.values.password}
                        mode="outlined"
                        onChangeText={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        error={formik.errors.password ? true : false}
                        error_text={formik.errors.password}
                      />
                    </View>

                    <View style={styles.fieldContainer}>
                      <TextField
                        style={styles.FieldInput}
                        placeholder="Confirm Password"
                        label="Confirm Password"
                        secureText={true}
                        value={formik.values.confirmPassword}
                        mode="outlined"
                        onChangeText={formik.handleChange('confirmPassword')}
                        onBlur={formik.handleBlur('confirmPassword')}
                        error={formik.errors.confirmPassword ? true : false}
                        error_text={formik.errors.confirmPassword}
                      />
                    </View>

                    <View style={styles.fieldContainer}>
                      <ButtonPaper
                        onPress={() => formik.handleSubmit()}
                        mode="elevated">
                        Change Password
                      </ButtonPaper>
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

export default ChangePassword;
