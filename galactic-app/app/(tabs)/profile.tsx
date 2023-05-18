import React from "react";
import { View } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../styles";

// interface Props {}

export default function ProfilePage(): JSX.Element {
  return (
    <View style={globalStyles.container}>
      <Link href="/">Log out</Link>
    </View>
  );
}
