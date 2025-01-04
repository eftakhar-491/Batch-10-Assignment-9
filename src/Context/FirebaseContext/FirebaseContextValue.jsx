import {
  createUser,
  resetUserPass,
  updateUserData,
  useGoogleAuth,
  userSignIn,
  userSignOut,
} from "../../FireBase/Firebase";

export const FireBaseContextValue = {
  useGoogleAuth,
  createUser,
  updateUserData,
  userSignOut,
  userSignIn,
  resetUserPass,
};
