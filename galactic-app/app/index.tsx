import React from "react";
import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "./styles";

// interface Props {}

export default function LoginPage(): JSX.Element {
  return (
    <View style={globalStyles.container}>
      <Link href={"/register"}>
        <Pressable>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
}
