import { SIGN_IN, SIGN_OUT } from './../actions/types';

// 全大寫，表示不要修改這個物件
const INTIAL_STATE = {
  isSignedIn: null,
  userId: null
};

// for fist time ---> undefined
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
