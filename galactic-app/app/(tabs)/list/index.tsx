import React from "react";
import { View } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles";

// interface Props {}

export default function ListPage(): JSX.Element {
  return (
    <View style={globalStyles.container}>
      <Link href="/list/1">News One</Link>
      <Link href="/list/2">News Two</Link>
      <Link href="/list/3">News Three</Link>
    </View>
  );
}
