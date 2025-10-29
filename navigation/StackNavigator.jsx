
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import HomeScreen from "../screen/HomeScreen";
import StatsScreen from "../screen/StatsScreen";
import ProfileScreen from "../screen/ProfileScreen";
import LoginScreen from "../screen/LoginScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ✅ Bottom Tab Navigator
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#111",
          borderTopWidth: 0,
          height: 70,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") iconName = focused ? "home" : "home-outline";
          else if (route.name === "Stats") iconName = focused ? "bar-chart" : "bar-chart-outline";
          else if (route.name === "Profile") iconName = focused ? "person" : "person-outline";

          return (
            <Ionicons name={iconName} size={26} color={focused ? "#fff" : "#888"} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// ✅ Stack Navigator (Login → Tabs)
export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
}
