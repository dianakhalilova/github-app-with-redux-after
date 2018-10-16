import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  loggedIn: false,
  username: "",
  profile: {},
  followers: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return {
        ...state,
        username: action.payload
      };
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        profile: action.payload
      }
    case "LOGOUT":
      return {
        ...initialState,
      }
    case "FETCH_FOLLOWERS":
      return {
        ...state,
        followers: action.payload
      }
    default:
      return state;
  }
};
  
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);