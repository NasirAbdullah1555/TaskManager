import 'react-native-gesture-handler';
import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import { taskReducer, initialState } from './src/reducers/taskReducer';

const Stack = createStackNavigator();

const App = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} state={state} dispatch={dispatch} />}
          </Stack.Screen>
          <Stack.Screen name="AddTask">
            {(props) => <AddTaskScreen {...props} dispatch={dispatch} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
