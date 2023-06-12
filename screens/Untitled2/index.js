import { api_v1_login_create } from "../../store/testappexamplealineAPI/authTokens.slice.js";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, StyleSheet } from "react-native";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    dispatch(api_v1_login_create({
      data: {
        username: email,
        password
      }
    }));
  };

  return <View style={styles.container}>
      <Image source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} style={styles.logo} />
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
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
    backgroundColor: "#F5FCFF"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15
  },
  button: {
    backgroundColor: "#1E90FF",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15
  },
  buttonText: {
    color: "white",
    fontSize: 16
  }
});
export default LoginScreen;