
import React from "react";
import StyledText from "./StyledText.jsx";
import { View } from "react-native";

const RepositoryStats = (props) => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        
        <View align="center">
          <StyledText fontWeight="bold" colors="secundary">Nombre:</StyledText>
          <StyledText  align="center" fontSize="subHeading" colors="primary">
            {props.firstName}
          </StyledText>
        </View>
  
        <View align="center">
          <StyledText fontWeight="bold" align="center" colors="secundary">Mail:</StyledText>
          <StyledText colors="primary" align="center">{props.email}</StyledText>
        </View>
      </View>
    );
  };
  export default RepositoryStats;