import React from "react";
import { IUser } from "../types/user";

export interface IAuthContext {
  user: IUser,
  handleLogin: (loginData: ILoginData) => Promise<void>
  handleSignOut: () => void;
}

export interface IAuthContextProviderProps {
  children?: React.ReactNode
  value?: IUser
}

export interface ILoginData {
  email: string;
  password: string;
}