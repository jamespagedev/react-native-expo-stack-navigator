import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import axios from "axios";
import { API_URL, useAuth } from "../context/AuthContext";

// interface Props {}

export default function Login(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, onRegister } = useAuth();

  const login = async () => {
    try {
      await onLogin!(email, password);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const register = async () => {
    try {
      await onRegister!(email, password);
      login();
    } catch (error: any) {
      alert(error as any);
    }
  };

  useEffect(() => {
    const testCall = async () => {
      try {
        const usersResults = await axios.get(`${API_URL}/users`);
        console.log("usersResults:", usersResults);
      } catch (error: any) {
        console.log("error:", error);
      }
    };
    testCall();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://galaxies.dev/img/logos/logo--blue.png" }}
        style={styles.image}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text: string) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(text: string) => setPassword(text)}
          value={password}
        />
        <Button onPress={login} title="Sign in" />
        <Button onPress={register} title="Create Account" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    gap: 10,
    width: "60%",
  },
  image: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
