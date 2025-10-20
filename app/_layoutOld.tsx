import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

import HomeScreen from "./(tabs)/HomeScreen";
import ProfileScreen from "./(tabs)/ProfileScreen";
import SettingsScreen from "./(tabs)/SettingsScreen";
import PostListScreen from "./(tabs)/ShopTab/Stack Nativagtor/PostListScreen";
import PostDetailScreen from "./screens/PostDetailScreen";

// Stack pour le Blog
export type RootStackParamList = {
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
};

/*function BlogStackNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PostList"
        component={PostListScreen}
        options={{ title: "Blog Posts" }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{ title: "Post Details" }}
      />
    </Stack.Navigator>
  );
}

// Tab Navigator global
const Tab = createBottomTabNavigator();

/*export default function RootLayout() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: "Home", tabBarIcon: () => <Text>🏠</Text> }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarLabel: "Profile", tabBarIcon: () => <Text>👤</Text> }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarLabel: "Settings", tabBarIcon: () => <Text>⚙️</Text> }}
        />

      </Tab.Navigator>
  );
}*/
