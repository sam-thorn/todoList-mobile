import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../assets/colors";

const Todo = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
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
  square: {
    width: 24,
    height: 24,
    borderRadius: 4,
    marginRight: 16,
    backgroundColor: colors.brightgreen,
    opacity: 0.4,
  },
  itemText: {
    maxWidth: "80%",
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
