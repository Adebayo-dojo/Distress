import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function CustomInput({ placeholder }) {
  return (
    <View style={{ position: "relative", marginHorizontal: 32, marginTop: 32 }}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#7a7a7a"}
        style={{
          // paddingLeft: 32,
          paddingBottom: 16,
          color: "#e9e9e9",
          // backgroundColor: "white",
          //   paddingVertical: 19,
          borderBottomColor: "#363636",
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
