import React, { useEffect, useState } from "react";
import axios from "axios";
import { ScrollView, StyleSheet, Text } from "react-native";
import { API_URL } from "../context/AuthContext";

// interface Props {}

interface User {
  _id: string;
  createdAt: string;
  email: string;
}

export default function Home(): JSX.Element {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userResults = await axios.get(`${API_URL}/users`);
        setUsers(userResults.data);
      } catch (error: any) {
        console.log("error:", error.message);
      }
    };
    loadUser();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {users.map((user: User) => (
        <Text key={user._id}>{user.email}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
