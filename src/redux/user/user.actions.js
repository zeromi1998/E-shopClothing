import { userActiontype } from "./user.types";

export const setCurrentUser = user => ({
  type: userActiontype.SET_CURREMT_USER,
  payload: user
});
