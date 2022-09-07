import * as React from 'react';
import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();
export default class TabNavigator extends React.Component {
    render() {
        return (
            <Tab.Navigator
            labeled = {false}
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen name="Feed" component={Feed} />
                <Tab.Screen name="CreatePost" component={CreatePost} />
            </Tab.Navigator>
        )
    }
}