import React, { useEffect, useCallback } from 'react';
import { View, Button, Text, Alert, BackHandler } from 'react-native';
import styles from "../screens/styles";
import { connect } from 'react-redux'

const LoginScreen = (props, { postLoguser }) => {
  const navigation = props.navigation
  const onSubmit = useCallback(async () => {
    const userLogin = await postLoguser();
    if (userLogin.status) {
      navigation.navigate('Home')
    }
  }, []);

  function handleBackButtonClick() {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  }


  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, [])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.LogincentreContainer}>
        <Text style={styles.loginLinesLogin}>Login</Text>
        <Button onPress={onSubmit} title="Sign in wit Reddit" style={styles.button} />
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  login_response: state.login_response,
})
const mapDispatchToProps = (dispatch) => ({
  postLoguser: (userlog) => dispatch({ type: "LOGIN_REQUEST", userlog })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

