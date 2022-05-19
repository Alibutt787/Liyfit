import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnlineRegistration from './OnlineRegistration';
import License from './License/License';
import Idconfirm from './Idconfirm/Idconfirm';
import Cnic from './Cnic/Cnic';
import VehicleNav from './VehicleInfo/VehicleNav/VehicleNav';
import BasicInfo from './BasicInfo/BasicInfo';
import DriverTermsConditionPage from './DriverTerm/DriverTermsConditionPage';

const Stack = createNativeStackNavigator();


const initialState = {
  todoList: []
};
const actions = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_COMPLETED: "TOGGLE_COMPLETED"
};
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO_ITEM:
      return {
        todoList: [
          ...state.todoList,
          {
            id: new Date().valueOf(),
            label: action.todoItemLabel,
            completed: false
          }
        ]
      };
    case actions.REMOVE_TODO_ITEM: {
      const filteredTodoItem = state.todoList.filter(
        (todoItem) => todoItem.id !== action.todoItemId
      );
      return { todoList: filteredTodoItem };
    }
    case actions.TOGGLE_COMPLETED: {
      const updatedTodoList = state.todoList.map((todoItem) =>
        todoItem.id === action.todoItemId
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      );
      return { todoList: updatedTodoList };
    }
    default:
      return state;
  }
};
export const TodoListContext = React.createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    todoList: state.todoList,
    addTodoItem: (todoItemLabel) => {
      dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel });
    },
    removeTodoItem: (todoItemId) => {
      dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId });
    },
    markAsCompleted: (todoItemId) => {
      dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId });
    }
  };

  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  );
};


 const OnlineRegistrationNav = () => {
  return (
    <Provider>
      <Stack.Navigator>
        <Stack.Screen
          name="OnlineRegistration"
          component={OnlineRegistration}
          options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="DriverTermsConditionPage" component={DriverTermsConditionPage}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="BasicInfo" component={BasicInfo}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="License" component={License}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="Idconfirm" component={Idconfirm}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="Cnic" component={Cnic}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="VehicleNav" component={VehicleNav}  options={{ title: 'Welcome',headerShown: false }}/>
          </Stack.Navigator>
          </Provider>
  );
};
export default OnlineRegistrationNav;
