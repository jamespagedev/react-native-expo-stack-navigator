import React from "react";
import { Text, View } from "react-native";
import { Stack, useSearchParams } from "expo-router";
import { globalStyles } from "../../styles";

// interface Props {}

export default function NewsDetails(): JSX.Element {
  const { id } = useSearchParams();
  return (
    <View style={globalStyles.container}>
      <Stack.Screen options={{ headerTitle: `News #${id}` }} />
      <Text>My News: {id}</Text>
    </View>
  );
}
