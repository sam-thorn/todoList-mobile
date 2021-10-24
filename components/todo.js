import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Todo = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}></View>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Todo;
