import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import colors from "./assets/colors";
import Todo from "./components/todo";
import GradientText from "./components/gradientText";

export default function App() {
  const [todo, setTodo] = useState();
  const [todoItems, setTodoItems] = useState([]);

  const [loaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const handleAddTodo = () => {
    Keyboard.dismiss();
    setTodoItems([...todoItems, todo]);
    setTodo(null);
  };

  const completeTodo = (item) => {
    let todosCopy = [...todoItems];
    todosCopy.splice(item, 1);
    setTodoItems(todosCopy);
  };

  return (
    <View style={styles.container}>
      {/* Today's ToDos */}
      <View style={styles.tasksWrapper}>
        <GradientText style={styles.nameTitle}>Hi Zortob 🖖</GradientText>
        <Text style={styles.sectionTitle}>These Are Today's Tasks:</Text>
        {/* To-do List Items */}
        <View style={styles.items}>
          {todoItems.map((todo, item) => {
            return (
              <TouchableOpacity onPress={() => completeTodo(item)}>
                <Todo key={item} text={todo} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Write a Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeToDoWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"ADD A TASK..."}
          value={todo}
          onChangeText={(text) => setTodo(text)}
        />
        <TouchableOpacity onPress={() => handleAddTodo()}>
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
    backgroundColor: colors.lightpurple,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 18,
  },
  nameTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Poppins-Black",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
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
    width: 260,
    fontFamily: "Poppins-Light",
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
    fontSize: 24,
    fontFamily: "Poppins-Regular",
    color: colors.silvergrey,
  },
});
