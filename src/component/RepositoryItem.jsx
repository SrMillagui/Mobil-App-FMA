import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats.jsx"

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#131638"
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 4
  }
});

const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      {" "}
      <StyledText colors="primary">Texto de view de ejemplo para ver sus propiedades</StyledText>
      <Image style={styles.image} source={{uri: props.ownerAvatarUrl}}/>
      <RepositoryStats {...props} />
    </View>
  );
};

export default RepositoryItem;
