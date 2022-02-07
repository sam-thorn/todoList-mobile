import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../assets/colors";

//Todo:
// manage state in todo.js
// refactor app.js to get the bits needed to manage state onPress

const CompleteTodo = (props) => {
  return <View style={styles.square} />;
};

const styles = StyleSheet.create({
  square: {
    width: 24,
    height: 24,
    borderRadius: 4,
    marginRight: 16,
    backgroundColor: colors.brightgreen,
    opacity: 0.4,
  },
});

export default CompleteTodo;
