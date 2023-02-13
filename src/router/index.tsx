import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Cart,
  Confirmation,
  FoodList,
  History,
  Home,
  Payment,
  Profile,
  Promo,
} from "../presentation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "../components";

export type StackParams = {
  MainApp: undefined;
  Home: any;
  Cart: undefined;
  Promo: undefined;
  Riwayat: undefined;
  Profile: undefined;
  FoodList: undefined;
  Payment: undefined;
  Confirmation: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();
const Tab = createBottomTabNavigator<StackParams>();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigation {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Promo" component={Promo} />
      <Tab.Screen name="Riwayat" component={History} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FoodList"
        component={FoodList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
