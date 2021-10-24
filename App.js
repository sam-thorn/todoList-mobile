import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
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

      {/* Write a Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeToDoWrapper}
      >
        <TextInput style={styles.input} placeholder={"WRITE A TASK"} />
        <TouchableOpacity>
          <View style={styles.addToDoWrapper}>
            <Text style={styles.addButton}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 18,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 32,
  },
  writeToDoWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 64,
    borderColor: colors.silvergrey,
    borderWidth: 1,
    width: 250,
  },
  addToDoWrapper: {
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    borderColor: colors.silvergrey,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    color: colors.silvergrey,
  },
});
