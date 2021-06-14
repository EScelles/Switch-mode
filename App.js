import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  // State used
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkMode ? "#2c3e50" : "#ecf0f1",
      }}
    >
      {darkMode ? (
        <Image source={require("./assets/moon.png")} style={styles.logo} />
      ) : (
        <Image source={require("./assets/sun.png")} style={styles.logo} />
      )}
      <Button
        title="mode sombre"
        onPress={() => setDarkMode((prevState) => !prevState)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
});
