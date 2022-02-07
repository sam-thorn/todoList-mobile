import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../assets/colors";
import CompleteTodo from "./CompleteTodo";

const Todo = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <CompleteTodo />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      {/* <View style={styles.circle}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "90%",
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: colors.lightpurple,
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default Todo;
