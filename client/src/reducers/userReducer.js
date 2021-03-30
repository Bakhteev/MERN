import { USER_LOGOUT, USER_LOGIN } from '../components/actions/user.action'

const initialState = {
  currentUser: {},
  isAuth: false,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      }
    case USER_LOGOUT:
      return {
        ...state,
        currnetUser: {},
        isAuth: false,
      }
    default: {
      return state
    }
  }
}
