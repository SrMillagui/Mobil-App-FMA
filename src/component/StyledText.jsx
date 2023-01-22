import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "./theme.js";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSize.body,
    color: theme.colors.TextPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeigths.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },

  colorSecundary: {
    color: theme.colors.textSecundary,
  },

  bold: {
    fontWeight: theme.fontWeigths.bold,
  },

  subHeading: {
    fontSize: theme.fontSize.subHeading,
  },
  TextAlignCenter: {
    textAlign: `center`
  }
});

export default function StyledText({
  children,
  colors,
  fontSize,
  fontWeight,
  fonts,
  style,
  align,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    align === `center`&& styles.TextAlignCenter,
    colors === `primary` && styles.colorPrimary,
    colors === `secundary` && styles.colorSecundary,
    fontSize === `subHeading` && styles.subHeading,
    fontWeight === `bold` && styles.bold,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
