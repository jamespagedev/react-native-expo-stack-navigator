import React from "react";
import { Pressable, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { globalStyles } from "./styles";

// interface Props {}

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const handlePress = () => {
    router.replace("home");
  };
  return (
    <View style={globalStyles.container}>
      <Pressable onPress={handlePress}>
        <Text>Login</Text>
      </Pressable>
      <Link href={"/register"} asChild>
        <Pressable>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
}
