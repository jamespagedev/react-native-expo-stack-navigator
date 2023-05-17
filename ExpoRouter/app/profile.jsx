import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useRouter, useSearchParams } from "expo-router";

export default function Profile() {
  const router = useRouter();
  const { firstname, lastname } = useSearchParams();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>
        Hello {firstname} {lastname}
      </Text>
      <Button title="Go back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
