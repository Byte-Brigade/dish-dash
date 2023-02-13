import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Router from "./router";

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
};

export default App;
