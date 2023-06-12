import { api_v1_login_create } from "../../store/moodjiappdevAPI/authTokens.slice.js";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, StyleSheet, Alert } from "react-native";

const LoginScreen = ({
  navigation
}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    dispatch(api_v1_login_create({
      data: {
        username: email,
        password
      }
    })).then(response => {
      const result = unwrapResult(response);
      console.log(response);
      navigation.navigate("Untitled1", result);
    }).catch(err => {
      Alert.alert("Something went wrong!\n" + err.message);
      console.log(err.message);
    });
  };

  return <View style={styles.container}>
      <Image source={require("./logo.png")} style={styles.logo} resizeMode="cover" />
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" autoCapitalize="none" clearTextOnFocus={true} enablesReturnKeyAutomatically={true} rejectResponderTermination={true} scrollEnabled={true} />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdfbf9"
  },
  logo: {
    width: 356,
    height: 241,
    marginBottom: 30
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10
  },
  button: {
    backgroundColor: "#ff66ab",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});
export default LoginScreen;