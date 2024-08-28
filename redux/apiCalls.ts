import {
  registerStart,
  registerSuccess,
  registerFailure,
  User,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "@/redux/slices/userSlice";
import { api } from "@/axios";
import { AppDispatch } from "./store";
import { AxiosError } from "axios";

export const register = async (dispatch: AppDispatch, user: User) => {
  dispatch(registerStart());
  try {
    const res = await api.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    console.log(res.data);
  } catch (err: any) {
    dispatch(registerFailure(err.message));
    console.log(err.message);
  }
};

export const updateUser = async (
  dispatch: AppDispatch,
  id: string | undefined,
  user: User
) => {
  dispatch(updateUserStart());
  try {
    const res = await api.put(`/user/${id}`, user);
    dispatch(updateUserSuccess(res.data));
    console.log(res.data);
  } catch (err: any) {
    dispatch(updateUserFailure(err.message));
    console.log(err.message);
  }
};
