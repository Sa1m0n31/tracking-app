import React from 'react';
import {StyleSheet, View} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../screens/Settings";
import Tracking from "../screens/Tracking";
import Profile from "../screens/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabsNavigation = () => {
    return <View>
        <Tab.Navigator screenOptions={({route}) => {
            return {
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if(route.name === 'Settings') {
                        iconName = 'settings-outline';
                    }
                    else if(route.name === 'Tracking') {
                        iconName = 'navigate-outline';
                    }
                    else {
                        iconName = 'list-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            }
        }}>
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Tracking" component={Tracking} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    </View>
}

// const BottomNavigationContainer = styled(View)`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: auto;
// `;

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // flex: 1,
        // bottom: 0
    }
});

export default BottomTabsNavigation;
