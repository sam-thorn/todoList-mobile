import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./assets/colors";
import Todo from "./components/todo";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's ToDos */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's To-Do</Text>
        {/* To-do List Items */}
        <View style={styles.items}>
          <Todo text={"Task 1"} />
          <Todo text={"Task 2"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {},
});
